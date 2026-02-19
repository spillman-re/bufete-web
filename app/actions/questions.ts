"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

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
          question: question.trim(), // Guardamos SOLO la pregunta pura
          user_name: name || 'Anónimo', // Info privada
          user_email: email || 'No proporcionado', // Info privada
          status: 'pending' 
        }
      ]);

    if (error) throw error;
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    return { error: "Error al enviar" };
  }
}

export async function answerQuestion(id: string, answer: string) {
  try {
    const { error } = await supabase
      .from("public_questions")
      .update({ 
        answer: answer.trim(),
        answered_at: new Date().toISOString(),
        status: 'published' 
      })
      .eq("id", id);

    if (error) throw error;
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    return { error: "Error al publicar" };
  }
}