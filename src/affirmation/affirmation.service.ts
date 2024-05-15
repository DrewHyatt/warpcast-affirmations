import { Injectable } from '@nestjs/common';
import { CreateAffirmationDto } from './dto/create-affirmation.dto';
import { UpdateAffirmationDto } from './dto/update-affirmation.dto';

@Injectable()
export class AffirmationService {
  create(createAffirmationDto: CreateAffirmationDto) {
    return 'This action adds a new affirmation';
  }

  findAll() {
    return `This action returns all affirmation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} affirmation`;
  }

  update(id: number, updateAffirmationDto: UpdateAffirmationDto) {
    return `This action updates a #${id} affirmation`;
  }

  remove(id: number) {
    return `This action removes a #${id} affirmation`;
  }
}
