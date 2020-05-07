interface Person {
    name: string;
}

export const asertionExample = (): void => {
    const friend = {};
    // friend.name = "Ryan" // --> This fails
    const proper = friend as Person;
    proper.name = 'Now works';

    const person = {} as Person;
    person.name = 'This works!';

    console.log('Friend proper: ', proper);
    console.log('Person: ', person);
};
