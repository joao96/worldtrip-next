import { Box, Button, Flex, Icon, Img, IconButton } from "@chakra-ui/react";
import Link from "next/link";

import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import { theme } from "../../styles/theme";

export function Header() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      maxWidth={1480}
      mx="auto"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      {router.asPath !== "/" && (
        <IconButton
          position="absolute"
          left="0"
          aria-label="go back"
          icon={<Icon as={IoIosArrowBack} />}
          fontSize="24"
          variant="unstyled"
          onClick={router.back}
        />
      )}
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
  );
}
