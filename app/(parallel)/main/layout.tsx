import type { Metadata } from "next";
import Link from "next/link";

// todo 添加meta标签
export const metadata: Metadata = {
  title: "parallel router page",
  description: "create next parallel",
  keywords:"create next parallel router"
};

export default function RootLayout({
  children,
  team,
  analytics,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning 去除警告 出现警告的原因可能是浏览器的插件冲突
    //  suppressHydrationWarning={true}
    <div>
        <div className="max-w-min m-auto">
          <div className="flex justify-items-center justify-around">
            <Link href="/main" className="font-bold mr-[50px]">home</Link>
            <Link href="/main/visitor" className="font-bold">visitor</Link>
          </div>
          <div className="flex justify-items-center w-500">
            {team}
            {analytics}
          </div>
        </div>
        {children}
    </div>
  );
}
