import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, Container, Divider } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={["column", "row"]} wrap="wrap" m={5}>
        {/* Product Image */}
        <Box flex={1} p={5}>
          <Image borderRadius="md" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMGZvb2QlMjBiYWd8ZW58MHx8fHwxNzA4NTUzNTAzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Reusable Food Bag" />
        </Box>
        {/* Product Details */}
        <Box flex={1} p={5}>
          <Stack spacing={3}>
            <Heading as="h1" size="xl">
              Eco-Friendly Reusable Food Bag
            </Heading>
            <Text fontSize="lg">Keep your food fresh and reduce waste with our premium, eco-friendly reusable food bags. Perfect for storing fruits, vegetables, and other perishables.</Text>
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
