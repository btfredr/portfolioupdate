import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #101522;
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Fredrik Fordelsen</SocialLogo>
              <WebsiteRights>
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </WebsiteRights>

              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com/btfredr"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.instagram.com/fredrikfordelsen"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink
                  href="//www.linkedin.com/in/fredrik-fordelsen-6a1281203/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
