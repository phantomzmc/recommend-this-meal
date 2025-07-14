import ollama from "ollama";

export const getNameObjectInPicture = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const imageBase64 = Buffer.from(buffer).toString("base64");
  const response = await ollama.chat({
    model: "llama3.2-vision",
    messages: [
      {
        role: "user",
        content:
          "Look at this image and answer with the name of the object in the picture only. Do not include any explanation or extra words — just the name.",
        images: [imageBase64],
      },
    ],
  });

  const message = response.message;
  console.log("🚀 ~ getNameObjectInPicture ~ message:", message)
  if (!message || !message.content) {
    throw new Error("No content in response message");
  }
  return message.content;
};
