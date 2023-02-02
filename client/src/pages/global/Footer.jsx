import React from "react";
import { Typography, useTheme } from "@mui/material";
import { shades } from "../../theme";
import { Box } from "@mui/system";

const Footer = () => {
    const {
        palette: { neutral },
    } = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum fugiat, quasi est beatae quibusdam nesciunt in
                        ad saepe a reprehenderit praesentium non corporis dolore
                        ipsum temporibus tenetur? Tempora earum fuga mollitia
                        quo architecto non! Praesentium sint aspernatur iure
                        modi cum a eaque quae! Molestiae doloremque soluta
                        cumque voluptatibus, eos id?
                    </div>
                </Box>
                <Box>
                    <Typography variant="h5" fontWeight="bold" mb="30px">
                        {" "}
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Termes & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" fontWeight="bold" mb="30px">
                        {" "}
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">
                        Corporate & Bulk Purchasing
                    </Typography>
                    <Typography mb="30px">Returns and Refunds</Typography>
                </Box>
                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h5" fontWeight="bold" mb="30px">
                        {" "}
                        Contact Us
                    </Typography>
                    <Typography mb="30px">
                        50 north Whatever Blvd, Washington, DC 10501
                    </Typography>
                    <Typography mb="30px">
                        Email: somethingsomething@gmail.com
                    </Typography>
                    <Typography mb="30px">(222)333-4444</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
