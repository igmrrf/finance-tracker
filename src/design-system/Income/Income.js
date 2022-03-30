import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const Income = () => {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              Descripton
            </Th>
            <Th
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              Purpose
            </Th>
            <Th
              color="#fff"
              fontWeight="600"
              fontFamily="Montserrat"
              fontSize="14px"
            >
              Amount
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Aliquip laboris reprehenderit voluptate ex. <br/> Tempor non mollit
              tempor consectetur dolore et voluptate. 
            </Td>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Pariatur fugiat ex ad eu. Fugiat irure culpa adipisicing eu. <br/> Et ex
              sunt velit quis sint.
            </Td>
            <Td
              isNumeric
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              $2,000
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Aliquip laboris reprehenderit voluptate ex. <br/> Tempor non mollit
              tempor consectetur dolore et voluptate. 
            </Td>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Pariatur fugiat ex ad eu. Fugiat irure culpa adipisicing eu. <br/> Et ex
              sunt velit quis sint.
            </Td>
            <Td
              isNumeric
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              $2,000
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Aliquip laboris reprehenderit voluptate ex. <br/> Tempor non mollit
              tempor consectetur dolore et voluptate. 
            </Td>
            <Td
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              Pariatur fugiat ex ad eu. Fugiat irure culpa adipisicing eu. <br/> Et ex
              sunt velit quis sint.
            </Td>
            <Td
              isNumeric
              color="#fff"
              fontWeight="400"
              fontFamily="Montserrat"
              fontSize="12px"
            >
              $2,000
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
