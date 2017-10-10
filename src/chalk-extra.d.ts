import 'chalk';
declare module 'chalk' {
    export function hex(colorStr : string) : ChalkChain;
    export function bgHex(colorStr : string) : ChalkChain;
    interface ChalkChain {
        hex(colorStr : string) : ChalkChain;
        bgHex(colorStr : string) : ChalkChain;
    }
}