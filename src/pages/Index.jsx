import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, Container, Divider } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={["column", "row"]} wrap="wrap" m={5}>
        {/* Product Image */}
        <Box flex={1} p={5}>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1581349482624-df524a8ddc7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Silicone Food Bag" />
        </Box>
        {/* Product Details */}
        <Box flex={1} p={5}>
          <Stack spacing={3}>
            <Heading as="h1" size="xl">
              Eco-Friendly Silicone Food Bag
            </Heading>
            <Text fontSize="lg">Preserve your food securely and sustainably with our premium, eco-friendly silicone food bags. Ideal for an airtight seal to keep your perishables fresh longer.</Text>
            <Divider borderColor="gray.300" />
            <Text fontSize="2xl" fontWeight="bold">
              $19.99
            </Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="green" size="lg">
              Add to Cart
            </Button>
          </Stack>
        </Box>
      </Flex>
      {/* More Information */}
      <Box p={5}>
        <Heading as="h2" size="lg" mb={3}>
          Why Choose Our Reusable Food Bag?
        </Heading>
        <Text>Our reusable food bags are made from durable, food-safe materials that are easy to clean and designed to last. Say goodbye to single-use plastics and make a positive impact on the environment.</Text>
      </Box>
    </Container>
  );
};

export default Index;
