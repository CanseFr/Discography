import {bgcol, discographyLinks, linkcol, size, tracklist, transparent} from "./const.ts";
import {Grid2, useTheme} from "@mui/material";

export const DiscographyPage = () => {

    const theme = useTheme();

    return (
        <Grid2
            container
            gap="20px"
            flexWrap="wrap"
            bgcolor={theme.palette.background.default}
            justifyContent='center'
            paddingTop='50px'
            paddingBottom='200px'
        >
            {discographyLinks.map((link) => (
                <Grid2 key={link.title} size={4} width="350px" height='470px'>
                    <iframe
                        style={{border: '0', width: '100%', height: '100%'}}
                        src={`${link.src}${link.album}${size}${bgcol}${linkcol}${tracklist}${transparent}`}
                        seamless
                        title={link.title}
                    >
                        <a href={`${link.href}`}>{link.title}</a>
                    </iframe>
                </Grid2>
            ))}
        </Grid2>
    );
}
