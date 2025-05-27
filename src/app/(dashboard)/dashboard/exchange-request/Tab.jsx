import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Send from './Send';
import Get from './Get';
import { useTheme } from 'next-themes';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const theme = useTheme();
    // Define text color based on the theme
    const textColor = theme?.theme === 'dark' ? 'white' : 'black';
    const [value, setValue] = React.useState(0);
    // console.log(theme.theme);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab
                        label="Send request"
                        sx={{ color: textColor }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="Get request"
                        sx={{ color: textColor }}
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Send />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Get />
            </CustomTabPanel>

        </Box>
    );
}
