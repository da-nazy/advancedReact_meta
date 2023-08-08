import React from "react";
import { Avatar, Heading, HStack, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack gap={4}>
      <Avatar size='xl'  src='https://i.pravatar.cc/150?img=7' />
      <Heading as="h7" size="xs">
        {greeting}
      </Heading>
      <Heading as="h5" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h5" size="xl">
        {bio2}
      </Heading>
      
  </VStack>
  </FullScreenSection>
);

export default LandingSection;
