import './globals.css';
import {sans} from "./fonts";

export const metadata = {
    title: '2023CTF_hackathon',
    description: '2023 CTF hackathon waiting list',

    viewport: {
        width: "device-width",
        initialScale: 1.0,
        maximumScale: 1.0,
        userScalable: false,
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={sans.className + " m-auto bg-slate-800 overflow-x-hidden scroll-smooth"}>{children}</body>
        </html>
    )
}
