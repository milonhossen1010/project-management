'use client';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Textarea, Button } from '@heroui/react';
import Link from 'next/link';
import { useRef } from 'react';
import { toast } from 'sonner';
import { IsEmail, IsEmpty, IsMobile } from '@/helper/FormHelper';
import { RegistrationRequest } from '@/APIRequest/APIRequest';
export default function RegistrationForm() {

  //Form data get by useRef
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    //Form Data get
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo = '';

    //Validation
    if (IsEmpty(email)) {
      toast.warning('Email Address is Required!');
    } else if (IsEmail(email)) {
      toast.warning('Valid Email Address Required!');
    } else if (IsEmpty(firstName)) {
      toast.warning('Fist Name is Required');
    } else if (IsEmpty(lastName)) {
      toast.warning('Last Name is Required');
    } else if (IsMobile(mobile)) {
      toast.warning('Input The Valid Phone Number!');
    } else if (IsEmpty(password)) {
      toast.warning('Password is Required');
    } else {

      //Registration Request
      RegistrationRequest(
        email,
        firstName,
        lastName,
        mobile,
        password,
        photo
      ).then(result => {

        //Response result
        if (result === true) {
          emailRef.value = ' ';
          firstNameRef.value = ' ';
          lastNameRef.value = ' ';
          mobileRef.value = ' ';
           passwordRef.value = ' ';
        }
      });
    }
  };
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <Card className="min-w-[500px] mx-auto block p-6">
        <CardBody className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Registration</h2>
          <Input
            ref={input => (emailRef = input)}
            label="User Email"
            type="email"
            isRequired
          />

          <Input
            ref={input => (firstNameRef = input)}
            label="First Name"
            type="text"
            isRequired
          />
          <Input
            ref={input => (lastNameRef = input)}
            label="Last Name"
            type="text"
            isRequired
          />
          <Input
            ref={input => (mobileRef = input)}
            label="Phone Number"
            type="text"
            isRequired
          />
          <Input
            ref={input => (passwordRef = input)}
            label="Password"
            type="password"
            isRequired
          />

          <Button
            onClick={onRegistration}
            size="lg"
            className="bg-accent text-white  "
          >
            Sign Up
          </Button>
          <div className="text-center">
            <Link className="block" href="/login">
              Login
            </Link>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
