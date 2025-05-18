import { MessageItem } from "@/lib/assistant";
import React from "react";
import MarkdownRenderer from "./markdown-renderer";

interface MessageProps {
  message: MessageItem;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div className="text-foreground">
      {message.role === "user" ? (
        <div className="flex justify-end">
          <div>
            <div className="ml-4 rounded-[16px] px-4 py-2 md:ml-24 bg-[#23262B] text-[#F6F8F9] font-light border border-[#23262B]">
              <div>
                <div>
                  <MarkdownRenderer>
                    {message.content[0].text as string}
                  </MarkdownRenderer>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex">
            <div className="mr-4 rounded-[16px] px-4 py-2 md:mr-24 bg-[#181B1F] text-[#F6F8F9] font-light border border-[#23262B]">
              <div>
                <MarkdownRenderer>
                  {message.content[0].text as string}
                </MarkdownRenderer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
