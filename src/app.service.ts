import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Parte de la logica de negocio
  getHello(): string {
    return 'Hello World!';
  }

}
