import { explicitTypesExample } from './types/explicit-types';
import { nominalTyping } from './types/nominal-typing';
import { duckTyping } from './types/duck-typing';
import { runPlayerExample } from './classes-and-enums/player';
import { guardTest1 } from './guards';

const main = (): void => {
    explicitTypesExample();
    nominalTyping();
    duckTyping();

    runPlayerExample();

    guardTest1();
};

console.log('Executing main...');
main();
console.log('...done.');
