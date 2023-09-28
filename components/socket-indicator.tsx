"use client";

import { useSocket } from "@/components/provider/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge
        variant={"outline"}
        className="bg-yellow-600 text-white
        border-none"
      >
        Fallback : Polling Every 1s
      </Badge>
    );
  }
  return (
    <Badge
      variant={"outline"}
      className="bg-emerald-500 text-white
    border-none"
    >
      Live : Real Tme Updated
    </Badge>
  );
};
