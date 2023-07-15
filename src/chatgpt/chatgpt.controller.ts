import { Controller, Post, Body } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatgptController {
  constructor(private readonly chatgptService: ChatgptService) {}

  @Post()
  async postMessage(@Body() body: { message: string }) {
    try {
      const response = await this.chatgptService.postMessage({
        message: body.message,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
