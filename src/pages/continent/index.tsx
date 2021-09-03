import { Header } from "../../components/Header";
import { Flex, Img, Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import CardCity from "../../components/CardCity";

export default function Continent() {
  return (
    <>
      <Header />
      <Box width="100%" position="relative">
        <Box
          width={1480}
          position="absolute"
          bottom="0"
          color="light.700"
          mx="auto"
          my="32"
          left="0"
          right="0"
        >
          <Heading fontSize="32px">Europa</Heading>
        </Box>
        <Img
          src="/images/europa_continente.svg"
          alt="background-europa"
          width="100%"
          height="100%"
          objectFit="cover"
          display="block"
        />
      </Box>
      <SimpleGrid
        flex="1"
        gap="8"
        minChildWidth="100px"
        maxWidth={1480}
        mx="auto"
        my="16"
      >
        <Text align="justify" lineHeight="8" maxWidth={600}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
        <Flex align="center" justify="space-around">
          <Box>
            <Heading color="orange.900">50</Heading>
            <Text fontWeight="bold">países</Text>
          </Box>
          <Box>
            <Heading color="orange.900">60</Heading>
            <Text fontWeight="bold">línguas</Text>
          </Box>
          <Box>
            <Heading color="orange.900">27</Heading>
            <Text fontWeight="bold">cidades +100</Text>
          </Box>
        </Flex>
      </SimpleGrid>

      <Box maxWidth={1480} mx="auto" mt="20">
        <Heading fontSize="36px">Cidades +100</Heading>
        <SimpleGrid
          flex="1"
          templateColumns="repeat(4, 1fr)"
          gap="8"
          minChildWidth="150px"
          maxWidth={1480}
          mx="auto"
          my="16"
        >
          <CardCity
            cityImage="/images/carousel_europa.svg"
            cityName="Londres"
            country="Reino Unido"
            countryFlag="/images/reino_unido.svg"
          />
          <CardCity
            cityImage="/images/carousel_europa.svg"
            cityName="Paris"
            country="França"
            countryFlag="/images/franca.svg"
          />
          <CardCity
            cityImage="/images/carousel_europa.svg"
            cityName="Roma"
            country="Itália"
            countryFlag="/images/italia.svg"
          />
          <CardCity
            cityImage="/images/carousel_europa.svg"
            cityName="Praga"
            country="República Tcheca"
            countryFlag="/images/tcheca.svg"
          />
          <CardCity
            cityImage="/images/carousel_europa.svg"
            cityName="Amsterdã"
            country="Holanda"
            countryFlag="/images/holanda.svg"
          />
        </SimpleGrid>
      </Box>
    </>
  );
}
