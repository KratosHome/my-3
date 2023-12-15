import Script from 'next/script';


const GoogleTagManager = () => {
        const GTM_ID = `${process.env.NEXT_GTM_ID}`;
        return (
            <>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VH1Y00D2RY"/>
                <Script id="google-analytics">
                    {` window.dataLayer = window.dataLayer || [];
                       function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GTM_ID}');
                    `}
                </Script>
            </>
        )
    }
;

export default GoogleTagManager;
