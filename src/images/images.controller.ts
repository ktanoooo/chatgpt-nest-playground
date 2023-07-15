import { Body, Controller, Post } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  async createImage(@Body() body: { content: string }) {
    try {
      const response = await this.imagesService.createImage({
        content: body.content,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
