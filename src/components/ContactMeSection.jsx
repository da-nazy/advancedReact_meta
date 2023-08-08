import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
 
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment:""
    },
    
    onSubmit: (values) => {
      submit("",values);
      if (isLoading) {
         
      } else {
     
        onOpen(response?.type, response?.message);
       }
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      email: Yup.string().email().required(),
      type: Yup.string(),
      comment:Yup.string().required()
      
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onError={formik.errors.firstName}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  type="email"
                  onError={formik.errors.email}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" onChange={(e)=>formik.setFieldValue("type",e.target.value)}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onError={formik.errors.comment}
                />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
              <Button disabled={isLoading} type="submit" colorScheme="purple" width="full" onClick={formik.handleSubmit}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
