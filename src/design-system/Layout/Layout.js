import React from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import PageLayout from "./PageLayout";
import SidePane from "../SidePane/SidePane";
import { useMediaQuery } from "@chakra-ui/media-query";

export const Layout = ({ children }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Box w="100%" h="100vh">
      <Box display="flex" flexDirection={isNotSmallerScreen ? "row" : "column"}>
        {isNotSmallerScreen ? <SidePane /> : null}

        <PageLayout>{children}</PageLayout>
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
