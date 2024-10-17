"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function getData(limit: number) {
  const supabase = createClient();

  const { data, error } = await supabase.storage.from("images").list("all", {
    limit,
    offset: 0,
    sortBy: { column: "created_at", order: "desc" },
  });

  if (error) {
    throw new Error(error.message);
  }

  const imageUrls = data.map((file) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`all/${file.name}`);
    return data.publicUrl;
  });

  return imageUrls;
}

export async function uploadFile(formData: FormData) {
  const supabase = createClient();

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

  return data;
}
