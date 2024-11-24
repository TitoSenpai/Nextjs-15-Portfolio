"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./darktoggle"
import { useState, useEffect } from 'react';


export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`border-b-[1px] items-center z-40 w-full p-4 bg-slate-50 opacity-90  dark:border-b-slate-700 dark:bg-gray-800 flex justify-between sticky top-0 transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-0'}`}>
    <Link href="/" className="text-2xl font-bold">
    TitoSenpai
        </Link>
  <NavigationMenu className="">
    <NavigationMenuList className="">
      <NavigationMenuItem className="">
          
          
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>

        <NavigationMenuItem className="border-solid border-cyan-950">
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              
              Login
              
            </NavigationMenuLink>
          </Link>
          
        </NavigationMenuItem>
       
      </NavigationMenuList>
    </NavigationMenu>
    </header>
  )
}


