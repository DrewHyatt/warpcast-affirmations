import { Controller, Render, Get, Post, Body } from '@nestjs/common';
import { AffirmationService } from './affirmation.service';
import { CreateAffirmationDto } from './dto/create-affirmation.dto';

@Controller('affirmation')
export class AffirmationController {
  constructor(private readonly affirmationService: AffirmationService) {}

  @Post()
  create(@Body() createAffirmationDto: CreateAffirmationDto) {
    return this.affirmationService.create(createAffirmationDto);
  }

  @Get('frame')
  @Render('frame')
  root() {
    // Fetch frame data based on id
    // const frameData = this.frameService.getFrame(id);

    return {
      image: 'Drew!!',
    };
  }
}
