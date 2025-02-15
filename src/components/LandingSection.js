import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, my name is Seweryn!";
const bio1 = "A frontend developer";
const bio2 = "and a computer science student";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar name="Seweryn" src="your-image-url.jpg" size="xl" />

      <Heading as="h2" size="lg">
        {greeting}
      </Heading>

      <Text fontSize="xl" textAlign="center">
        {bio1} <br /> {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
