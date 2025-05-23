"use client";
import { supabase } from "@/lib/supabaseClient";
import { log } from "console";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import { toast } from "sonner";

type AuthContextType = {
  user: User | null;
  isLoggedIn: boolean;
  logout: () => void;
  signIn: (email: string, password: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the states
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = user !== null; // No need for this to be a state because when the state of user changes then isLogged in automatically changes
  // Get the user. Call this function when signing in and logging out
  async function currentSession() {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError) throw sessionError;

      if (sessionData?.session) {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();
        if (userError) throw userError;

        if (userData?.user) {
          const currentUser: User = {
            id: userData.user.id,
            firstName: userData.user.user_metadata.firstName,
            surname: userData.user.user_metadata.surname,
            email: userData.user?.email || "lubasimilupi@gmail.com",
          };

          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching session/user:", error);
      setUser(null);
    }
  }

  // Run the useEffect once. However, an event listener is attached to it
  useEffect(() => {
    currentSession();

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      // On sign out, it is important to update the state of the user
      currentSession();
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Helper functions: These functions will trigger the onAuthStateChange and therefore update the current session
  async function signIn(email: string, password: string): Promise<boolean> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      //router.push("/");
      return true;
    } catch (error) {
      console.error("Error signing in:", error);
      // Fix this toast issue
      return false;
    }
  }

  async function logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
