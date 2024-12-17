import {createTheme} from "@mui/material";

export const ternary = '#d2deae'
export const primary = '#151515'
export const secondary = '#000000'

export const theme = createTheme({
    colorSchemes: {
        // DARK
        dark: {
            palette: {
                background: {
                    default: primary,
                    paper: secondary,
                },
                primary: {
                    main: ternary,
                    dark: secondary
                }
            }
        },
        // LIGHT
        light: {
            palette: {
                background: {
                    default: '#ffffff',
                    paper: ternary,
                },
                primary: {
                    main: primary,
                    dark: ternary

                }
            },
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'jmh',
            },

        },
    }
});