import { MenuIcon } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import Image from "next/image";

const media = [
  "/placeholder-user.jpg",
  "/placeholder-user.jpg",
  "https://i.pravatar.cc/300",
  "https://i.pravatar.cc/301",
  "https://i.pravatar.cc/302",
  "https://i.pravatar.cc/304",
];

export function ChatOptionSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="size-5" />
          <span className="sr-only">Video call</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-sm">
        <SheetHeader>
          <SheetTitle>Chat Options</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-base font-semibold">Media</p>
          <div className="grid grid-cols-4  ">
            {media.map((m, i) => (
              <div
                key={i}
                className="relative flex-1 w-full  h-20 border border-input"
              >
                <Image
                  src={m}
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
