import { IResponseGeminiObjectNameInPicture } from "@/types/response/gemini-object-name-in-picture";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const geminiGetNameObjectInPicture = async (file: File): Promise<IResponseGeminiObjectNameInPicture>  => {
  const buffer = await file.arrayBuffer();
  const imageBase64 = Buffer.from(buffer).toString("base64");
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: imageBase64,
      },
    },
    {
      text: "Look at this image and answer with the name of the object in the picture only. Do not include any explanation or extra words — just the name in english and thai. return the result in the format: 'en: <english name>\nth: <thai name>'",
    },
  ];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });
  console.log(response.text);
  const message = response.text;
  console.log("🚀 ~ geminiGetNameObjectInPicture ~ response:", response);
  if (!message) {
    throw new Error("No content in response message");
  }
  const res = message.split("\n").map(line => line.trim());
  return {
    en: res[0].replace("en:", "").trim(),
    th: res[1].replace("th:", "").trim(),
  };
};

export const geminiGetItemInReceipt = async (file: File) => {
  const buffer = await file.arrayBuffer();
  const imageBase64 = Buffer.from(buffer).toString("base64");
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: imageBase64,
      },
    },
    {
      text: `Read the receipt. Extract only the list of purchased items. For each item, include: 
            •	Item name (can be in Thai or English)
            •	Quantity (if available)
            •	Price (either per item or total, if available)
            Do not include total amount, VAT, store info, or dates.`,
    },
  ];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  });
  console.log(response.text);
  const message = response.text;
  console.log("🚀 ~ geminiGetItemInReceipt ~ response:", response);
  if (!message) {
    throw new Error("No content in response message");
  }
  return message;
};
