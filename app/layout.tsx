import './globals.css';
import {sans} from "./fonts";

export const metadata = {
  title: '2023CTF_hackathon',
  description: '2023 CTF hackathon waiting list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sans.className + " m-auto bg-zinc-900 overflow-x-hidden"}>{children}</body>
    </html>
  )
}
