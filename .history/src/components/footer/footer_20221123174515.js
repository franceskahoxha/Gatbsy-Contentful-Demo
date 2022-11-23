import React from "react";
import { Link } from "gatsby";
import Container from "../Container/container";
import useContentful from "../../hooks/use-Contentful";
import * as styles from "./footer.module.scss";

const query = `
query {
  navigation(id: "6F2wbrWy3G1vzfN3BN7Fgc"){
    ourExpertise
    howWeWork
    partnership
}
}
`;
const Footer = () => {
  let { data, errors } = useContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );

  if (!data) return <span>Loading.............</span>;

  return (
    <Container as="footer">
      <div className={styles.footer_container}>
        <div className={styles.footer_container_titles}>
          <h3>EXPLORE</h3>
          <h3>VISIT</h3>
          <h3>CONTACT</h3>
        </div>
        <ul className={styles.footer_container_ul}>
          <li className={styles.footer_container_ul_li}>
            <Link to="/">{data.navigation.ourExpertise}</Link>
          </li>

          <li className={styles.footer_container_ul_li}>
            <Link to="/blog/">{data.navigation.howWeWork}</Link>
          </li>

          <li className={styles.footer_container_ul_li}>
            <Link to="/blog/">{data.navigation.partnership}</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Footer;
