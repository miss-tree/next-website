import type { Metadata } from "next";

// todo 添加meta标签
export const metadata: Metadata = {
  title: "Generated photos",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
