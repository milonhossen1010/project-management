"use client"
import { Card, CardBody } from "@heroui/react";
import {motion} from "framer-motion"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-4 gap-6">
      
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-4  border-none">
          <CardBody>
            <h2 className="text-2xl font-bold mb-2">Total</h2>
            <p className="text-xl ">00</p>
          </CardBody>
        </Card>
      </motion.div>
    
    </div>
  );
}