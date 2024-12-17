import * as React from 'react';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';
import {StepIconProps} from '@mui/material/StepIcon';
import Typography from "@mui/material/Typography";
import {processList} from "../../pages/service/const.ts";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ConstructionIcon from '@mui/icons-material/Construction';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import GroupsIcon from '@mui/icons-material/Groups';


const ColorlibConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({theme}) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ownerState}) => ownerState.completed,
            style: {
                backgroundImage:
                    'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            },
        },
    ],
}));

function ColorlibStepIcon(props: StepIconProps) {
    const {active, completed, className} = props;

    const icons: { [index: string]: React.ReactElement<unknown> } = {
        1: <GroupsIcon/>,
        2: <ConstructionIcon/>,
        3: <ConnectWithoutContactIcon/>,
        4: <AutoFixHighIcon/>,
    };

    return (
        <ColorlibStepIconRoot ownerState={{completed, active}} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}


export default function CustomizedSteppers() {
    return (
        <Stack sx={{width: '100%'}} paddingTop={10} paddingBottom={10} spacing={4}>
            <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector/>}>
                {processList.map((item) => (
                    <Step key={item.label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>
                            <Typography color={"primary"} fontWeight={600}>
                                {item.label.split(".")[1]}
                            </Typography>
                            <Typography color={"primary"} mt={2}>
                                {item.desc}
                            </Typography>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
}
