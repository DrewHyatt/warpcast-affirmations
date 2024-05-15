import { Test, TestingModule } from '@nestjs/testing';
import { AffirmationController } from './affirmation.controller';
import { AffirmationService } from './affirmation.service';

describe('AffirmationController', () => {
  let controller: AffirmationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AffirmationController],
      providers: [AffirmationService],
    }).compile();

    controller = module.get<AffirmationController>(AffirmationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
