import {Injectable} from '@nestjs/common';
import { HELLO_OBJECT, HELLO_VARIABLE} from '../../constants/src/variables';

@Injectable()
export class AppService {
    getHelloString(): Record<string, any> {
        return HELLO_OBJECT;
    }

    getHelloObject(): string {
        return HELLO_VARIABLE;
    }
}
