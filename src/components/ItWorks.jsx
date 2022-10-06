import { Box, Container, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";

export default function ItWorks() {
  return (
    <Box>
      <Container maxW="container.xl" my="20">
        <Heading textAlign="center" as="h3" size="lg" pb="2">
          How Meetup works
        </Heading>
        <Box textAlign="center" maxW="700px" mx='auto' pb='10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          vero eum nobis.
        </Box>

        <Grid templateColumns='repeat(3, 1fr)' gap='6'>
            <Box mx="auto" alignContent='center'>

            </Box>

        </Grid>
      </Container>
    </Box>
  );
}
