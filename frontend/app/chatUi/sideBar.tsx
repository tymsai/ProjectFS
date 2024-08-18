import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

function userSideBar() {
  return (
    <Link
      href="#"
      className="border-b-2 flex items-center justify-between gap-4 p-2"
    >
      <div className="flex items-center gap-4">
        <div>
          <div>Alice Cooper</div>
          <div className="text-xs text-muted-foreground">Online</div>
        </div>
      </div>
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
    </Link>
  )
}
function sideBar() {
  return (
    <div>
      {userSideBar()}
      <p>hi</p>
    </div>
  );
}

export default sideBar;
