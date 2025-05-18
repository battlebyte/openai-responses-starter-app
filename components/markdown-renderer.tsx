import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export default function MarkdownRenderer({ children }: { children: string }) {
  return (
    <div className="prose prose-sm max-w-none prose-invert bg-background text-foreground prose-pre:bg-[#181B1F] prose-code:bg-[#181B1F] prose-code:text-[#F6F8F9] prose-a:text-[#0057FF] prose-blockquote:border-[#0057FF] prose-blockquote:text-gray-300">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({className, children, ...props}) {
            const isBlock = className && className.startsWith('language-');
            if (!isBlock) {
              return (
                <code className="bg-[#23262B] text-[#F6F8F9] rounded px-1" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-[#181B1F] text-[#F6F8F9] rounded p-2 overflow-x-auto">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          a({ ...props }) {
            return <a className="text-[#0057FF] underline" target="_blank" rel="noopener noreferrer" {...props} />;
          },
          blockquote({ ...props }) {
            return <blockquote className="border-l-4 border-[#0057FF] pl-4 italic text-gray-300 my-2" {...props} />;
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
