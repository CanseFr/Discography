import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Grid2, Switch} from "@mui/material";
import {useColorScheme} from '@mui/material/styles';
import {Outlet} from "react-router";
import {ChangeEvent} from "react";

interface LinkAndLabelType {
    label: string;
    link: string;
}

const linkAndLabel: LinkAndLabelType[] = [
    {label: 'Discography', link: 'disco'},
    {label: 'Sample Pack', link: 'sample'},
    {label: 'Service', link: 'service'},
    {label: 'About', link: 'about'},
]


export const TopBar = () => {

    const {mode, setMode} = useColorScheme();

    const returnTheme = (e: ChangeEvent<HTMLInputElement>) => {
        return e.target.checked ? "dark" : "light"
    }

    const handleSetTheme = (e: ChangeEvent<HTMLInputElement>) => {
        setMode(returnTheme(e))
    }

    if (!mode) {
        return null;
    }
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Grid2>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                className="groovy-front"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'none', md: 'flex'},
                                    fontSize: "3rem",
                                    fontFamily: "lostar",
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Canse
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {linkAndLabel.map((item) => (
                                    <Button
                                        key={item.label}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                        href={item.link}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        </Grid2>
                        <Grid2 container spacing={2} alignItems="center">
                            <Grid2>
                                <Switch onChange={(e) => handleSetTheme(e)} checked={mode === "dark"}/>
                            </Grid2>
                            <Grid2>
                                {mode === "dark" ? <NightlightIcon/> : <WbSunnyIcon/>}
                            </Grid2>
                        </Grid2>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </>
    )
}