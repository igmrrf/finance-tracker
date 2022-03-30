import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { useMediaQuery } from "@chakra-ui/media-query";


export const Header = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      w="100%"
    >
      <Box display="flex" flexDirection={isNotSmallerScreen ? 'row' : 'column'} w="100%">
        <Box marginRight="5%">
          <Text
            color="#fff"
            fontWeight="600"
            fontFamily="Montserrat"
            fontSize="30px"
          >
            $ 1,000,000
          </Text>
          <Text
            color="#B6BAE7"
            fontWeight="400"
            fontFamily="Montserrat"
            fontSize="14px"
          >
            Total Balance
          </Text>
        </Box>
        <Box>
          <Text
            color="#fff"
            fontWeight="600"
            fontFamily="Montserrat"
            fontSize="30px"
          >
            $ 200,000
          </Text>
          <Text
            color="#B6BAE7"
            fontWeight="400"
            fontFamily="Montserrat"
            fontSize="14px"
          >
            Total Expenses
          </Text>
        </Box>
      </Box>
      <Box>
          {isNotSmallerScreen ?   <BiUserCircle size={40} color="#fff" /> : null}
      
      </Box>
    </Box>
  );
};
