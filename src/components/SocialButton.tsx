import type { ReactNode } from "react";

interface SocialButtonProps {
  url: string;
  title?: string;
  children?: ReactNode;
}

export function SocialButton({ url, title, children }: SocialButtonProps) {
  return (
    <a href={url} className="social-btn" title={title ?? "Social Button"}>
      {children}
    </a>
  );
}
