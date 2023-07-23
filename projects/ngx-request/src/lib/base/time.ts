export class TimeX {
    static padTo2Digits(value: number | null | undefined): string {
        return value != null ? value.toString().padStart(2, '0') : '';
    };
    static formatToIso(date: Date | null | undefined): string {
        if (!date) {
            return '';
        }
        return `${date.getFullYear()}-${TimeX.padTo2Digits(date.getMonth() + 1)}-${TimeX.padTo2Digits(date.getDate())} ` +
            `${TimeX.padTo2Digits(date.getHours())}:${TimeX.padTo2Digits(date.getMinutes())}:${TimeX.padTo2Digits(date.getSeconds())}`;
    };
    static formatDateStringToIso(date: string | null | undefined): string {
        if (!date) {
            return '';
        }
        return TimeX.formatToIso(new Date(date));
    };
    static transformMillsToHHmmss(milliseconds: number | null | undefined): string {
        const timeDefault = '00:00:00';
        if (milliseconds == null || milliseconds === 0) {
            return timeDefault;
        }
        let seconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        return `${TimeX.padTo2Digits(hours)}:${TimeX.padTo2Digits(minutes)}:${TimeX.padTo2Digits(seconds)}`;
    };
    static calcDuration(from: Date | null | undefined, to: Date | null | undefined): string {
        if (!from || !to) {
            return '00:00:00';
        }
        const msBetweenDates: number = to.getTime() - from.getTime();
        return TimeX.transformMillsToHHmmss(msBetweenDates);
    };
    static isValidDateTime(timestamp: string, context: 'past' | 'future' | 'current' = 'current'): boolean {
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) {
            return false;
        }
        if (context === 'past' && date >= new Date()) {
            return false;
        }
        if (context === 'future' && date <= new Date()) {
            return false;
        }
        return true;
    };
    static isOnTime(target: Date, current: Date = new Date()): boolean {
        return target <= current;
    };
    static formatEscarpsDateTime(target: Date): string {
        const current = new Date();
        const diff = current.getTime() - target.getTime();
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        if (weeks > 0) {
            return weeks === 1 ? 'a week ago' : `${weeks} weeks ago`;
        } else if (days > 0) {
            return days === 1 ? 'a day ago' : `${days} days ago`;
        } else if (hours > 0) {
            return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
        } else if (minutes > 0) {
            return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
        } else {
            return seconds <= 10 ? 'just now' : `${seconds} seconds ago`;
        }
    }
}
