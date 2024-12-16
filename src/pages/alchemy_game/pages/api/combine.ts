import { AlchElement } from "../../interfaces/element";
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

type ResponseData = {
  message: string;
  element?: AlchElement;
  discovered?: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const w1 = req.query.word1 as string;
  const w2 = req.query.word2 as string;

  if (!w1 || !w2) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  const word1 = (w1 > w2 ? w1 : w2).toLowerCase();
  const word2 = (w1 > w2 ? w2 : w1).toLowerCase();

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        You are the best linguist in the world. 
        You should give a word that representing or relating to the 2 given words.

        Try to answer with a new word that has an actual meaning. 
        ONLY answer in the following format. 
        
        [emoji that best represent the text],[text in the same language as the 2 words]`,
      },
      { role: "user", content: `"${word1}" and "${word2} ="` },
    ],
    model: "gpt-4o-mini",
    max_tokens: 512,
  });

  const output = chatCompletion["choices"][0]["message"]["content"];
  if (!output) {
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }

  const splitOutput = output.split(",");
  const result = {
    emoji: splitOutput[0],
    text: splitOutput[1],
  };

  return res.status(200).json({
    message: "new element created",
    element: {
      emoji: result.emoji,
      text: result.text,
      discovered: true,
    },
  });
}
