/*
There are some useful features of Typescript that make it easy to
ensure proper type flow, check existence of properties, and more.
*/

// Inline type.. quick and dirty abstraction
const onlyCertainPass = (props: { fieldName: 'email' | 'password' | 'phonenumber' }): void => {
    console.log(props);
    // console.log(fieldName) // fieldName is not accessible, this ^ is not a deconstruction

    // how can you assign types here?
    const { fieldName } = props;
    console.log(fieldName);
};

const typedMaps = (): void => {
    const GenreType: { [index: number]: string } = {
        1: 'Metal',
        2: 'Rap',
        3: 'Pop',
    };

    console.log(GenreType);
    console.log(GenreType['1']);
    console.log(GenreType['4']); // undefined, no compile time checks
    console.log(GenreType['3']);
};

export const guardTest1 = (): void => {
    onlyCertainPass({ fieldName: 'email' });
    // onlyCertainPass({ fieldName: 'example' }); // fails at compile time!

    typedMaps();
};
