// Filename - components/Footer.jsx

import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
           <FooterContainer>
                <Row>
                <Column>
                        <Heading>
                            <FooterLink href="/About">
                                About Us
                            </FooterLink>
                        </Heading>
                    </Column> 
                    <Column>
                        <Heading>
                            <FooterLink href="/ContactUs">
                                Contact Us
                            </FooterLink>
                        </Heading>
                    </Column> 
                    {/* <Column>
                        <Heading>
                            <FooterLink href="/Sitemap">
                               Sitemap                                
                            </FooterLink>
                        </Heading>
                    </Column>                     */}
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
