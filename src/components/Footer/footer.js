import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faWhatsapp,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faMobileAlt,
  faHome,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div>
      <FooterWrapper>
        <LinksCategoryWrapper>
          <LinksCategoryHeader style={{ fontSize: "2rem" }}>
            MOBIROBO
          </LinksCategoryHeader>
          <EachLinkItem style={{ lineHeight: "1.5rem" }}>
            <p style={{ textTransform: "capitalize" }}>
              All Mobile Accessories & service
              <br />
              fix your screen at best Price.
              <br />
            </p>
          </EachLinkItem>
          <EachLinkItem>
            <SocialMedia>
              <div style={{ paddingRight: "8px" }}>
                <a
                  href="https://www.instagram.com/reactjs"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=+919642183590"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <a
                  href="https://www.instagram.com/reactjs"
                  style={{ color: "#ccd6f6" }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <div style={{ padding: "8px" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
            </SocialMedia>
          </EachLinkItem>
          <EachLinkItem>
            <p>9 : 00 am - 10 : 00 pm</p>
          </EachLinkItem>
        </LinksCategoryWrapper>
        <LinksCategoryWrapper>
          <LinksCategoryHeader>Our Products</LinksCategoryHeader>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>smart phone Displays</p>
          </EachLinkItem>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>OCA Laminating machines</p>
          </EachLinkItem>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>Mobile Repair tools</p>
          </EachLinkItem>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>Mobile Accessories</p>
          </EachLinkItem>
        </LinksCategoryWrapper>
        <LinksCategoryWrapper>
          <LinksCategoryHeader>Our Services</LinksCategoryHeader>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>Mobile Repair</p>
          </EachLinkItem>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>Screen Replacement</p>
          </EachLinkItem>

          <EachLinkItem>
            <FontAwesomeIcon icon={faChevronRight} />
            <p style={{ marginLeft: "8px" }}>Smart Watch Repair</p>
          </EachLinkItem>

          <EachLinkItem></EachLinkItem>
        </LinksCategoryWrapper>

        <LinksCategoryWrapper>
          <LinksCategoryHeader>Contact Us</LinksCategoryHeader>
          <EachLinkItem>
            <FontAwesomeIcon icon={faMobileAlt} color="#ffaa19" />
            <p style={{ marginLeft: "8px" }}> +91 9642183590</p>
          </EachLinkItem>
          <EachLinkItem>
            <FontAwesomeIcon icon={faEnvelope} color="#ffaa19" />
            <p style={{ marginLeft: "8px", textTransform: "lowercase" }}>
              {" "}
              care@mobirobo.in
            </p>
          </EachLinkItem>
          <EachLinkItem>
            <FontAwesomeIcon icon={faHome} color="#ffaa19" />
            <p style={{ marginLeft: "8px", textTransform: "lowercase" }}>
              #186, 5th Cross
            </p>
          </EachLinkItem>
          <EachLinkItem style={{ lineHeight: "1.5rem" }}>
            <FontAwesomeIcon icon={faHome} color="transparent" />
            <p style={{ marginLeft: "8px", textTransform: "capitalize" }}>
              Arekere Mico Layout,
              <br /> 2nd Stage, Bengaluru, <br />
              560076.
            </p>
          </EachLinkItem>
        </LinksCategoryWrapper>
      </FooterWrapper>
      <CopyRights>
        <p>
          Copyright © Mobirobo {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </CopyRights>
    </div>
  );
}

const FooterWrapper = styled.div`
  background: var(--primary-color);
  margin: 0 auto;
  background: #003a52;
  padding: 60px 0px;
  font-family: "Poppins", sans-serif;
  display: grid;
  padding-left: 50px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media screen and (max-width: 480px) {
    /* flex-direction: column; */
    padding-left: 30px;
    margin-bottom: -28px;
  }
`;

const LinksCategoryWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
    /* font-size: 0.8rem; */
  }
`;

const EachLinkItem = styled.div`
  line-height: 2.3rem;
  display: flex;
  font-size: 0.95rem;
  /* padding:10px; */
  font-weight: 300;
  align-items: center;
  text-transform: uppercase;
  color: #b1c0f1;
  color: #ccd6f6;
`;

const LinksCategoryHeader = styled.h2`
  color: var(--brand-color);
  /* color: #ccd6f6; */
  margin-bottom: 10px;
  font-family: "Tajawal", sans-serif;
`;

const CopyRights = styled.div`
  border-top: 1px solid #ccd6f62f;
  width: 100%;
  color: #ccd6f6;
  padding: 16px 0px;
  background: #003a52;
  font-size: 1rem;
  text-align: center;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;
