import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import Link from "next/link";
import UserAvatar from "../user/user-avatar";

export default function ChatSidebar() {
  return (
    <div className="border-r w-72 bg-muted/20 p-4 hidden md:block ">
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-xl">Chats</p>
        <Button
          variant="outline"
          size="icon"
          className="hover:bg-muted flex items-center"
        >
          <PlusIcon className="size-5" />
          <span className="sr-only">New Chat</span>
        </Button>
      </div>
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search chats..."
          className="w-full rounded-lg bg-background pl-8 h-9"
        />
      </div>
      <div className="mt-4 space-y-2">
        <Link
          href="#"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 bg-muted"
          prefetch={false}
        >
          <UserAvatar fallback="OM" src="/placeholder-user.jpg" />
          <div className="grid gap-0.5">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs text-muted-foreground">
              Hey there! How are you?
            </p>
          </div>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50"
          prefetch={false}
        >
          <UserAvatar fallback="AJ" src="/placeholder-user.jpg" />
          <div className="grid gap-0.5">
            <p className="text-sm font-medium leading-none">Alex Johnson</p>
            <p className="text-xs text-muted-foreground">
              Just finished a great book! 📚
            </p>
          </div>
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50"
          prefetch={false}
        >
          <UserAvatar fallback="MG" src="/placeholder-user.jpg" />
          <div className="grid gap-0.5">
            <p className="text-sm font-medium leading-none">Maria Gonzalez</p>
            <p className="text-xs text-muted-foreground">
              Excited for the weekend!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
