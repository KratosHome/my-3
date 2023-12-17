import Script from 'next/script';


const GoogleTagManager = () => {
        const GTM_ID = `${process.env.NEXT_GTM_ID}`;
        return (
            <>
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=G-1VKMHQQYBM`}
                    strategy="afterInteractive"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-1VKMHQQYBM', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </>
        )
    }
;

export default GoogleTagManager;
