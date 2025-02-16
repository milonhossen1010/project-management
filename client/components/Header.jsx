'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  User,
} from '@heroui/react';
import Logo from './Logo';
import { LuUserRound } from 'react-icons/lu';
import { IoIosLogOut } from 'react-icons/io';
import Link from 'next/link';


export default function Header() {
  return (
    <header className="py-5 shadow-custom bg-white fixed top-0 w-full">
      <div className="px-5 flex justify-between items-center">
        {/* Left side  */}
        <div>
          <Logo text="Task Manage" />
        </div>

        {/* Right side  */}
        <div>
          <Dropdown>
            {/* Menu Trigger  */}
            <DropdownTrigger className=" cursor-pointer">
              <User
                avatarProps={{
                  src: '/user.jpeg',
                }}
                description="Product Designer"
                name="Jane Doe"
              />
            </DropdownTrigger>

            {/* Dropdown Menu  */}
            <DropdownMenu variant="border">
              {/* User Infor  */}
              <DropdownItem isDisabled className="opacity-100">
                <div className="flex justify-center">
                  <Image
                    className="rounded-full"
                    src="/user.jpeg"
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <h2 className="mt-3 text-xl font-bold text-center">
                  Milon Hossen
                </h2>
              </DropdownItem>

              {/* Menu List  */}
              <DropdownItem className="py-4 hover:bg-accent-hover opacity-100 border-l-5 rounded-none border-transparent hover:border-accent">
                <Link
                  href="/profile"
                  className="flex text-[17px] items-center gap-4"
                >
                  <LuUserRound className="text-xl" /> <span>Profile</span>
                </Link>
              </DropdownItem>

              <DropdownItem className="py-4 hover:bg-accent-hover opacity-100 border-l-5 rounded-none border-transparent hover:border-accent">
                <Link
                  href="/profile"
                  className="flex text-[17px] items-center gap-4"
                >
                  <IoIosLogOut className="text-xl" /> <span>Logout</span>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
