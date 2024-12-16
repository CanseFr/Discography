import {Grid2, useTheme} from "@mui/material";

export const Home = () => {
    const theme = useTheme()

    return (
        <Grid2 height="80vh" bgcolor={theme.palette.background.default}
        >
            <p>Home page</p>
        </Grid2>
    )
}