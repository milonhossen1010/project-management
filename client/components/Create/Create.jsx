'use client';
import {motion} from "framer-motion"
import { Card, CardBody, Input, Textarea, Button } from '@heroui/react';

export default function CreateTask() {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 80, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <Card className="min-w-[750px]  p-8">
        <CardBody className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Create New</h2>
          <Input label="Title" type="text" />
          <Textarea label="Description" placeholder="Enter your description" />
          <Button size="lg" className="bg-accent text-white max-w-[200px]">
            Submit
          </Button>
        </CardBody>
      </Card>
    </motion.div>
  );
}