import * as SC from "./SocialList.styled";
import { ReactComponent as TwitterIcon } from "assets/svg/twitter.svg";
import { ReactComponent as InstagramIcon } from "assets/svg/instagram.svg";
import { ReactComponent as LinkedinIcon } from "assets/svg/linkedin.svg";
import { ReactComponent as DiscordIcon } from "assets/svg/discord.svg";

const socialIcons = [TwitterIcon, InstagramIcon, LinkedinIcon, DiscordIcon];

export const SocialList = () => {
  return (
    <SC.SocialList>
      {socialIcons.map((Icon, index) => (
        <SC.SocialItem>
          <SC.SocialLink href="/">
            <Icon height="24px" width="24px" />
          </SC.SocialLink>
        </SC.SocialItem>
      ))}
    </SC.SocialList>
  );
};
