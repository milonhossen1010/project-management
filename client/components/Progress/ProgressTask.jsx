'use client';
import { Input, Button } from '@heroui/react';
import TaskCard from '../TaskCard/TaskCard';

export default function ProgressTask() {
  return (
    <div>
      <div className="flex justify-between gap-2 min-w-full mb-8">
        <h2 className="text-2xl font-bold">Task New</h2>
        <div className="flex gap-2">
          <Input variant="bordered" type="text" placeholder="Search" />
          <Button className=" bg-accent text-white">Search</Button>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {/* Card Item  */}
        <TaskCard />
      </div>
    </div>
  );
}
