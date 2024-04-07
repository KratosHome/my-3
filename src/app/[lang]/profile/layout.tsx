import NavBarAdmin from "@/components/admin/NavBarAdmin/NavBarAdmin";
import "./admin.scss"
export const dynamic = 'force-dynamic';

export default function RootLayout({
                                       children,
                                       params: {locale},
                                   }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {

    return (
        <div className="admin_container">
            <NavBarAdmin/>
            <div className="children-admin">
                {children}
            </div>
        </div>

    );
}
