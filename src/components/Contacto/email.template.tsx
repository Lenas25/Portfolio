

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, subject, message
}) => (
  <div>
    <h1>Haz recibido nuevo mensaje del Portfolio LenasDev!</h1>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Asunto: {subject}</p>
    <p>Mensaje: {message}</p>
  </div>
);