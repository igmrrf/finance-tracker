import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

export const AddTransactions = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} colorScheme="white">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel htmlFor="email">Description</FormLabel>
            <Textarea id="email" type="text" />

            <FormLabel htmlFor="email">Purpose</FormLabel>
            <Input id="email" type="text" />

            <FormLabel htmlFor="email">Amount</FormLabel>
            <Input id="email" type="number" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
