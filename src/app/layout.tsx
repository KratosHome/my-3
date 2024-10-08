import { Analytics } from "@vercel/analytics/react"

export const dynamic = 'force-dynamic';


export default async function LocaleLayout({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {

    return (
        <>
            {children}
            <Analytics />
        </>
    )
}


