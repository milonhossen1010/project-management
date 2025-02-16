'use client';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Textarea, Button } from '@heroui/react';
import Link from 'next/link';

export default function Login() {
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
            <Input label="User Name" type="text" required />
            <Input label="Password" type="password" />
             
            <Button size="lg" className="bg-accent text-white  ">
              Login
          </Button>
          <div className='text-center flex flex-col gap-1'>
            <Link href='/registration' >Sign Up</Link>
            <Link href='/forget-password' >Forget Password</Link>
          </div>

          </CardBody>
        </Card>
      </motion.div>
    
  );
}
