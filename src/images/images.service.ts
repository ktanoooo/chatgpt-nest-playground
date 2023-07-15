import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class ImagesService {
  private openai: OpenAIApi;

  constructor(private readonly configService: ConfigService) {
    const configuration = new Configuration({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createImage({ content }: { content: string }) {
    try {
      console.log(content);
      const completion = await this.openai.createImage({
        prompt: content,
        n: 2,
        size: '1024x1024',
      });
      console.log(completion.data);
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
