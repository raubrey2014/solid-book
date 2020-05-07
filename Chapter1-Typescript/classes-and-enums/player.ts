class Player {
    public playerType: number;
    static instancesCreated = 0; // class variable, only accessible through the class
    readonly name: string; // can only be set here or in the constructor
    constructor(playerType: number) {
        this.playerType = playerType;
        Player.instancesCreated++;
    }

    public static createPlayer(playerType: number): Player {
        return new Player(playerType);
    }

    public play(): string {
        return 'Playing!';
    }
}

enum PlayerTypes {
    Baseball,
    Basketball,
}
/**
 * The result for an enum without explicit types:
 *
 * {
 *      0: 'Baseball',
 *      1: 'Basketball',
 *      Baseball: 0,
 *      Basketball: 1
 * }
 *
 * Had the enum been:
 *
 * enum PlayerTypes {
 *  Baseball = "baseball"
 * }
 *
 * result (not number values, no 0 index values):
 *
 * {
 *  Baseball = 'baseball'
 * }
 */

export const runPlayerExample = (): void => {
    const p1: Player = Player.createPlayer(PlayerTypes.Baseball);
    const p2: Player = Player.createPlayer(PlayerTypes.Basketball);
    console.log(p1.play());
    console.log(p2.play());
    console.log(Player.instancesCreated);

    console.log(PlayerTypes);
};

export default Player;
