import { createWorker } from "tesseract.js";

export async function run(image: string): Promise<string> {
  const worker = await createWorker();

  await worker.setParameters({
    tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  });

  const {
    data: { text },
  } = await worker.recognize(image);
  await worker.terminate();

  return text;
}
