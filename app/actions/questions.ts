"use server";

import { createClient } from "@supabase/supabase-js";

// Usamos el cliente con la Service Role Key si tienes RLS restrictivo, 
// o el cliente normal si la tabla permite inserts públicos.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function submitQuestion(formData: FormData) {
  const question = formData.get("question") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!question) return { error: "La pregunta es obligatoria" };

  try {
    const { error } = await supabase
      .from("public_questions")
      .insert([
        { 
          question: question.trim(),
          // Si tu tabla no tiene columnas para nombre/email, 
          // podrías concatenarlos a la pregunta o agregarlos a la tabla.
          status: 'pending' 
        }
      ]);

    if (error) throw error;

    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo enviar la pregunta" };
  }
}