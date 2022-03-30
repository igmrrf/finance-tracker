import React from "react";
import { Container, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useMediaQuery } from "@chakra-ui/media-query";

const PageLayout = ({ children }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowY="scroll"
      overflowX="hidden"
      paddingBottom={isNotSmallerScreen ? "20px" : "200px"}
    >
      <Container maxW={isNotSmallerScreen ? "container.lg" : "container.md"}>
        {children}
      </Container>
    </Box>
  );
};

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
