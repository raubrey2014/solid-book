/*
Typescript supports nominal typing

In nominal type systems, a particular type is deemed valid based on:
1. Explicit declaration
2. If the type is a subtype

Usually manifests in interfaces and classes

Nominal Typing? think - Java
*/

abstract class Instrument {
    abstract play(): string;
}

// Will be invalid until play() is implemented
class Guitar extends Instrument {
    play(): string {
        return 'G Chord!';
    }
}

class Fender extends Guitar {
    play(): string {
        return 'Shredddd';
    }
}

export const nominalTyping = (): void => {
    // Valid through subtypes
    const thingThatMakesNoise: Instrument = new Fender();

    // Valid through subtypes
    const pluckedThingThatMakesNoise: Fender = new Guitar();

    // Valid explicitly defined
    const fender: Fender = new Fender();

    // Still accessible and delegates to subclass for behavior
    // but would not be with "protected keyword"
    console.log(thingThatMakesNoise.play()); // "Shredddd"
    console.log(pluckedThingThatMakesNoise.play());
    console.log(fender.play());
};
