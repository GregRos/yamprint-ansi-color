
import {Themes} from "../lib/yamprint-ansi-color";
import {yamprint, YamprintFormatter} from "yamprint";

let yp = yamprint.create(new YamprintFormatter().theme(Themes.regular));
let circ = {
    a : null
};

circ.a = circ;

let arrCircular = {
    arr : []
};

arrCircular.arr.push(arrCircular);
arrCircular.arr.push(12355);
function sparseArray(...pairs : [any, any][]) : any[] {
    let arr = [];
    for (let [index, value] of pairs) {
        arr[index] = value;
    }
    return arr;
}
class MeaningfulError extends Error {
    get specialInfo() {
        return 1235;
    }

    url = "http://www.google.com";

    time = new Date();
}
console.log(yp({
    obj: {
        number: 123.45,
        string: "hello",
        boolean: false,
        etc1: null,
        etc2: undefined,
        regexp : /(abc)+/,
        date : new Date(),
        circular : circ,
        multiLineText :
            `yamprint is yet another pretty-printing library, with output inspired by YAML syntax.
yamprint stringifies objects into a convenient syntax that allows you to easily inspect their properties. 
It is also highly customizable and supports printing many types of data.
It also supports stuff like word wrapping and has a special format that allows it pretty-print text or other data spanning several lines.`,
        withPrototype : new function SomePrototype() {
            this.a = 2345;
            this.b = [];
            this.c = {

            };
        },
        functionWithName: function nameOfFunction() {

        },
        array: [
            {
                anotherNumber: 123454,
                symbol: Symbol.for("example")
            },
            [
                "nested",
                "array",
                [
                    "even deeper"
                ]
            ]
        ],
        get thrownException() {
            throw new Error("asdf")
        },
        sparseArray : sparseArray([1, "sparse"], [10, "array"], [5000, "with indexes and"], ["string", "keys"])
    },

}));
