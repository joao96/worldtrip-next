import { Flex, Img, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { SwiperContinent } from "../components/SwiperContinent";

export default function Home() {
  return (
    <>
      <Header />
      <Flex flexDirection="column">
        <Box width="100%" position="relative">
          <Flex
            width="100%"
            height="100%"
            position="absolute"
            color="light.700"
            alignItems="center"
            justify="space-around"
            p="36"
          >
            <Flex flexDir="column" alignItems="flex-start">
              <Text fontSize="32px">5 Continentes,</Text>
              <Text fontSize="32px">infinitas possibilidades.</Text>
              <Text fontSize="20px" color="light.300" mt="6">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            <Box transform="rotate(5deg)">
              <Img
                src="/images/airplane.svg"
                alt="aviao"
                width="100%"
                height="100%"
                objectFit="cover"
                display="block"
              />
            </Box>
          </Flex>
          <Img
            src="/images/background.svg"
            alt="background-ceu"
            width="100%"
            height="100%"
            objectFit="cover"
            display="block"
          />
        </Box>

        <SimpleGrid
          flex="1"
          gap="16"
          minChildWidth="150px"
          maxWidth={1160}
          mx="auto"
          my="16"
        >
          <TravelType
            alt="cocktail"
            image="/images/cocktail.svg"
            text="vida noturna"
          />
          <TravelType alt="surf" image="/images/surf.svg" text="praia" />
          <TravelType
            alt="building"
            image="/images/building.svg"
            text="moderno"
          />
          <TravelType alt="museum" image="/images/museum.svg" text="clássico" />
          <TravelType alt="earth" image="/images/earth.svg" text="e mais..." />
        </SimpleGrid>

        <Box mx="auto" width="90px" borderColor="dark.700" borderWidth="2px" />

        <Flex my="16" mx="auto" maxWidth={840} flexDir="column" align="center">
          <Text fontSize="32px" fontWeiight="bold">
            Vamos nessa?
          </Text>
          <Text fontSize="32px" fontWeiight="bold">
            Então escolha seu continente
          </Text>
        </Flex>

        <SwiperContinent />
      </Flex>
    </>
  );
}
