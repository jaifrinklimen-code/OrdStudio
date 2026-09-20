import axios from "axios";
import { logger } from "./logger";

export async function generateFluxSticker(prompt: string) {
  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell",
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
        },
        responseType: "arraybuffer",
      }
    );

    const base64 = Buffer.from(response.data).toString("base64");

    return `data:image/png;base64,${base64}`;
  } catch (error: any) {
    logger.error(
      { status: error.response?.status },
      "HuggingFace API request failed"
    );
    throw new Error("Image generation failed");
  }
}