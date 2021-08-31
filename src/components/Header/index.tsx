import { Box, Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      maxWidth={1440}
      mx="auto"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <Box>
          <Img
            src="/images/logo.svg"
            alt="logo-worldtrip"
            height="100%"
            width="100%"
            objectFit="cover"
            display="block"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
