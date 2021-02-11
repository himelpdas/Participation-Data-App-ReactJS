import {colorFromID} from "../helpers/Graphing";

describe("Get Pie Data From State", () => {
    test("it should return an 1:1 array of data compatible with react-minimal-pie-chart", () => {
        const input = 52

        const output = "#41cfc0"

        expect(colorFromID(input)).toEqual(output);

    });
});