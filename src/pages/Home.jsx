import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Hero } from '../components';

class Home extends Component {
  render() {
    return (
      <Box textAlign="center" fontSize="xl">
        <Flex
          direction="column"
          align="center"
          // maxW={{ xl: '6000px' }}
          // m="0 auto"
        >
          <Hero />
        </Flex>
        {/* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid> */}
      </Box>
    );
  }
}
export default Home;
