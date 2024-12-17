import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Grid2, Switch, useTheme} from "@mui/material";
import {useColorScheme} from '@mui/material/styles';
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
    const theme = useTheme()

    const returnTheme = (e: ChangeEvent<HTMLInputElement>) => {
        return e.target.checked ? "dark" : "light"
    }

    const handleSetTheme = (e: ChangeEvent<HTMLInputElement>) => {
        setMode(returnTheme(e))
        if (window.location.pathname === "/disco") {
            window.location.reload();
        }
    }

    if (!mode) {
        return null;
    }
    return (
        <Grid2 bgcolor={theme.palette.background.paper} pr={3} pl={3}>
            <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Grid2>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        color="primary"
                        href="/"
                        fontFamily="lostar"
                        fontWeight={700}
                        letterSpacing='.3rem'
                        mr={2}
                        fontSize="3rem"
                        sx={{
                            display: {xs: 'none', md: 'flex'},
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
                                sx={{my: 2, display: 'block'}}
                                href={item.link}
                            >
                                <Typography>
                                    {item.label}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Grid2>
                <Grid2 container spacing={2} alignItems="center">
                    <Grid2>
                        <Switch onChange={(e) => handleSetTheme(e)} checked={mode === "dark"}/>
                    </Grid2>
                    <Grid2>
                        {mode === "dark" ? <NightlightIcon color="primary"/> : <WbSunnyIcon color="primary"/>}
                    </Grid2>
                </Grid2>
            </Toolbar>
        </Grid2>
    )
}