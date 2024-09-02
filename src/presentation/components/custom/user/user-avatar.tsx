import { cn } from "@/presentation/_shared/lib/utils";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarProps,
} from "@radix-ui/react-avatar";

interface Props extends AvatarProps {
  src: string;
  fallback: string | number;
}

export default function UserAvatar({
  src,
  fallback,
  className,
  ...props
}: Props) {
  return (
    <Avatar
      {...props}
      className={cn(
        "border size-10 rounded-full border-input flex items-center justify-center",
        className
      )}
    >
      <AvatarImage
        src={src}
        alt="user image"
        className="rounded-full max-w-full "
      />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
