import { Flex, Img, Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Flex>
        <Box width="100%" position="relative" textAlign="center">
          <Flex
            width="100%"
            height="100%"
            position="absolute"
            color="light.700"
            alignItems="center"
            justify="space-around"
            p="28"
          >
            <Flex flexDir="column" alignItems="flex-start">
              <Text fontSize="32px">5 Continentes,</Text>
              <Text fontSize="32px">infinitas possibilidades.</Text>
              <Text fontSize="20px" color="light.300" mt="6">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            <Box mt="40" transform="rotate(5deg)">
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
      </Flex>
    </>
  );
}
