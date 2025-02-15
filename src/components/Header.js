import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, IconButton } from "@chakra-ui/react";

const socials = [
  { icon: faEnvelope, url: "mailto:seweryn.webdev@gmail.com" },
  { icon: faGithub, url: "https://github.com/Seweryn999" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/seweryn-stalinger-2a31b2297/" },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="#18181b"
      zIndex={10}
      boxShadow="md"
    >
      <Box color="white" maxW="1280px" mx="auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          {/* Social Media Icons */}
          <HStack spacing={4}>
            {socials.map(({ icon, url }, index) => (
              <Link key={index} href={url} isExternal>
                <IconButton
                  aria-label="social-icon"
                  icon={<FontAwesomeIcon icon={icon} />}
                  variant="ghost"
                  color="white"
                  fontSize="lg"
                  _hover={{ color: "gray.400" }}
                />
              </Link>
            ))}
          </HStack>

          {/* Navigation Links */}
          <HStack spacing={8}>
            <Link onClick={handleClick("projects")} cursor="pointer" _hover={{ color: "gray.400" }}>
              Projects
            </Link>
            <Link onClick={handleClick("contact")} cursor="pointer" _hover={{ color: "gray.400" }}>
              Contact Me
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
