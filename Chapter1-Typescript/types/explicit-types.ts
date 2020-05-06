/*
Testing Explicit types in Typescript
*/
class Greeter {
    sayHello(name: string): string {
        return `Hello, ${name}`;
    }
}

function sayHello(): string {
    return 'Hello';
}

export const explicitTypesExample = (): void => {
    console.log(sayHello());
    console.log(new Greeter().sayHello('Ryan'));
};
