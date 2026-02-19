"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone'); // <--- Nuevo campo
  const area = formData.get('area');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Bufete Juridico <onboarding@resend.dev>',
      to: ['alamzpillman845@gmail.com'],   
      replyTo: email as string,         // EL CLIENTE recibirá tu respuesta    
      subject: `Nueva Consulta: ${area}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1 style="color: #1e293b;">Nueva consulta legal</h1>
          <hr />
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${phone}</p> <p><strong>Área de interés:</strong> ${area}</p>
          <p style="background: #f1f5f9; padding: 15px; border-radius: 8px;">
            <strong>Mensaje:</strong><br />
            ${message}
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    return { error: true };
  }
}