import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "@chakra-ui/react";
import { BiTransfer } from "react-icons/bi";

export const Transactions = ({ text, date, time, amount }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        borderBottom="1px solid #18202C"
        marginBottom="10px"
        paddingBottom="10px"
      >
        <Box display="flex">
          <Box
            w="50px"
            h="50px"
            borderRadius="100%"
            bg="#18202C"
            marginRight="10px"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <BiTransfer size={30} color="#2B394F" />
          </Box>
          <Box>
            <Text
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="18px"
            >
              {text}
            </Text>
            <Text
              color="#B6BAE7"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              {date} at {time}
            </Text>
          </Box>
        </Box>

        <Text
          color="#fff"
          fontWeight="600"
          fontFamily="Montserrat"
          fontSize="18px"
        >
          +${amount}
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        borderBottom="1px solid #18202C"
        marginBottom="10px"
        paddingBottom="10px"
      >
        <Box display="flex">
          <Box
            w="50px"
            h="50px"
            borderRadius="100%"
            bg="#18202C"
            marginRight="10px"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            {" "}
            <BiTransfer size={30} color="#2B394F" />
          </Box>
          <Box>
            <Text
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="18px"
            >
              {text}
            </Text>
            <Text
              color="#B6BAE7"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              {date} at {time}
            </Text>
          </Box>
        </Box>

        <Text
          color="#fff"
          fontWeight="600"
          fontFamily="Montserrat"
          fontSize="18px"
        >
          +${amount}
        </Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
        borderBottom="1px solid #18202C"
        marginBottom="10px"
        paddingBottom="10px"
      >
        <Box display="flex">
          <Box
            w="50px"
            h="50px"
            borderRadius="100%"
            bg="#18202C"
            marginRight="10px"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            {" "}
            <BiTransfer size={30} color="#2B394F" />
          </Box>
          <Box>
            <Text
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="18px"
            >
              {text}
            </Text>
            <Text
              color="#B6BAE7"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              {date} at {time}
            </Text>
          </Box>
        </Box>

        <Text
          color="#fff"
          fontWeight="600"
          fontFamily="Montserrat"
          fontSize="18px"
        >
          +${amount}
        </Text>
      </Box>
    </Box>
  );
};

Transactions.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};
