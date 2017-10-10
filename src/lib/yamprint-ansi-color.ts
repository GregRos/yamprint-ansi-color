import {
    yamprint, YamprintFormatter, FormatSpecifier
} from "yamprint";

import chalk = require('chalk');

export type YamprintTheme = {
    [K in keyof FormatSpecifier] ?: (s: string) => string;
}

export module Themes {
    export const regular =  {
        symbol: chalk.magenta,
        regexp: chalk.hex('#6d872c'),
        boolean: chalk.hex("#2A00E8"),
        string: chalk.hex("#9b9b9b"),
        number: chalk.hex("786CB0"),
        date: chalk.blue,
        nul : chalk.red,
        undefined : chalk.red,
        threwAlert: chalk.hex("#000000").bgHex("#FE4949"),
        constructorTag: chalk.cyan,
        propertyKey: chalk.bold.hex("#000000"),
        sparseArrayIndex: chalk.blue,
        function : chalk.underline.hex("#5255e1"),
        circular: chalk.hex("#ffffff").bold.bgCyan
    } as YamprintTheme;
}