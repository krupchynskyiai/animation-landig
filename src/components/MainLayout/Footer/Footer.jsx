import { Box } from "components/Box";
import * as SC from "./Footer.styled";
import { FooterNav } from "./FooterNav/FooterNav";
import { SocialList } from "./SocialList/SocialList";

const Footer = ({ scale }) => {
  const footerScale =
    0.43 + (1440 / document.documentElement.clientWidth) * 0.57;
  console.log(0.57 + scale * 0.43);
  const width = document.documentElement.clientWidth / (0.57 + scale * 0.43);
  return (
    <SC.Footer
      style={{
        transform: `scale(${footerScale})`,
        width: `${width}px`,
        transformOrigin: "left top",
      }}
    >
      <SC.FooterContainer>
        <FooterNav />

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="24px"
        >
          <SC.FooterSubText>Empowering content creators</SC.FooterSubText>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ gap: "24px" }}
          >
            <SC.FooterLink href="/">Terms and Conditions</SC.FooterLink>
            <SC.FooterLink href="/">Privacy Policy</SC.FooterLink>
          </Box>
        </Box>
        <SocialList />
        <SC.RightsText>All Rights Reserved by Givell 2023</SC.RightsText>
      </SC.FooterContainer>
    </SC.Footer>
  );
};

export default Footer;
