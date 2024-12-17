import {Avatar, Grid2, useTheme} from "@mui/material";
import Button from "@mui/material/Button";
import {socialList} from "./const.ts";

export const Footer = () => {
    const theme = useTheme();
    return (
        <Grid2 container p={3} justifyContent="center" spacing={1} bgcolor={theme.palette.background.paper} style={{position: "fixed", bottom: 0, left: 0, width: "100%"}}>
            {socialList.map((social) => (
                <Grid2 key={social.pic}>
                    <Button href={social.link} target="_blank">
                        <Avatar src={social.pic}/>
                    </Button>
                </Grid2>
            ))}
        </Grid2>
    )
}