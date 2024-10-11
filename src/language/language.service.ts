import { Injectable, NotFoundException } from '@nestjs/common';
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

    async delete(id: string) : Promise<void> {
        const result = await this.languageRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Language with ID "${id}" not found`);
        }
    }

}
