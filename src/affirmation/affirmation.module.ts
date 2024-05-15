import { Module } from '@nestjs/common';
import { AffirmationService } from './affirmation.service';
import { AffirmationController } from './affirmation.controller';

@Module({
  controllers: [AffirmationController],
  providers: [AffirmationService],
})
export class AffirmationModule {}
