import { EmailTemplate } from '@/components/Contacto/email.template';
import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Portfolio LenasDev <onboarding@resend.dev>',
      to: ['easp0104@gmail.com'],
      subject: "Nuevo mensaje de contacto de LenasDev",
      react: await EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}