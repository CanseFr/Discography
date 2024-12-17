import {createTheme} from "@mui/material";
import { lime } from '@mui/material/colors';

export const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    palette:{
        primary: {
            main: lime[500]
        }
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: 'jmh'
            }
        },
    }
});