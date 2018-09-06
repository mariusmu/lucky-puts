import * as _ from "lodash";
import * as chroma from "chroma-js";

export const possiblePutPoints = [1, 3, 6, 12, 24];
export const colors = chroma.scale(["#47D98B", "#85E8E0", "#FFFF3D", "#FF9A00", "#FF5D4E"]).colors(possiblePutPoints.length, "hex");
export const colorByPoint: _.Dictionary<string> = _.fromPairs(colors.map((color, index) => {
    return [possiblePutPoints[index], color];
}));

export const getPointColorOrDefault = (point: number) => {
    return getPointColor(point) || "gray";
};

export const getPointColor = (point: number) => {
    if (colorByPoint.hasOwnProperty(point)) {
        return colorByPoint[point];
    }

    return undefined;
};
