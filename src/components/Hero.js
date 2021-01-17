import React from 'react';
//import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Center,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      <Center minH={['5em', '5em', '50vh']} px={['10vw', '20vw', '15em']}>
        <Heading
          as="h1"
          textStyle="title1"
          mb="2em"
          mt={['1em', '1em', '1em', '2em']}
        >
          CommunityMate: <br></br>find volunteering opportunities nearby.
        </Heading>
      </Center>
      <section>
        <Flex
          align="center"
          justify={{ base: 'center', md: 'space-between' }}
          direction={{ base: 'column-reverse', md: 'row' }}
          wrap="no-wrap"
          minH="auto"
        >
          <Stack spacing={10} w={{ base: '100%', md: '40%' }}>
            <Heading as="h2" size="xl" fontWeight="bold">
              The Platform
            </Heading>
            <Text
              maxW="70ch"
              fontSize="xl"
              fontWeight="normal"
              lineHeight={1.5}
            >
              Through CommunityMate you can discover volunteering events from
              all kind of fields in Madrid. You will achieve impactful outcomes
              by connecting with nonprofit associations in your area.
            </Text>
          </Stack>
          <Box w={{ base: '100%', md: '50%' }} mb={{ base: 12, md: 0 }}>
            <Image
              alt="Graphical draw showing CommunityMate logo exploded into multiple volunteering activities."
              src={'logoexp.jpg'}
              size="100%"
            />
          </Box>
        </Flex>
      </section>
    </>
  );
}
