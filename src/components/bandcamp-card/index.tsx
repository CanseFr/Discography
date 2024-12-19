import {Grid2, useTheme} from "@mui/material";
import {DisplayBandcampCardProps} from "./type.ts";
import {defineDependingTheme} from "../../common/tool";

const size = "/size=large"
const bgcol = `/bgcol=${defineDependingTheme(333333, "ffffff")}`
const linkcol = `/linkcol=${defineDependingTheme("2ebd35", 333333)}`
const tracklist = "/tracklist=false"
const transparent = "/transparent=true"

export const DisplayBandcampCard = ({list}: DisplayBandcampCardProps) => {
    const theme = useTheme();

    return (<Grid2
        container
        gap="20px"
        flexWrap="wrap"
        bgcolor={theme.palette.background.default}
        justifyContent='center'
        paddingTop='50px'
        paddingBottom='200px'
    >
        {list.map((link) => (
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
    </Grid2>)
}