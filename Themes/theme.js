import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#e63e32",
    secondary: "#575757",
    black: "#000000",
    white: "#FFFFFF",
    lightGray: "#F5F5F6",
    lightGray2: "rgba(217,217,217,0.42)",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
    success : "#029d32"
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 5,
    roundRadius:30,
    padding: 10,
    padding2: 12,
    largeTitle: 50,
    h1: 30,
    h2: 25,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    body6: 10,
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Inter-Bold", fontSize: SIZES.largeTitle},
    h1: { fontFamily: "Inter-Bold", fontSize: SIZES.h1 },
    h2: { fontFamily: "Inter-Bold", fontSize: SIZES.h2 },
    h3: { fontFamily: "Inter-Bold", fontSize: SIZES.h3 },
    h4: { fontFamily: "Inter-Bold", fontSize: SIZES.h4 },
    body1: { fontFamily: "Inter-Medium", fontSize: SIZES.body1 },
    body2: { fontFamily: "Inter-Medium", fontSize: SIZES.body2 },
    body3: { fontFamily: "Inter-Medium", fontSize: SIZES.body3 },
    body4: { fontFamily: "Inter-Medium", fontSize: SIZES.body4 },
    body5: { fontFamily: "Inter-Medium", fontSize: SIZES.body5 },
    body6: { fontFamily: "Inter-Medium", fontSize: SIZES.body6 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
