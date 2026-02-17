"use client";

import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function NavDropdownMenu() {
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>☰</button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-x1 shadow-x1 p-2 flex flex-col gap-1 w-44 divide-y divide-white/20">
          <DropdownMenu.Item
            asChild
            className="px-3 py-2 hover:bg-white/10 transition-colors rounded-md"
          >
            <Link href={"/"}>Home</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            asChild
            className="px-3 py-2 hover:bg-white/10 transition-colors rounded-md"
          >
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item
            asChild
            className="px-3 py-2 hover:bg-white/10 transition-colors rounded-md"
          >
            <Link href={"/program"}>Program</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}
