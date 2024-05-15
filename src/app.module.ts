import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AffirmationModule } from './affirmation/affirmation.module';

@Module({
  imports: [AffirmationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
