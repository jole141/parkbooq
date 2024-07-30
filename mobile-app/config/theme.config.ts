interface IStyling {
  color?: string;
  background?: string;
  borderColor?: string;
  borderWidth?: string | number;
  shadow?: boolean;
  fontSize?: string;
}

interface IComponents {
  button: {
    primary: IStyling;
    secondary: IStyling;
    ternary: IStyling;
    danger: IStyling;
  };
  networkText: {
    noNodes: IStyling;
    allNodes: IStyling;
    someNodes: IStyling;
  };
  input: {
    label: IStyling;
    info: IStyling;
    warning: IStyling;
    error: IStyling;
  };
}

interface IPalette {
  greyish: string;
  primary: string;
  secondary: string;
  ternary: string;
  primaryHover: string;
  danger: string;
  dangerBorder: string;
  dangerHover: string;
  background: string;
  backgroundSecondary: string;
  blue: string;
  lightBlue: string;
  lightRed: string;
  lightGreen: string;
  white: string;
  black: string;
  grey: string;
}

export interface IFonts {
  interRegular: string;
  interMedium: string;
  interSemiBold: string;
  interBold: string;
  interExtraBold: string;
  interBlack: string;
  interLight: string;
  interThin: string;
  interExtraLight: string;
}

export interface IDefaultTheme {
  palette: IPalette;
  components?: IComponents;
  fonts: IFonts;
}

const colors: IPalette = {
  greyish: "#404040",
  primary: "#3871E0",
  secondary: "#F1F1F3",
  ternary: "#E2E7FC",
  primaryHover: "rgb(41,41,87)",
  danger: "#ffaaaa",
  dangerBorder: "#910000",
  dangerHover: "#d25959",
  background: "#F1F1F3",
  backgroundSecondary: "#FFFFFF",
  blue: "#3A5CE6",
  lightBlue: "#D9F5FD",
  lightRed: "#FDD9D9",
  lightGreen: "#DEFDD9",
  white: "#FFFFFF",
  black: "#000000",
  grey: "#B0B0B0",
};

export const theme: IDefaultTheme = {
  palette: colors,
  fonts: {
    interRegular: "inter-regular",
    interMedium: "inter-medium",
    interSemiBold: "inter-semibold",
    interBold: "inter-bold",
    interExtraBold: "inter-extrabold",
    interBlack: "inter-black",
    interLight: "inter-light",
    interThin: "inter-thin",
    interExtraLight: "inter-extralight",
  },
};
