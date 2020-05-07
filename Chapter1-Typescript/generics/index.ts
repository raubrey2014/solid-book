interface Queue<T> {
    data: T[];
    push: (t: T) => void;
    pop: () => T;
}

interface Monkey {
    name: string;
    color: string;
}

class MonkeyQueue implements Queue<Monkey> {
    data: Monkey[];

    constructor() {
        this.data = [];
    }

    push(monkey: Monkey): void {
        this.data.push(monkey);
    }

    pop(): Monkey {
        return this.data.shift();
    }
}

export const exampleGenerics = (): void => {
    const mQ: MonkeyQueue = new MonkeyQueue();
    mQ.push({ name: 'no explicit type', color: 'this still works!' });
    mQ.push({ name: 'no explicit type', color: 'this still works!' });
    mQ.pop();

    console.log(mQ.data);
};
