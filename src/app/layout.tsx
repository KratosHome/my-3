import NavBarNew from "@/components/NavBarNew/NavBarNew";
import Footer from "@/components/Footer/Footer";

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
