import { Container, Box, Heading, Text } from "@chakra-ui/react";
import "./App.css";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <Box bg="brand.500" minHeight="100vh" width="100vw">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          fontSize={["34px", "46px", "60px"]}
          color="brand.200"
          pt={100}
          px={[2, 4, 8]}
          width={["100%", "90%", "80%"]}
        >
          Hey! I'm{" "}
          <Text as="span" color="brand.100">
            Scott
          </Text>{" "}
          and I am a:
          <Text color="brand.300">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Stock Market Trader",
                  "Real Estate Investor",
                  "Crypto HODLer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </Text>
        </Heading>
      </Container>
    </Box>
  );
}

export default App;
