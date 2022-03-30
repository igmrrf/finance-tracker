import React, { useState } from "react";
import { Box, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";

const SidePane = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      padding="5"
      h="100vh"
      w={open ? "200px" : "70px"}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      transition="all 0.5s ease-in-out"
      borderRight="1px solid #1F2938"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <IconButton
          color="white"
          bg="none"
          onClick={() => setOpen(!open)}
          icon={open ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
        />
      </Box>

      <Box position='absolute' top='50%'>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          _hover={{
            cursor: "pointer",
          }}
        >
          <MdOutlineDashboard
            style={{ color: "white", marginRight: "10px" }}
            size={30}
          />
          <Text
            color="white"
            display={open ? "flex" : "none"}
            fontSize="14px"
            fontWeight="600"
            fontFamily="Montserrat"
          >
            Overview
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SidePane;
