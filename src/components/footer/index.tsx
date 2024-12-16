import {Avatar, Grid2} from "@mui/material";

export const Footer = () => {
    return (
        <Grid2 container padding={3} spacing={2} justifyContent="center" alignItems="center">
            <Grid2>
                <Avatar src={"pictures/social/bandcamp.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/facebook.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/instagram.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/link.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/social.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/soundcloud.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/t-shirt.png"}/>
            </Grid2>
            <Grid2>
                <Avatar src={"pictures/social/youtube.png"}/>
            </Grid2>
        </Grid2>
    )
}