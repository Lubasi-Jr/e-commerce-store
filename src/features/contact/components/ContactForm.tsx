"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully");
    // Reset fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="items-center justify-center w-full px-4 sm:px-[80px] lg:px-40 h-auto grid gap-4 grid-cols-1 lg:grid-cols-2"
    >
      <div
        id="input-feild"
        className=" grid col-span-1 w-full items-center gap-1.5"
      >
        <Label htmlFor="name">Fullname</Label>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        id="input-feild"
        className=" grid col-span-1 w-full items-center gap-1.5"
      >
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Label htmlFor="message">Message</Label>
      <div
        id="text-area-field"
        className="col-span-1 lg:col-span-2 grid gap-1.5 items-center w-full mb-1"
      >
        <Textarea
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="col-span-1 lg:col-span-2 flex justify-center mb-6">
        <Button type="submit" className="w-full max-w-xs">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
