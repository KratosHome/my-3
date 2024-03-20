export default function RootLayout({
                                       children,
                                       params: {locale},
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    return (
        <html lang={locale}>
        <body>
        {children}
        </body>
        </html>
    );
}
