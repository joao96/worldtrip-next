import { Header } from "../../components/Header";
import {
  Flex,
  Img,
  Box,
  Text,
  SimpleGrid,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import CardCity from "../../components/CardCity";

export default function Continent() {
  return (
    <>
      <Header />
      <Flex
        width="100%"
        minH={163}
        position="relative"
        justify="center"
        align="center"
      >
        <Flex
          maxWidth={1480}
          position="absolute"
          color="light.700"
          mx="auto"
          justify={["center", "center", "center", "flex-start"]}
          my={["8", "32"]}
          left="0"
          right="0"
        >
          <Heading fontSize="32px">Europa</Heading>
        </Flex>
        <Img
          src="/images/europa_continente.svg"
          alt="background-europa"
          width="100%"
          minH={163}
          height="100%"
          objectFit="cover"
          display="block"
        />
      </Flex>
      <Flex
        mx="auto"
        maxW={1480}
        flexDir={["column", "row"]}
        my={["8", "8", "8", "16"]}
        flexWrap="wrap"
        justify={["center", "space-between"]}
        align="center"
        px={["4", "4", "4", "0"]}
      >
        <Text align="justify" lineHeight="8" width={{ lg: "50%" }}>
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
        <Flex
          align="center"
          justify="space-around"
          my={{ base: "4", md: "4", lg: "0" }}
          width={{ base: "100%", md: "100%", lg: "50%" }}
          flexWrap="wrap"
        >
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
      </Flex>

      <Flex
        px={["4", "4", "4", "0"]}
        flexDir="column"
        maxWidth={1480}
        mx="auto"
        align={["center", "center", "center", "flex-start"]}
        justify={["center", "center", "center", "flex-start"]}
      >
        <Heading fontSize="36px">Cidades +100</Heading>
        <Wrap
          maxWidth={1160}
          justify={["center", "center", "center", "flex-start"]}
          spacing={["14px", "45px"]}
          my={["8", "16"]}
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
        </Wrap>
      </Flex>
    </>
  );
}
