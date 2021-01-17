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
  CheckboxGroup,
} from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

const Form = () => {
  const { handleSubmit, errors, register, formState } = useForm();
  let history = useHistory();
  let { eventId } = useParams();

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
        history.push('/event/' + eventId + '/registered');

        resolve();
      }, 3000);
    });
  }

  return (
    <form
      aria-labelledby="formHiddenId"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div hidden id="formHiddenId">
        Registration Form
      </div>
      <Text textStyle="p">
        All required field are marked with an asterisk *.
      </Text>
      <Stack spacing={2}>
        <FormControl
          id="firstnameFormField"
          isInvalid={errors.firstname}
          isRequired
        >
          <FormLabel mt="1em">First name</FormLabel>
          <Input
            name="firstname"
            placeholder="Joe"
            ref={register({ validate: validateFirstName })}
          />
          <FormErrorMessage>
            {errors.firstname && errors.firstname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          autoComplete="given-name"
          id="lastnameFormField"
          isInvalid={errors.lastname}
          isRequired
        >
          <FormLabel mt="1em">Last name</FormLabel>
          <Input
            autoComplete="family-name"
            name="lastname"
            placeholder="Smith"
            ref={register({ validate: validateLastName })}
          />
          <FormErrorMessage>
            {errors.lastname && errors.lastname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="emailFormField" isInvalid={errors.email} isRequired>
          <FormLabel mt="1em">Email</FormLabel>
          <Input
            autoComplete="email"
            name="email"
            type="email"
            placeholder="joesmith@example.com"
            ref={register({ validate: validateEmail })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="phoneFormField" isInvalid={errors.phone} isRequired>
          <FormLabel mt="1em">Phone number</FormLabel>
          <Input
            autoComplete="tel-national"
            name="phone"
            placeholder="91 330 2800"
            ref={register({ validate: validatePhone })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="skillsFormField">
          <FormLabel mt="1em" as="legend" htmlFor="skills">
            Skills
          </FormLabel>
          <CheckboxGroup>
            <Stack pl="1em" mt={1} spacing={1}>
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
              <Checkbox name="skills" value="problemsolving" ref={register}>
                Problem solving
              </Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl id="motivationFormField">
          <FormLabel mt="1em">Motivation</FormLabel>
          <Textarea
            name="motivation"
            placeholder="Here you can type in your motivation"
            ref={register}
          />
        </FormControl>
        <Button
          mt="2em"
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
