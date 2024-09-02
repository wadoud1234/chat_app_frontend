import { Message } from "@/domain/types/message.type";
import { cn } from "@/presentation/_shared/lib/utils";
import { ChatOptionSidebar } from "@/presentation/components/custom/chat/chat-options";
import UserAvatar from "@/presentation/components/custom/user/user-avatar";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import {
  ImageIcon,
  LinkIcon,
  MenuIcon,
  PhoneIcon,
  SendIcon,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const currentUser: Message["user"] = {
  id: "userId",
  name: "userName",
  image: "/placeholder-user.jpg",
};

export function ChatMessage({
  message,
  dir,
}: {
  message: Message;
  dir: "right" | "left";
}) {
  return (
    <div
      className={cn(
        "flex items-start justify-end w-full gap-2 h-fit",
        dir === "right"
          ? "justify-end ml-auto pl-10"
          : "justify-start pr-10 mr-auto"
      )}
    >
      {dir === "left" && (
        <UserAvatar
          src={message.user.image}
          fallback={message.user.name.slice(0, 2).toUpperCase()}
        />
      )}
      <div
        className={cn(
          "flex flex-col h-fit py-2 w-full max-w-[280px] sm:max-w-sm md:max-w-md rounded-3xl px-4 bg-muted text-sm",
          {
            "bg-primary text-primary-foreground ": dir === "right",
          }
        )}
      >
        <p className="text-base font-semibold">
          {dir === "right" ? "You" : message.user.name}
        </p>
        <p className=" ">{message.text}</p>
        <div className="text-xs text-muted-foreground mt-1">
          {message.createdAt}
        </div>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserAvatar fallback="OM" src="/placeholder-user.jpg" />
          <div className="grid gap-0.5">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-xs text-muted-foreground">Active 2h ago</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <PhoneIcon className="size-5" />
            <span className="sr-only">Call</span>
          </Button>
          <Button variant="outline" size="icon">
            <VideoIcon className="size-5" />
            <span className="sr-only">Video call</span>
          </Button>
          <ChatOptionSidebar />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 grid gap-4">
        <ChatMessage
          message={{
            id: "messageId",
            text: "Hey hope you're doing well! We should catch up sometime soon. 🙏,Hey hope you're doing well! We should catch up sometime soon. 🙏 Hey hope you're doing well! We should catch up sometime soon. 🙏",
            user: currentUser,
            createdAt: "03:43PM",
          }}
          dir="left"
        />
        <ChatMessage
          message={{
            user: {
              name: "wadoud",
              image: "/placeholder-user.jpg",
              id: "wadoudId",
            },
            text: "Sure! I'm free this weekend if you want to grab a coffee.",
            id: "messageId2",
            createdAt: "03:44 PM",
          }}
          dir="left"
        />
        <ChatMessage
          message={{
            id: "messageId",
            text: "Hey hope you're doing well! We should catch up sometime soon. 🙏,Hey hope you're doing well! We should catch up sometime soon. 🙏 Hey hope you're doing well! We should catch up sometime soon. 🙏",
            user: currentUser,
            createdAt: "03:45",
          }}
          dir="right"
        />
        <ChatMessage
          message={{
            user: {
              name: "wadoud",
              image: "/placeholder-user.jpg",
              id: "wadoudId",
            },
            text: "Sure! I'm free this weekend if you want to grab a coffee.",
            id: "messageId2",
            createdAt: "03:46",
          }}
          dir="left"
        />
        <ChatMessage
          message={{
            id: "messageId",
            text: "Hey hope you're doing well! We should catch up sometime soon. 🙏,Hey hope you're doing well! We should catch up sometime soon. 🙏 Hey hope you're doing well! We should catch up sometime soon. 🙏",
            user: currentUser,
            createdAt: "03:47",
          }}
          dir="right"
        />
        <ChatMessage
          message={{
            user: {
              name: "wadoud",
              image: "/placeholder-user.jpg",
              id: "wadoudId",
            },
            text: "Sure! I'm free this weekend if you want to grab a coffee.",
            id: "messageId2",
            createdAt: "03:48",
          }}
          dir="left"
        />
        {/* <div className="flex w-max max-w-[65%] justify-center flex-col gap-2 rounded-xl overflow-hidden text-sm ml-auto">
          <img
            src="/placeholder.svg"
            alt="photo"
            width={200}
            height={150}
            className="object-cover"
            style={{ aspectRatio: "200/150", objectFit: "cover" }}
          />
        </div> */}
        {/* <div className="flex w-max max-w-[65%] justify-center flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
          Sounds good! Let's meet at the Starbucks on 5th Ave.
        </div>
        <div className="flex w-max max-w-[65%] justify-center flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
          I'll message you on Saturday.
        </div> */}
      </div>
      <div className="border-t">
        <form className="flex w-full items-center space-x-2 p-3">
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
          />
          <Button variant="outline" size="icon">
            <LinkIcon className="size-5" />
          </Button>

          <Button variant="outline" size="icon">
            <ImageIcon className="size-5" />
          </Button>
          <Button type="submit" size="icon">
            <SendIcon className="size-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
