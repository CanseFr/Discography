import {Avatar, Grid2} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {socialList} from "./const.ts";

export const Footer = () => {
    return (
        <AppBar position="static" sx={{bottom: "footer"}}>
            <Container maxWidth="xl">
                <Grid2 mb={0} container padding={3} spacing={2} justifyContent="center" alignItems="center">
                    {socialList.map((social) => (
                        <Grid2>
                            <Button href={social.link} target="_blank">
                                <Avatar src={social.pic}/>
                            </Button>
                        </Grid2>
                    ))}
                </Grid2>
            </Container>
        </AppBar>
    )
}