import {Box, Button, Card, CardContent, CardMedia, Container, Grid2, Typography, useTheme,} from "@mui/material";
import {cardServices, processList} from "./const.ts";


export const ServicePage = () => {
    const theme = useTheme()
    return (
        <Box marginBottom={12}>
            <Grid2
                padding={10}
                textAlign="center"
                bgcolor={theme.palette.background.default}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" fontFamily="high" color="primary">
                        Sound Design Services
                    </Typography>
                    <Typography variant="h6" pt={3} pb={3} color="primary">
                        Bringing life to your visuals through immersive soundscapes and
                        impactful audio design.
                    </Typography>
                    <Button variant="contained" size="large">
                        Get Started
                    </Button>
                </Container>
            </Grid2>

            <Grid2 paddingTop={10} paddingBottom={10} bgcolor={theme.palette.primary.main}>
                <Typography variant="h4" align="center" paddingBottom={10} fontFamily="lostar" color="primary.dark">
                    Services
                </Typography>
                <Grid2 container spacing={4} justifyContent="center">
                    {cardServices.map(({img, title, label, desc}) => (
                        <Grid2>
                            <Card sx={{maxWidth: 345, height: 300, margin: "auto"}}>
                                <CardMedia sx={{height: 200}} image={img} title={title}/>
                                <CardContent>
                                    <Typography variant="h5" fontWeight={800} gutterBottom color="primary"> {label}</Typography>
                                    <Typography variant="body2" color="primary">{desc}</Typography>
                                </CardContent>
                            </Card>
                        </Grid2>
                    ))}
                </Grid2>
            </Grid2>

            <Grid2 padding={10} bgcolor={theme.palette.background.default}>
                <Typography variant="h4" paddingBottom={5} align="center" fontFamily="lostar" color="primary">
                    Process
                </Typography>

                {processList.map(({label, desc}) => (
                    <Grid2 textAlign="center" padding={1}>
                        <Typography variant="h5" gutterBottom color="primary">
                            {label}
                        </Typography>
                        <Typography variant="body2" color="primary">
                            {desc}
                        </Typography>
                    </Grid2>
                ))}
            </Grid2>

            <Box
                padding="2rem 0"
                textAlign="center"
                bgcolor={theme.palette.primary.main}
            >
                <Container maxWidth="sm">
                    <Typography variant="h2" gutterBottom fontFamily="high" color="primary.dark">
                        Ready to Get Started?
                    </Typography>
                    <Typography variant="body1" gutterBottom color="primary.dark">
                        Contact us today to discuss your project and see how we can help.
                    </Typography>
                    <Button variant="contained" size="large" sx={{backgroundColor: theme.palette.primary.dark}}>
                        <Typography variant="body1" gutterBottom color="primary">
                            Contact Us
                        </Typography>
                    </Button>
                </Container>
            </Box>
        </Box>
    );
};