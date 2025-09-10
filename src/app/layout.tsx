import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "산카쿠 | 라멘·우동·오니기리 전문 브랜드",
  description:
    "맛의 기본을 정직하게 지켜갑니다. 산카쿠에서 정통 라멘, 우동, 오니기리를 만나보세요.",
  keywords: "라멘, 우동, 오니기리, 산카쿠, 일본요리, 래멘집",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
