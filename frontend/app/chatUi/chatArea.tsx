import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import PropTypes from "prop-types";

function header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h2 className="text-lg font-medium">Chat with alice</h2>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <SearchIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <XIcon className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  );
}

function chatBubbles( recog, content, role ){
    return(
        <div key={recog}>
      {role == "CardX" ? (
        <div className="flex items-end gap-2 mb-5">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
          </Avatar>
          <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg max-w-[75%]">
            <p>{content}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-end gap-2 justify-end mb-5">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg max-w-[75%]">
            <p>{content}</p>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
          </Avatar>
        </div>
      )}
    </div>
    )
}

function footer() {
  return (
    <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background">
      <div className="relative">
        <Textarea
          placeholder="Message..."
          name="message"
          id="message"
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          className="absolute w-8 h-8 top-3 right-3"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function chatArea() {
  return (
    <div>
      {header()}
      <ScrollArea>
        {chatBubbles(
         "pass the id",
         "hello testing",
         "user",
        )}
      </ScrollArea>
      {footer()}
    </div>
  );
}
function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
// PropTypes for type checking
chatBubbles.propTypes = {
    key: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    role: PropTypes.oneOf(["User", "CardX"]).isRequired,
  };
export default chatArea;
