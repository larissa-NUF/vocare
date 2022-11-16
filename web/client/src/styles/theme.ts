import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface TypographyVariants {
        lg_p: React.CSSProperties;
        md_p: React.CSSProperties;
        sm_p: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        lg_p: React.CSSProperties;
        md_p: React.CSSProperties;
        sm_p?: React.CSSProperties;
    }

    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        fhd: true;
        uw: true;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        lg_p: true;
        md_p: true;
        sm_p: true;
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        button: { textTransform: "none" },
        h1: {
            fontSize: "1.5rem",
        },
        h2: {
            fontSize: "1.25rem",
        },
        h3: {
            fontSize: "1rem",
        },
        lg_p: {
            fontSize: "1rem",
        },
        md_p: {
            fontSize: "0.875rem",
        },
        sm_p: {
            fontSize: "0.75rem",
        },
    },
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: "#000",
                    fontSize: "0.875rem",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    color: "#9f9f9f",
                },
            },
        },
        MuiRadio: {
            defaultProps: {
                color: "primary",
            },
        },
    },
    spacing: (factor: number) => `${factor}rem`,
    palette: {
        primary: {
            light: "#F7F7F7",
            contrastText: "#34a85350",
            main: "#469ED6",
            dark: "#424A4F",
        },
        secondary: {
            light: "#F4F4F4",
            main: "#37689B",
            dark: "#9F9F9F",
            contrastText: "#8E969B",
        },
        background: {
            default: "#5A6973",
            paper: "#8EB9D4"
        },
        error: {
            main: "#f53434",
        },
        success: {
            main: "#3e9b15",
        },
        warning: {
            main: "#faca00",
        },
        grey: {
            "100": "#fff",
            "300": "#f4f4f4",
            "400": "#E5E5E5",
            "500": "#c6c6c6",
            "600": "#c4c4c4",
            "700": "#9f9f9f",
            "900": "#171717",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            fhd: 1920,
            uw: 2560,
        },
    },
});
