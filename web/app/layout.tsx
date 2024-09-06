import type { Metadata } from "next";
import "./globals.css";
import DefaultLayout from "./layouts/default";

export const metadata: Metadata = {
  title: "数据中心 - 智慧农业大棚检测系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
