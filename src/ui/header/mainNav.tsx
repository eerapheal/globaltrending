"use client"

import * as React from "react"
import Link from "next/link"
import Logo from "@/assets/images/globaltrending.png"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { ModeToggle } from "@/components/ui/mode.toggle"
import POSTS from '@/utils/constants';
import { Input } from "@/components/ui/input"

export function MainNav({ className }: { className?: string }) {
  return (
    <div className={cn(
      "relative flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between p-2 z-50",
      className
    )}>
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image
            src={Logo}
            alt="mainLogo"
            title="logo"
            width={50}
            height={50}
          />
          <span className="hidden lg:flex text-2xl font-bold text-blue-600 ">Global Trending</span>
        </div>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Region</NavigationMenuTrigger>
            <NavigationMenuContent >
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Africa
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover the diverse cultures, landscapes, and wildlife of Africa. Explore articles on travel, history, and the vibrant life across the continent.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#" title="America">
                  Stay updated with the latest news and trends from North and South America. Read about culture, politics, and lifestyle across the continents.
                </ListItem>
                <ListItem href="#" title="Asia">
                  Explore the rich history, technology advancements, and diverse cultures of Asia. Find insights into travel, cuisine, and economic growth.
                </ListItem>
                <ListItem href="#" title="Europe">
                  Discover Europe blend of modernity and tradition. Get insights into travel, cultural events, and historical landmarks across the continent.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={`/blog/${post.href}`}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute md:hidden top-2 right-0 flex items-center  gap-1">
        <div className="relative flex space-x-2">
          <Input
            type="search"
            name="search"
            id="search"
            placeholder="Search Here"
            className=""
          />
          <Icons.search className="absolute top-2 right-0" />
        </div>
        <ModeToggle />
        <Link href="/rss" className="bg-background py-2  rounded px-4 dark:hover:bg-gray-800">
          <Icons.rss className="h-5 w-5" />
        </Link>
        <Link href="#" className="bg-background py-2  hidden rounded px-4 dark:hover:bg-gray-800">
          Free Tutorial
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between gap-2">
        <div className="relative">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Search Here"
            className="flex-1"
            defaultValue=""
          />
          <Icons.search className="absolute top-2 right-0" />
        </div>
        <ModeToggle />
        <Link href="#" className="bg-background py-2 hidden rounded px-4 dark:hover:bg-gray-800">
          Free Tutorial
        </Link>
        <Link href="/rss" className="bg-background py-[10px]  rounded px-4 dark:hover:bg-gray-800">
          <Icons.rss className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
