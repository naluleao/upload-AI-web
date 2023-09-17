import { pipeline } from "@xenova/transformers"

import { transcriptionExample } from "./utils/transcription.js"
export async function trancribe(audio) {
  try {
    console.log("Realizando a transcrição...")
    const trancribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    )
    const transcription = await trancribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",
    })
    console.log("Transcrição finalizada com sucesso!")
    return transcription?.text.replace("[Música]", "")
  } catch (error) {
    throw new Error(error)
  }
}
