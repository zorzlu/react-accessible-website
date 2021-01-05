/* eslint-disable react/no-children-prop */
import React from 'react';
import { Input, Button, FormControl, Stack, Textarea } from '@chakra-ui/react';

const Form = () => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <Input
            type="name"
            placeholder="First name"
            variant="outline"
            size="md"
            aria-label="First name"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="name"
            placeholder="Last name"
            variant="outline"
            size="md"
            aria-label="Last name"
          />
        </FormControl>
        <FormControl isRequired>
          <Input
            type="email"
            placeholder="Email"
            variant="outline"
            size="md"
            aria-label="Email"
          />
        </FormControl>
        <Input
          type="tel"
          placeholder="Phone number"
          variant="outline"
          size="md"
          aria-label="Phone number"
        />
        <Textarea
          placeholder="Here you can write your motivation"
          variant="outline"
          size="md"
          aria-label="Motivation"
        />
        <Button
          type="submit"
          boxShadow="sm"
          colorScheme="white"
          variant="outline"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
