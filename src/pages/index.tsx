import {
  Flex,
  Img,
  Box,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { CarouselContinent } from "../components/CarouselContinent";

export default function Home() {
  // responsividade
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Header />
      <Flex flexDirection="column">
        <Box width="100%" position="relative">
          <Flex
            width="100%"
            height="100%"
            minHeight={163}
            position="absolute"
            color="light.700"
            alignItems="center"
            justify={["flex-start", "space-around"]}
            p={["6", "6", "6", "36"]}
          >
            <Flex
              width="100%"
              height="100%"
              flexDir="column"
              alignItems="flex-start"
            >
              <Text fontSize={["16px", "18px", "24px", "32px"]}>
                5 Continentes,
              </Text>
              <Text fontSize={["16px", "18px", "24px", "32px"]}>
                infinitas possibilidades.
              </Text>
              <Text
                fontSize={["12px", "14px", "16px", "20px"]}
                color="light.300"
                mt="6"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            {isWideVersion && (
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
            )}
          </Flex>
          <Img
            src="/images/background.svg"
            alt="background-ceu"
            width="100%"
            height="100%"
            minH={163}
            objectFit="cover"
            display="block"
          />
        </Box>

        <Wrap
          maxWidth={1160}
          justify="center"
          spacing={["14px", "32px"]}
          mx={["auto"]}
          px="auto"
          my={["8", "16"]}
        >
          <TravelType
            alt="cocktail"
            image="/images/cocktail.svg"
            text="vida noturna"
            showImage={isWideVersion}
          />
          <TravelType
            alt="surf"
            image="/images/surf.svg"
            text="praia"
            showImage={isWideVersion}
          />
          <TravelType
            alt="building"
            image="/images/building.svg"
            text="moderno"
            showImage={isWideVersion}
          />
          <TravelType
            alt="museum"
            image="/images/museum.svg"
            text="clássico"
            showImage={isWideVersion}
          />
          <TravelType
            alt="earth"
            image="/images/earth.svg"
            text="e mais..."
            showImage={isWideVersion}
          />
        </Wrap>

        <Box
          mx={["auto"]}
          width="90px"
          borderColor="dark.700"
          borderWidth="2px"
        />

        <Flex my="16" mx="auto" maxWidth={840} flexDir="column" align="center">
          <Text fontSize={["20px", "32px"]} fontWeight="bold">
            Vamos nessa?
          </Text>
          <Text fontSize={["20px", "32px"]} fontWeight="bold">
            Então escolha seu continente
          </Text>
        </Flex>

        <CarouselContinent />
      </Flex>
    </>
  );
}
