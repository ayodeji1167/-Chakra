import {
  Box,
  Container,
  Flex,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function ChakraExample() {
  const color = useColorModeValue("gray.100", "gray.600");
  return (
    <Container maxWidth="100vw" mt="50px">
      <Grid
        justifyItems="center"
        gap="10px"
        templateColumns={{
          base: "1fr",
          md: "repeat(4, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
      >
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
        <Box boxSize="300px" backgroundColor={color} borderRadius="10px"></Box>
      </Grid>
    </Container>
  );
}
