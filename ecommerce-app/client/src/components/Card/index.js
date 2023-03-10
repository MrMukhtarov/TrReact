import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3px">
      <Link to="#/">
        <Image src="https://picsum.photos/400/200" alt="products" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            12/12/2021
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            MacBook Pro
          </Box>
          <Box>100 AZN</Box>
        </Box>
      </Link>
      <Button colorScheme='pink'>Add To Basket</Button>
    </Box>
  );
}

export default Card;
