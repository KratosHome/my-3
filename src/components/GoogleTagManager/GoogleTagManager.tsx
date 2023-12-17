import Script from 'next/script';


const GoogleTagManager = () => {
        const GTM_ID = `${process.env.NEXT_GTM_ID}`;
        return (
            <>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}/>
                <Script id="google-analytics">
                    {`window.dataLayer = window.dataLayer || [];
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
