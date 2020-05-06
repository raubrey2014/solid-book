import { explicitTypesExample } from './types/explicit-types';
import { nominalTyping } from './types/nominal-typing';
import { duckTyping } from './types/duck-typing';

const main = (): void => {
    explicitTypesExample();
    nominalTyping();
    duckTyping();
};

console.log('Executing main...');
main();
console.log('...done.');
