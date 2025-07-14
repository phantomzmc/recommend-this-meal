import ollama from "ollama";

export const getTranslateWord = async (word: string) => {
    const responseTranslate = await ollama.chat({
    model: "scb10x/typhoon-translate-4b",
    messages: [
      {
        role: "user",
        content: `Translate the word "${word}" into Thai. Only reply with the Thai word, no explanation.`,
      },
    ],
  });
  return responseTranslate.message.content;
}