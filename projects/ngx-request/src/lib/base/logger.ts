import { TimeX } from './time';

export enum LogLevel {
    Off = 0,
    Error,
    Warning,
    Info,
    Debug,
}

export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;

export class LoggerX {
    static level = LogLevel.Debug;
    static outputs: LogOutput[] = [];

    static enableProductionMode() {
        LoggerX.level = LogLevel.Warning;
    }

    constructor(private source?: string) { }

    debug(...objects: any[]) {
        this.log(LogLevel.Debug, console.log, objects);
    }

    info(...objects: any[]) {
        this.log(LogLevel.Info, console.info, objects);
    }

    warn(...objects: any[]) {
        this.log(LogLevel.Warning, console.warn, objects);
    }

    error(...objects: any[]) {
        this.log(LogLevel.Error, console.error, objects);
    }

    private log(level: LogLevel, func: (...args: any[]) => void, objects: any[]) {
        if (level <= LoggerX.level) {
            const log = this.source
                ? [`\x1b[2m${TimeX.formatToIso(new Date())}\x1b[0m \x1b[1m[${this.source}]\x1b[0m`, ...objects]
                : objects;
            func(...log);
            LoggerX.outputs.forEach((output) => output(this.source, level, ...objects));
        }
    }
}
