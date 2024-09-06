import { ReactNode } from "react";

export default function DefaultLayout({
  children,
}: Readonly<{ children?: ReactNode }>) {
  return (
    <div className="h-screen bg-[rgb(242,245,248)]">
      <div className="navbar bg-base-100 h-16">
        <a className="btn btn-ghost text-xl">智慧农业大棚检测系统数据中心</a>
      </div>

      <div className="p-4 min-h-[calc(100%-4rem)]">{children}</div>
    </div>
  );
}
