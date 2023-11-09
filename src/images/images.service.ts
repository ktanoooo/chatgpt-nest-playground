import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class ImagesService {
  private openai: OpenAI;

  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async createImage({ content }: { content: string }) {
    try {
      console.log(content);
      const completion = await this.openai.images.generate({
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
