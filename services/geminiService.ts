import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// Initialize conditionally to avoid errors if env is missing during initial render
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateRandomIdea = async (): Promise<string> => {
  if (!ai) {
    // Fallback if no API key is present
    const fallbacks = [
      "A smart mirror that compliments your outfit.",
      "AI that turns your git commits into haikus.",
      "A recipe generator based on what's rotting in your fridge.",
      "An app that predicts if a meeting could have been an email."
    ];
    return new Promise((resolve) => {
      setTimeout(() => resolve(fallbacks[Math.floor(Math.random() * fallbacks.length)]), 1000);
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a creative, quirky, and potentially useful idea for a small AI web tool or utility that an indie developer could build. Keep it under 20 words. Be witty.",
    });
    return response.text || "Idea generation failed.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI is sleeping. Try again later.";
  }
};