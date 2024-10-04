import { Controller, Get, Post, Body } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageEntity } from './language.entity';

@Controller('language')
export class LanguageController {
    constructor(private readonly languageService: LanguageService){}
    @Get()
    getLanguages() {
        const res = this.languageService.findAll();
        return res
    }
    @Post()
    postCreateLanguage(@Body() createLanguageDto: Partial<LanguageEntity>) {
        return this.languageService.create(createLanguageDto);
    }
}
