import {createTheme} from "@mui/material";

export const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'jmh'
            }
        },
    }
});