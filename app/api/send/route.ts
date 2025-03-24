import { Resend } from "resend";

const EMAIL_API_KEY = process.env.EMAIL_API_KEY;

if (!EMAIL_API_KEY) {
  throw new Error("EMAIL_API_KEY is missing");
}

const resend = new Resend(EMAIL_API_KEY);

const generateEmailHTML = (name: string, email: string, subject: string, message: string) => `
  <div>
    <h1>¡Haz recibido un nuevo mensaje del Portfolio LenasDev!</h1>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Asunto:</strong> ${subject}</p>
    <p><strong>Mensaje:</strong> ${message}</p>
  </div>
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validación de los datos
    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
    }

    // Enviar el correo
    const emailContent = generateEmailHTML(name, email, subject, message);
    const { data, error } = await resend.emails.send({
      from: "Portfolio LenasDev <noreply@lenasdev.com>", // Asegúrate de autenticar este dominio en Resend
      to: ["easp0104@gmail.com"],
      subject: "Nuevo mensaje de contacto de LenasDev",
      html: emailContent,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Error interno del servidor";
    return new Response(JSON.stringify({ error: errorMessage }), { status: 500 });
  }
}
