import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const supabase = createClient();

  const formData = await request.formData();

  const imageFile = formData.get("imageFile");
  const imageFileName = formData.get("imageFileName");

  if (!imageFile || !imageFileName) return;

  const filePath =
    "all/" + `${Math.random()}-${imageFileName}`.replaceAll("/", "-");

  const { data, error } = await supabase.storage
    .from("images")
    .upload(filePath, imageFile, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/");

  return Response.json({ data });
}
