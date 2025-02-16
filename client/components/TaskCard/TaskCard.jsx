"use client"
import { Card, CardBody, Chip } from '@heroui/react';
import { CiCalendarDate, CiEdit, CiTrash } from 'react-icons/ci';
import { motion } from 'framer-motion';

export default function TaskCard() {
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4">
        <CardBody>
          <h2 className="text-xl mb-3 font-bold">Title</h2>
          <p className="mb-5 text-gray-500 text-lg">Description</p>
          <div className="flex gap-2 justify-between">
            <div className="flex items-center gap-5 text-gray-500">
              <span className="flex items-center gap-1">
                <CiCalendarDate /> 22/22/2025
              </span>

              <CiEdit className="text-accent cursor-pointer" />
              <CiTrash className="text-red-500 cursor-pointer" />
            </div>

            <Chip
              color="warning"
              variant="shadow"
              className="text-white font-bold uppercase"
            >
              Status
            </Chip>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
