




sapColor = {
    "black": hex2rgb("000000"),
    "grey1": hex2rgb("7f7f7f"),
    "gray1": hex2rgb("7f7f7f"),
    "grey2": hex2rgb("aaaaaa"),
    "gray2": hex2rgb("aaaaaa"),
    "grey3": hex2rgb("d4d4d4"),
    "gray3": hex2rgb("d4d4d4"),
    "white": hex2rgb("ffffff"),

    "blue0": hex2rgb("19418c"),
    "blue1": hex2rgb("0c5aa6"),
    "blue2": hex2rgb("4093bc"),
    "blue3": hex2rgb("4ac1d4"),
    
    "orange0": hex2rgb("d94917"),
    "orange1": hex2rgb("ff8c00"),
    "orange2": hex2rgb("ffba31"),
    "orange3": hex2rgb("ffe863"),
    
    "green0": hex2rgb("2b911c"),
    "green1": hex2rgb("43ba10"),
    "green2": hex2rgb("77d228"),
    "green3": hex2rgb("b2ed46"),
    
    "violet0": hex2rgb("5f2f91"),
    "violet1": hex2rgb("8b3ec0"),
    "violet2": hex2rgb("c271e1"),
    "violet3": hex2rgb("eaa8f8"),
    
    "red0": hex2rgb("a11208"),
    "red1": hex2rgb("d22125"),
    "red2": hex2rgb("e85353"),
    "red3": hex2rgb("f87b95"),

    "teal0": hex2rgb("0a5e66"),
    "teal1": hex2rgb("008077"),
    "teal2": hex2rgb("08a67e"),
    "teal3": hex2rgb("23d98d"),
    
    "background": hex2rgb("1a2345")
};


sapColorHex = {
    "black": "#000000",
    "grey1": "#7f7f7f",
    "gray1": "#7f7f7f",
    "grey2": "#aaaaaa",
    "gray2": "#aaaaaa",
    "grey3": "#d4d4d4",
    "gray3": "#d4d4d4",
    "white": "#ffffff",

    "blue0": "#19418c",
    "blue1": "#0c5aa6",
    "blue2": "#4093bc",
    "blue3": "#4ac1d4",
    
    "orange0": "#d94917",
    "orange1": "#ff8c00",
    "orange2": "#ffba31",
    "orange3": "#ffe863",
    
    "green0": "#2b911c",
    "green1": "#43ba10",
    "green2": "#77d228",
    "green3": "#b2ed46",
    
    "violet0": "#5f2f91",
    "violet1": "#8b3ec0",
    "violet2": "#c271e1",
    "violet3": "#eaa8f8",
    
    "red0": "#a11208",
    "red1": "#d22125",
    "red2": "#e85353",
    "red3": "#f87b95",

    "teal0": "#0a5e66",
    "teal1": "#008077",
    "teal2": "#08a67e",
    "teal3": "#23d98d",
    
    "background": "#1a2345"
};





lineSizePrimary = 18;
lineSizeSecondary = 10;
lineSizeTertiary = 4;

pointSizePrimary = 1.4;
pointSizeSecondary = 1;
pointSizeTertiary = 0.6;

markerSizePrimary = 4 * pointSizePrimary;
markerSizeSecondary = 4 * pointSizeSecondary;

overshootPrimary = 10;
overshootSecondary = 5;

textSizePrimary = 180;
textSizeSecondary = 120;
textSizeTertiary = 80;

lineGapPrimary = 10;
lineGapSecondary = 8;
lineGapTertiary = 6;

arrowTipSize = 5;

outlineSizePixel = 10;
outlineSizeCindy = outlineSizePixel / screenresolution();

fam = "Darwin Serif Regular ALPHA";

writingSpeed = 17;






ex := "✗"; //unicode("2717");
tick := "✓"; //unicode("2713");


defaultBackgroundColor = sapColor.background;
defaultPointColor = sapColor.red3;
defaultLineColor = sapColor.blue3;
defaultStrokeColor = sapColor.teal3;
defaultTextColor = sapColor.white;
defaultPointSize = pointSizePrimary;
defaultLineSize = lineSizePrimary;
defaultOutlineSizePixel = outlineSizePixel;
defaultArrowSize = arrowTipSize;
defaultTextSize = textSizeSecondary;
