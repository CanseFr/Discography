import Box from "@mui/material/Box";
import {Grid2, Typography} from "@mui/material";

export const NotFoundPage = () => {
    return (
        <Box
            sx={{
                height: "80vh",
                backgroundImage: "url(pictures/home/not-found.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Grid2 container justifyContent="center" alignItems="center" height="100%">
                <Typography variant="h1" fontFamily="high" color="primary">
                    404 - Page not found
                </Typography>
            </Grid2>
        </Box>
    )
}