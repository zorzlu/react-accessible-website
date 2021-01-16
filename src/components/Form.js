import { useForm } from 'react-hook-form';
import React from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Checkbox,
  Text,
  Textarea,
} from '@chakra-ui/react';

const Form = () => {
  const { handleSubmit, errors, register, formState } = useForm();

  function validateFirstName(value) {
    if (!value) {
      return 'First name is required.';
    } else return true;
  }

  function validateLastName(value) {
    if (!value) {
      return 'Last name is required.';
    } else return true;
  }

  function validateEmail(value) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!value) {
      return 'Email is required.';
    } else if (!pattern.test(value)) {
      return 'Please provide a valid email.';
    } else return true;
  }

  function validatePhone(value) {
    if (!value) {
      return 'Phone number is required.';
    } else if (!value.match(/^[0-9]+$/)) {
      return 'Phone number must contain only digits.';
    } else return true;
  }

  function onSubmit(values) {
    console.log(values);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form aria-labelledby="formHiddenId" onSubmit={handleSubmit(onSubmit)}>
      <div hidden id="formHiddenId">
        Registration Form
      </div>
      <Stack spacing={2}>
        <FormControl isInvalid={errors.firstname}>
          <Text textStyle="p" color="tomato">
            All required field are displayed in red and marked with an asterisk
            *.
          </Text>
          <br></br>
          <FormLabel htmlFor="name" color="tomato">
            First name*
          </FormLabel>
          <Input
            name="firstname"
            placeholder="First name"
            ref={register({ validate: validateFirstName })}
            aria-label="Firstname"
            bg="white"
          />
          <FormErrorMessage>
            {errors.firstname && errors.firstname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.lastname}>
          <FormLabel htmlFor="name" color="tomato">
            Last name*
          </FormLabel>
          <Input
            name="lastname"
            placeholder="Last name"
            ref={register({ validate: validateLastName })}
            aria-label="Lasttname"
            bg="white"
          />
          <FormErrorMessage>
            {errors.lastname && errors.lastname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="name" color="tomato">
            Email*
          </FormLabel>
          <Input
            name="email"
            placeholder="Email"
            ref={register({ validate: validateEmail })}
            aria-label="Email"
            bg="white"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.phone}>
          <FormLabel htmlFor="name" color="tomato">
            Phone number*
          </FormLabel>
          <Input
            name="phone"
            placeholder="Phone number"
            ref={register({ validate: validatePhone })}
            aria-label="Phone number"
            bg="white"
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="skills">Skills</FormLabel>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox name="skills" value="communication" ref={register}>
              Communication
            </Checkbox>
            <Checkbox name="skills" value="organization" ref={register}>
              Organization
            </Checkbox>
            <Checkbox name="skills" value="teamwork" ref={register}>
              Teamwork
            </Checkbox>
            <Checkbox name="skills" value="creativity" ref={register}>
              Creativity
            </Checkbox>
            <Checkbox name="skills" value="problem solving" ref={register}>
              Problem solving
            </Checkbox>
          </Stack>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="motivation">Motivation</FormLabel>
          <Textarea
            name="motivation"
            aria-label="Motivation"
            placeholder="Here you can type in your motivation"
            ref={register}
            bg="white"
          />
        </FormControl>
        <Button
          mt={4}
          colorScheme="brand"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
