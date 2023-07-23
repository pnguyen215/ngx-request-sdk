import { TimeX } from './time';

export enum LogLevel {
    Off = 0,
    Error,
    Warning,
    Info,
    Debug,
}

export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;

export class LoggerColorX {
    static level = LogLevel.Debug;
    static outputs: LogOutput[] = [];
    static colorMap: { [key in LogLevel]: string } = {
        [LogLevel.Off]: '\x1b[37m', // White color (use white for LogLevel.Off)
        [LogLevel.Error]: '\x1b[31m', // Red color
        [LogLevel.Warning]: '\x1b[33m', // Yellow color
        [LogLevel.Info]: '\x1b[36m', // Cyan color
        [LogLevel.Debug]: '\x1b[32m', // Green color
    };
    static enableProductionMode() {
        LoggerColorX.level = LogLevel.Warning;
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
        if (level <= LoggerColorX.level) {
            const log = this.source
                ? [`\x1b[2m${TimeX.formatToIso(new Date())}\x1b[0m \x1b[1m[${this.source}]\x1b[0m`, ...objects]
                : objects;
            const colorCode = LoggerColorX.colorMap[level];
            func(colorCode, ...log);
            LoggerColorX.outputs.forEach((output) => output(this.source, level, ...objects));
        }
    }
}
