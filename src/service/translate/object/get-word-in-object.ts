import { geminiGetNameObjectInPicture } from "@/service/llm/gemini/get-name-object-in-picture";

export const getWordInObject = async (file: File) => {
    const responseWord = await geminiGetNameObjectInPicture(file);
    return responseWord;
}