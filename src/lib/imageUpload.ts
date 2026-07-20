const API_KEY = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY!;

export const uploadImage = async (file: File): Promise<string> => {
  if (!file) {
    throw new Error("No image selected.");
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data?.error?.message || "Image upload failed.");
  }

  return data.data.url;
};