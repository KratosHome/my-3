import Script from 'next/script';


const GoogleTagManager = () => {
        const GTM_ID = `${process.env.NEXT_GTM_ID}`;
        return (
            <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GTM_ID}', {
      page_path: window.location.pathname,
    });
  `,
                }} />

            </>
        )
    }
;

export default GoogleTagManager;
