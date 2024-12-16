import {Outlet} from "react-router";
// import NightlightIcon from '@mui/icons-material/Nightlight';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Grid2} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {useColorScheme} from '@mui/material/styles';

const pages = ['Discographie', 'Sample Pack', 'Service', 'About'];
const link = ['disco', 'sample', 'service', 'about'];

export const TopBar = () => {

    const {mode, setMode} = useColorScheme();
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
                                    fontFamily: "groovy",
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
                                {pages.map((page, index) => (
                                    <Button
                                        key={page}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                        href={link[index]}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Grid2>
                        <Grid2>
                            <FormControlLabel control={<Switch onChange={(e) => e.target.checked ? setMode("dark") : setMode("light")}/>} label="Theme"/>
                        </Grid2>
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet/>
        </>
    )
}