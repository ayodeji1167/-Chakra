import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
} from "@chakra-ui/react";
import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.jpg";
import rightArrow from "../assets/next.png";

export default function Banner() {
  return (
    <>
      <header>
        <Flex alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
            <Image boxSize="90px" src={brandLogo} alt="brand" />
          </Box>

          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Log in
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Sign up
            </Button>
          </Box>
        </Flex>
      </header>

      {/* Main Punch Line */}
      <Box>
        <Container maxW="container.xl">
          <Flex alignItems="center" flexDir="row" py="20">
            <Box mr="6">
              <Heading as="h1" size="2xl">
                <Box fontWeight="black">
                  Dive in! There are so many things to do in Meetup
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum ea voluptatibus itaque quibusdam dolorum, asperiores
                perferendis unde accusantium facilis, sed, quae tempora
                molestiae
              </Box>
            </Box>

            <Box w="100%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Three Boxes */}
      <Container maxW="container.xl" mt={10}>
        <Grid templateColumns="repeat(3,1fr)" gap={10}>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageOne} alt="image1" />
            <Button variant="link" colorScheme="teal" mt="5">
              Explore the Outdoors{" "}
              <Image
                color="teal"
                w="5"
                ml="2"
                src={rightArrow}
                alt="rightArrow"
              />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageTwo} alt="image1" />
            <Button variant="link" colorScheme="teal" mt="5">
              Explore the Outdoors{" "}
              <Image
                color="teal"
                w="5"
                ml="2"
                src={rightArrow}
                alt="rightArrow"
              />
            </Button>
          </Box>
          <Box>
            <Image w="100%" borderRadius="lg" src={imageThree} alt="image1" />
            <Button variant="link" colorScheme="teal" mt="5">
              Explore the Outdoors{" "}
              <Image
                color="teal"
                w="5"
                ml="2"
                src={rightArrow}
                alt="rightArrow"
              />
            </Button>
          </Box>
        </Grid>
      </Container>

      {/* Button section */}
      <Container maxW="container.xl" mt={5}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Boost Your Career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Finf Your zen
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Get moving
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Share language + culture
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Read with friends
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Write together
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr="4"
            mb="4"
            textTransform="none"
            color="#ffffff"
            bg="blue.100"
          >
            Home your craft
          </Badge>
        </Flex>
      </Container>

      {/* Last Hero Section */}
      <Container maxW='container.xl' mt={20}>
        <Grid templateColumns="repeat(2,1fr)" gap={6}>
          <Box>
            <Heading as="h3" size="lg" mb="7">What do you want to do</Heading>
            <Flex alignItems="center" justifyContent='space-between' flexWrap='wrap'>
              <Box flexBasis="45%" w="100%" mr="2">
                <FormControl id="email">
                  <Box pos="relative">
                    <Input
                      pl={8}
                      placeholder="search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#d9d9d9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>

              <Box flexBasis="45%"  ml="2">
                <FormControl>
                  <Box pos="relative" >
                    <Input
                      pl={8}
                      placeholder="search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top="3" left="2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#d9d9d9"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
              <Box flexBasis='100%'>
                <Button
                  _hover={{ opacity: "0.8" }}
                  mt="5"
                  pt="6"
                  pb="6"
                  w="100%"
                  color="#ffffff"
                  bg="red.200"
                  fontSize="lg"
                >
                  <Box fontWeight="black">Search</Box>
                </Button>
              </Box>
            </Flex>
          </Box>

          
          
          <Box>
              <Heading as="h3" size="lg" mb="7">
                See what’s happening
              </Heading>
              <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Starting soon
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Today
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Tomorrow
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  This Week
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Online
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  In person
                </Badge>
                <Badge
                variant='subtle'
                  borderRadius="3xl"
                  px={5}
                  py={2}
                  mr="4"
                  mb="4"
                  color="#ffffff"
                  textTransform="normal"
                  bg="blue.100"
                >
                  Trending near you
                </Badge>
              </Box>
            </Box>
        </Grid>
      </Container>
    </>
  );
}
