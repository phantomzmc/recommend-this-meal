import ollama from "ollama";

export const getItemInReceipt = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const imageBase64 = Buffer.from(buffer).toString("base64");
  const response = await ollama.chat({
    model: "llama3.2-vision",
    messages: [
      {
        role: "user",
        content:
          `Read the receipt. Extract only the list of purchased items. For each item, include: 
            •	Item name (can be in Thai or English)
            •	Quantity (if available)
            •	Price (either per item or total, if available)
            Do not include total amount, VAT, store info, or dates.`,
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