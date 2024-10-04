import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageEntity } from './language.entity';
import { promises } from 'dns';

@Injectable()
export class LanguageService {
    constructor(
        @InjectRepository(LanguageEntity)
        private readonly languageRepository: Repository<LanguageEntity>,
    ) {}

    findAll(): Promise<LanguageEntity[]> {
        return this.languageRepository.find();
    }

    create(data: Partial<LanguageEntity>): Promise<LanguageEntity> {
        const newEntity = this.languageRepository.create(data);
        return this.languageRepository.save(newEntity);
    }

}
