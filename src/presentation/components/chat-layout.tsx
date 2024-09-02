"use client";

import { useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { Button } from "@/presentation/components/ui/button";
import { Input } from "@/presentation/components/ui/input";
import { ScrollArea } from "@/presentation/components/ui/scroll-area";
import { ArrowLeft, Info, MoreHorizontal, Phone, Send, Video } from "lucide-react";

interface Conversation {
  avatar?: string | undefined;
  id: string;
  name: string;
  lastMessage: string;
  time: string;
}

export function ChatLayout() {
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);

  const conversations: Conversation[] = [
    {
      id: "1",
      name: "John Doe",
      lastMessage: "Hey, how's it going?",
      time: "2m",
    },
    {
      id: "2",
      name: "Jane Smith",
      lastMessage: "Did you see the latest post?",
      time: "1h",
    },
    {
      id: "3",
      name: "Alex Johnson",
      lastMessage: "Let's catch up soon!",
      time: "3h",
    },
  ];

  // return (
  //   <div className="flex h-screen bg-background">
  //     {/* Sidebar */}
  //     <div
  //       className={`w-full md:w-80 border-r ${
  //         selectedChat ? "hidden md:block" : ""
  //       }`}
  //     >
  //       <div className="p-4 border-b">
  //         <h2 className="text-xl font-semibold">Chats</h2>
  //       </div>
  //       <ScrollArea className="h-[calc(100vh-5rem)]">
  //         {conversations.map((conversation) => (
  //           <div
  //             key={conversation.id}
  //             className="flex items-center p-4 cursor-pointer hover:bg-accent"
  //             onClick={() => setSelectedChat(conversation)}
  //           >
  //             <Avatar className="h-12 w-12">
  //               <AvatarImage
  //                 src={`https://i.pravatar.cc/100?u=${conversation.id}`}
  //               />
  //               <AvatarFallback>{conversation.name[0]}</AvatarFallback>
  //             </Avatar>
  //             <div className="ml-4 flex-1">
  //               <div className="flex justify-between items-baseline">
  //                 <h3 className="font-semibold">{conversation.name}</h3>
  //                 <span className="text-sm text-muted-foreground">
  //                   {conversation.time}
  //                 </span>
  //               </div>
  //               <p className="text-sm text-muted-foreground truncate">
  //                 {conversation.lastMessage}
  //               </p>
  //             </div>
  //           </div>
  //         ))}
  //       </ScrollArea>
  //     </div>

  //     {/* Main Chat Area */}
  //     <div
  //       className={`flex-1 flex flex-col ${
  //         !selectedChat ? "hidden md:flex" : ""
  //       }`}
  //     >
  //       {selectedChat ? (
  //         <>
  //           <div className="p-4 border-b flex items-center">
  //             <Button
  //               variant="ghost"
  //               size="icon"
  //               className="md:hidden mr-2"
  //               onClick={() => setSelectedChat(null)}
  //             >
  //               <ArrowLeft className="h-6 w-6" />
  //             </Button>
  //             <Avatar className="h-10 w-10">
  //               <AvatarImage
  //                 src={`https://i.pravatar.cc/100?u=${selectedChat.id}`}
  //               />
  //               <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
  //             </Avatar>
  //             <h2 className="ml-4 text-xl font-semibold">
  //               {selectedChat.name}
  //             </h2>
  //             <div className="ml-auto flex">
  //               <Button variant="ghost" size="icon">
  //                 <Phone className="h-6 w-6" />
  //               </Button>
  //               <Button variant="ghost" size="icon">
  //                 <Video className="h-6 w-6" />
  //               </Button>
  //               <Button variant="ghost" size="icon">
  //                 <MoreHorizontal className="h-6 w-6" />
  //               </Button>
  //             </div>
  //           </div>
  //           <ScrollArea className="flex-1 p-4">
  //             {/* Chat messages would go here */}
  //             <div className="space-y-4">
  //               <div className="flex justify-end">
  //                 <div className="bg-primary text-primary-foreground rounded-lg p-2 max-w-[70%]">
  //                   Hey, how's it going?
  //                 </div>
  //               </div>
  //               <div className="flex justify-start">
  //                 <div className="bg-muted rounded-lg p-2 max-w-[70%]">
  //                   Not bad, just working on some projects. How about you?
  //                 </div>
  //               </div>
  //             </div>
  //           </ScrollArea>
  //           <div className="p-4 border-t">
  //             <form className="flex items-center">
  //               <Input className="flex-1" placeholder="Type a message..." />
  //               <Button type="submit" size="icon" className="ml-2">
  //                 <Send className="h-4 w-4" />
  //               </Button>
  //             </form>
  //           </div>
  //         </>
  //       ) : (
  //         <div className="flex-1 flex items-center justify-center text-center p-4">
  //           <div>
  //             <h2 className="text-2xl font-semibold mb-2">
  //               Welcome to Your Chat
  //             </h2>
  //             <p className="text-muted-foreground">
  //               Select a conversation to start chatting
  //             </p>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-5rem)]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center p-4 cursor-pointer hover:bg-accent"
              onClick={() => setSelectedChat(conversation)}
            >
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={conversation.avatar}
                  alt={conversation.name}
                />
                <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <p className="font-medium">{conversation.name}</p>
                <p className="text-sm text-muted-foreground">
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                  />
                  <AvatarFallback>{selectedChat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="font-semibold">{selectedChat.name}</h2>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              {/* You would map through messages here */}
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg py-2 px-3 max-w-[70%]">
                    Hey, how's it going?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg py-2 px-3 max-w-[70%]">
                    Hi! I'm doing great, thanks for asking. How about you?
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <form className="flex items-center space-x-2">
                <Input className="flex-1" placeholder="Type a message..." />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  );
}
