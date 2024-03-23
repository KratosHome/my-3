export default function RootLayout({
                                       children,
                                       params: {locale},
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    return (
        <>
            {children}
        </>

    );
}
