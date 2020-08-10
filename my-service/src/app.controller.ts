import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('obj')
    getHelloString(): Record<string, any> {
        return this.appService.getHelloString();
    }

    @Get('var')
    getHelloObject(): string {
        return this.appService.getHelloObject();
    }
}
