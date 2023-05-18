import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
  Textarea,
} from "@chakra-ui/react";

import { sendContactForm } from "@/lib/sendContactForm";
import { useRouter } from "next/router";

function BuyNow() {
  const router = useRouter();
  const initValues = {
    name: "",
    email: "",
    telephone: "",
    message: [router.query.name, router.query.details],
  };

  const initState = { isLoading: false, error: "", values: initValues };
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent. We'll be in touch with you ASAP!",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container maxW="450px" mt={12}>
      <Heading>Get in Touch</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.telephone && !values.telephone}
      >
        <FormLabel>Telephone</FormLabel>
        <Input
          type="tel"
          name="telephone"
          errorBorderColor="red.300"
          value={values.telephone}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Product Descriptions</FormLabel>
        <Textarea
          type="text"
          name="message"
          isDisabled
          rows={4}
          value={values.message[0] + ": " + values.message[1]}
        />
      </FormControl>


      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={!values.name || !values.telephone}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>

  
  );
}

export default BuyNow;
