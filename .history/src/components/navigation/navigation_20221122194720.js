import React from "react";
import { useState, useEffect, useCallback } from "react";
import { client } from "../../client";
import NavigationBar from "./NavigationBar";

const Navigation = () => {
  const [isNavigation, setisNavigation] = useState([]);

  ////function to get the specific/sanitized entries we want from that component
  const cleanUpNavigation = useCallback((rawData) => {
    const cleanNav = rawData.map((nav) => {
      const { sys, fields } = nav;
      const { id } = sys;
      const navTest = fields.test;
      const navLogo = fields.logo.fields.file.url;
      const navPages = fields.pages[0].fields.pageTitle;
      const updatedNav = { id, navTest, navLogo, navPages };

      return updatedNav;
    });

    setisNavigation(cleanNav);
  }, []);

  ////function to get Navigation entries from contentful
  const getNavigation = useCallback(async () => {
    try {
      const response = await client.getEntries({
        content_type: "navigation",
      });
      const responseData = response.items;
      console.log(responseData);

      if (responseData) {
        cleanUpNavigation(responseData);
      } else {
        cleanUpNavigation([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [cleanUpNavigation]);

  ////useEffect hook to call the function that gets all the entries from contentful and render it
  useEffect(() => {
    getNavigation();
  }, [getNavigation]);

  return (
    <div>
      {isNavigation.map((item) => {
        const { id, navTest, navLogo, navPages } = item;
        return (
          <NavigationBar
            key={id}
            navTest={navTest}
            navLogo={navLogo}
            navPages={navPages}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
