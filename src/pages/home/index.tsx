import Box from "@mui/material/Box";
import {TopBar} from "../../components/top-bar";

export const Home = () => {

    return (
        <>
            <TopBar/>
            <Box
                sx={{
                    height: "92vh",
                    backgroundImage: "url(pictures/home/home-bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </Box>
        </>
    )
}