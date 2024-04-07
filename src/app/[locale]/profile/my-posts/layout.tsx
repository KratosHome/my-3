import NavBarPostsAdmin from "@/components/admin/NavBarPostsAdmin/NavBarPostsAdmin";

export default function RootLayout({
                                       children,
                                       params: {locale},
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    return (
        <>
            <NavBarPostsAdmin/>
            {children}
        </>
    );
}
