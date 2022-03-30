import React from "react";
import { Text, Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { Layout } from "../../design-system/Layout/Layout";
import {
  AddTransactions,
  Transactions,
  Income,
  Header,
  Expenses,
} from "../../design-system";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Layout>
      <Box
        borderBottom="1px solid #2B394F"
        w="100%"
        marginTop="2%"
        paddingBottom="5px"
      >
        <Header />
      </Box>

      <Box marginTop="5%">
        <Grid
          templateColumns={
            isNotSmallerScreen ? "repeat(2,1fr)" : "repeat(1,1fr)"
          }
          gap={6}
        >
          <GridItem>
            <Text
              color="#fff"
              fontSize="30px"
              fontWeight="600"
              fontFamily="Montserrat"
            >
              My Spending
            </Text>
            <Text
              color="#B6BAE7"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              You can see the details of all your expenditures here.
            </Text>
            <Box w="100%"></Box>
          </GridItem>

          <GridItem>
            <Text
              color="#fff"
              fontSize="30px"
              fontWeight="600"
              fontFamily="Montserrat"
            >
              Transactions
            </Text>
            <Text
              color="#B6BAE7"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              You can see all transactions here.
            </Text>

            <Box
              w="100%"
              bg="#2B394F"
              padding="10px"
              borderRadius="10px"
              marginTop="10px"
            >
              <Transactions
                text="income"
                date="1st April, 2022"
                time="4:10pm"
                amount="2,000"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Box borderTop="1px solid #2B394F" marginTop="5%">
        <AddTransactions isOpen={isOpen} onClose={onClose} />
        <Box display="flex" justifyContent="flex-end" marginTop="5%">
          <Button
            bg="#2B394F"
            leftIcon={<AiOutlinePlus />}
            _hover={{
              bg: "#2B394F",
              transform: "scale(1.1)",
            }}
            onClick={onOpen}
          >
            Add transaction
          </Button>
        </Box>
        <Box bg="#2B394F" padding="10px" borderRadius="10px" marginTop="2%">
          <Tabs>
            <TabList>
              <Tab color="#fff">Income</Tab>
              <Tab color="#fff">Expenses</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Income />
              </TabPanel>
              <TabPanel>
                <Expenses />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
