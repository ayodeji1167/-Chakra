import {
  Box,
  Flex,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue("blackAlpha.700", "white");

  return (
    <Flex
      h={[10, "40px", "60px"]}
      bg="blackAlpha.400"
      px={[5, 20, 30]}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={{ base: "red", md: "blue", lg: "yellow" }}
    >
      <Box>
        <Box
          as="span"
          fontFamily="sans-serif"
          color={color}
          fontSize={["medium", "x-large", "x-large"]}
          fontWeight={700}
          mr="5px"
        >
          Ayo
        </Box>
        <Box
          as="span"
          fontFamily="sans-serif"
          color="blue.100"
          fontSize={["medium", "x-large", "x-large"]}
          fontWeight={700}
        >
          Deji
        </Box>
      </Box>

      <Box color="white">
        <Flex alignItems="center" gap={10}>
          <Flex gap={10} display={["none", "none", "flex"]} color={color}>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              About
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              FAQ
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              Contact
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              Login
            </Box>
          </Flex>

          <HamburgerIcon
            boxSize={5}
            mx="-12px"
            display={["flex", "flex", "none"]}
            onClick={() => setShowMenu(!showMenu)}
            color={color}
          />
          <Switch size="md" onChange={toggleColorMode} />
        </Flex>

        {showMenu && (
          <Flex
            py={10}
            px={10}
            backgroundColor="black"
            alignItems="center"
            gap={10}
            width="100vw"
            height="100vh"
            position="fixed"
            zIndex="10"
            top="0"
            left="0"
            overflow="auto"
            flexDir="column"
          >
            <CloseIcon
              alignSelf="flex-end"
              onClick={() => setShowMenu(!showMenu)}
            />
            <Box cursor="pointer" _hover={{ color: "red" }}>
              About
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              FAQ
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              Contact
            </Box>
            <Box cursor="pointer" _hover={{ color: "red" }}>
              Login
            </Box>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
