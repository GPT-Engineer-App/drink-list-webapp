import React from "react";
import { Box, Heading, Image, Text, Container, SimpleGrid, VStack, Divider } from "@chakra-ui/react";

const drinks = [
  {
    name: "Margarita",
    description: "A classic cocktail with tequila, lime juice, and triple sec. Served with salt on the rim.",
    image: "https://images.unsplash.com/photo-1544145945-b4744b209fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJnYXJpdGElMjBjb2NrdGFpbHxlbnwwfHx8fDE3MTE0Nzc2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Old Fashioned",
    description: "A timeless whiskey cocktail with sugar, bitters, and an orange twist.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBmYXNoaW9uZWQlMjBjb2NrdGFpbHxlbnwwfHx8fDE3MTE0Nzc2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Mojito",
    description: "A refreshing Cuban highball with white rum, sugar, lime juice, soda water, and mint.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2ppdG8lMjBjb2NrdGFpbHxlbnwwfHx8fDE3MTE0Nzc2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Cosmopolitan",
    description: "A popular cocktail with vodka, triple sec, cranberry juice, and lime juice.",
    image: "https://images.unsplash.com/photo-1556855810-ac404aa91e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb3Ntb3BvbGl0YW4lMjBjb2NrdGFpbHxlbnwwfHx8fDE3MTE0Nzc2OTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Bar
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Enjoy our selection of delicious cocktails
        </Text>
        <Divider />
        <SimpleGrid columns={[1, 2]} spacing={8}>
          {drinks.map((drink, index) => (
            <Box key={index} borderWidth={1} borderRadius="lg" p={4}>
              <Image src={drink.image} alt={drink.name} borderRadius="lg" />
              <Heading as="h2" size="xl" mt={4}>
                {drink.name}
              </Heading>
              <Text mt={2}>{drink.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
