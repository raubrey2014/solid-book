/**
 * Interfaces in typescript do not get compiled to anything in javascript..
 * they are strictly a developer mechanism.
 *
 * Contrived example here: but interfaces can extend other interfaces
 */

interface Nameable {
    name: () => string;
}

type LogEvent = Nameable;

interface Logger {
    logLevel: string;
}

interface LogEvents {
    logger: Logger;
    logEvent: (event: LogEvent) => void;
}

class DomainEvents implements LogEvents {
    logger: Logger;
    constructor(logger: Logger) {
        this.logger = logger;
    }

    logEvent(event: LogEvent): void {
        console.log(event.name());
    }
}

export const exampleLogging = (): void => {
    const l: Logger = { logLevel: 'debug' };
    const d: DomainEvents = new DomainEvents(l);

    const e: LogEvent = { name: () => 'event 1!' };

    d.logEvent(e);
};
