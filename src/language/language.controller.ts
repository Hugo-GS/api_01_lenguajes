import { Controller, Get, Post, Body, Delete, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageEntity } from './language.entity';
import { ReturningStatementNotSupportedError } from 'typeorm';

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
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deleteLanguage(@Param('id') id: string) {
        await this.languageService.delete(id);
        return {message: `Language with ID ${id} has been deleted.`};
    }
}
