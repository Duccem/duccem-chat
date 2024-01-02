import { RunnablePassthrough, RunnableSequence } from 'langchain/schema/runnable';
import { HuggingFaceInference } from 'langchain/llms/hf';
export class Lang {
  private chain!: RunnableSequence;
  private model: HuggingFaceInference;

  constructor() {
    this.model = new HuggingFaceInference({
      apiKey: process.env.HUGGINGFACE_API_KEY,
      model: 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    });
  }
}