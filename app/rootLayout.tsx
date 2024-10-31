// RootLayout.js or RootLayout.tsx

"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        document.documentElement.classList.add("dark"); // Ensures 'dark' theme class is applied only on the client
    }, []);

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    );
}
