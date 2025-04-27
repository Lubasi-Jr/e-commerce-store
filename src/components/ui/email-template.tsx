import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>You have successfully subscribed to STYLAS newsletter!</h1>
    <p>Kind Regards,</p>
    <p>Lubasi Milupi</p>
    <p>MLPLUB001</p>
  </div>
);
