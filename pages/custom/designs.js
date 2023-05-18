import React, { useState } from "react";
import styles from "../../styles/designs.module.css";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  useToast,
  Textarea,
} from "@chakra-ui/react";

import { sendContactForm } from "@/lib/sendContactForm";


function ContactForm() {
  const initValues = {
    name: "",
    email: "",
    telephone: "",
    message: "null",
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
        title: "Message sent. We will be in touch with you ASAP!",
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

    <div className={`${styles.container} ${styles.body}`}> 
      <div className={styles.content}>
        <div className={styles.left_side}>
          <div className={styles.details}>
            
            <div className={styles.topic}> Phone</div>
            <div className={styles.text_one}><a href="tel:+251 945 522 598">+251 945 522 598</a></div>
          </div>
          <div className={styles.details}>
            <div className={styles.topic}>Email</div>
            <div className={styles.text_one}><a href="mailto:AbcCraftsGallery@gmail.com">AbcCraftsGallery@gmail.com</a></div>
          </div>
        </div>
        <div className={styles.right_side}>
        <h1 className={styles.heading}>Send us your name, phone number, and email address and we'll contact you about your custom designs</h1>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <br />
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
        <FormLabel>Email(Optional)</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
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
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
