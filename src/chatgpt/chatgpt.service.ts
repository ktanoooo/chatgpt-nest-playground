import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ChatgptService {
  private openai: OpenAIApi;

  constructor(private readonly configService: ConfigService) {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
    this.openai = new OpenAIApi(configuration);
  }

  async postMessage({ message }: { message: string }) {
    try {
      console.log(message);
      const completion = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      });
      console.log(completion.data.choices);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
