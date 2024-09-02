import { Chat } from "@/presentation/components/chat";
import { ChatLayout } from "@/presentation/components/chat-layout";
import ChatSidebar from "@/presentation/components/custom/chat/chat-sidebar";
import {
  Avatar,
  AvatarFallback,
  // AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";

import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import {
  MessageSquareIcon,
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// <div className="w-full h-full flex ">
//   {/* Sidebar */}
//   <div className="max-w-xs w-full h-full sticky left-0 top-0 bottom-0 p-4 px-6 border-r  border-zinc-500">
//     <div className="py-4 flex items-center justify-between bg-red-600">
//       <p className="font-semibold text-lg">Chats</p>
//       <Button
//         variant="ghost"
//         size="icon"
//         className="rounded-full h-fit w-fit"
//       >
//         <PlusIcon className="mx-2" />
//       </Button>
//     </div>
//   </div>

//   {/* Content */}
//   <main className="relative h-full max-h-full overflow-y-scroll  flex-1">
//     <div className="absolute h-[3000px] w-96">Bro</div>
//   </main>
// </div>
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full max-w-full mx-auto">
      <ChatSidebar />
      <div className="flex-1 h-full max-h-full overflow-y-auto">{children}</div>
    </div>
  );
}
