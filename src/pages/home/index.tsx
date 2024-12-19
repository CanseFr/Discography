import Box from "@mui/material/Box";
import {TopBar} from "../../components/top-bar";
import {defineDependingTheme} from "../../common/tool";

export const Home = () => {

    return (
        <>
            <TopBar/>
            <Box
                sx={{
                    height: "92vh",
                    backgroundImage: defineDependingTheme("url(pictures/home/home-bg.jpg)", "url(pictures/home/bg-home-light.jpg)"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </Box>
        </>
    )
}