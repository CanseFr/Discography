import {Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography, useTheme,} from "@mui/material";
import {cardServices, processList} from "./const.ts";


export const ServicePage = () => {
    const theme = useTheme()
    return (
        <Box>
            <Grid2
                padding={10}
                textAlign="center"
                bgcolor={theme.palette.background.default}
                color={theme.palette.text.primary}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" gutterBottom>
                        Sound Design Services
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Bringing life to your visuals through immersive soundscapes and
                        impactful audio design.
                    </Typography>
                    <Button variant="contained" size="large">
                        Get Started
                    </Button>
                </Container>
            </Grid2>

            <Grid2 paddingTop={10}>
                <Typography variant="h4" align="center" paddingBottom={10}>
                    Our Services
                </Typography>
                <Grid2 container spacing={4} justifyContent="center">
                    {cardServices.map(({img, title, label, desc}) => (
                        <Grid2>
                            <Card sx={{maxWidth: 345, margin: "auto"}}>
                                <CardMedia sx={{height: 140}} image={img} title={title}/>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>{label}</Typography>
                                    <Typography variant="body2">{desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>

            <Grid2 padding={10}>
                <Typography variant="h4" paddingBottom={10} align="center">
                    Our Process
                </Typography>

                {processList.map(({label, desc}) => (
                    <Grid2 textAlign="center" padding={1}>
                        <Typography variant="h5" gutterBottom>
                            {label}
                        </Typography>
                        <Typography variant="body2">
                            {desc}
                        </Typography>
                    </Grid2>
                ))}
            </Grid2>

            <Box
                sx={{
                    padding: "2rem 0",
                    textAlign: "center",
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h4" gutterBottom>
                        Ready to Get Started?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Contact us today to discuss your project and see how we can help.
                    </Typography>
                    <Button variant="contained" size="large">
                        Contact Us
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};