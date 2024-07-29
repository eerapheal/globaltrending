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

const posts: { title: string; href: string; description: string }[] = [
  {
    title: "React",
    href: "/blog/react",
    description:
      "Discover why React, with its steep learning curve, remains a beloved tool among developers for editing code efficiently and effectively."
  },
  {
    title: "React",
    href: "/blog/react",
    description:
      "Discover why React, with its steep learning curve, remains a beloved tool among developers for editing code efficiently and effectively."
  },
  {
    title: "React",
    href: "/blog/react",
    description:
      "Discover why React, with its steep learning curve, remains a beloved tool among developers for editing code efficiently and effectively."
  },
  {
    title: "React",
    href: "/blog/react",
    description:
      "Discover why React, with its steep learning curve, remains a beloved tool among developers for editing code efficiently and effectively."
  },
]

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
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="America">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs" title="Asia">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Europe">
                  How to install dependencies and structure your app.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {posts.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="absolute md:hidden top-2 right-0 flex items-center justify-between gap-2">
          <ModeToggle />
        <Link href="/rss">
          <Icons.rss className="h-5 w-5" />
        </Link>
        <Link href="/sign-in">
          Login
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-between gap-2">
          <ModeToggle />
        <Link href="/rss">
          <Icons.rss className="h-5 w-5" />
        </Link>
        <Link href="/sign-in">
          Login
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
