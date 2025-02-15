import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      maxW="sm"
    >

      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />
      
      <VStack spacing={3} align="start" p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        
        <HStack spacing={1} align="center">
          <Link fontWeight="bold" color="blue.500" href="#">
            See more
          </Link>
          <FontAwesomeIcon icon={faArrowRight} size="sm" color="blue.500" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
