import React from "react";
import Container from "../container/container";
import * as styles from "./footer.module.scss";

const Footer = () => {
  return (
    <Container as="footer">
      <div className={styles.footer_container}>
        <div className={styles.footer_container_titles}>
          <h3>EXPLORE</h3>
          <h3>VISIT</h3>
          <h3>CONTACT</h3>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
