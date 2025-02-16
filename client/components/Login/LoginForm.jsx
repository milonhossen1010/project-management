'use client';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Textarea, Button } from '@heroui/react';
import Link from 'next/link';
import { useRef } from 'react';
import { IsEmail, IsEmpty } from '@/helper/FormHelper';
import { toast } from 'sonner';
import { LoginRequest } from '@/APIRequest/APIRequest';


export default function LoginForm() {
  //Email and pass get by useRef
  let emailRef, passRef = useRef()

  const onSubmitLogin = async () => {
    let email = emailRef.value;
    let pass = passRef.value;

    if (IsEmpty(email)) {
      toast.error('Email is Required!');
    } else if (IsEmail(email)) {
      toast.error('Invalid Email adress');
    } else if (IsEmpty(pass)) {
      toast.error('Password is Required.');
    } else {

      try {
        let result = await LoginRequest(email, pass);
        
        if (result === true) {
          window.location.href='/'
        }

        
      } catch (error) {
        console.log(error);
        
      }

    }
  };


  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen"
    >
      <Card className="min-w-[400px] mx-auto block p-6">
        <CardBody className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Login</h2>
          <Input ref={input => emailRef = input} label="User Name" type="text" required />
          <Input ref={input => passRef = input} label="Password" type="password" />

          <Button onClick={onSubmitLogin} size="lg" className="bg-accent text-white  ">
            Login
          </Button>
          <div className="text-center flex flex-col gap-1">
            <Link href="/registration">Sign Up</Link>
            <Link href="/forget-password">Forget Password</Link>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
