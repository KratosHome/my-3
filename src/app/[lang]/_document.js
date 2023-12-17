import {Html, Head, Main, NextScript} from 'next/document'
import GoogleTagManager from "../../components/GoogleTagManager/GoogleTagManager";

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <GoogleTagManager/>
                <meta property="og:title"
                      content="CodeCraftMaster - Your Guide to the World of Programming"/>
                <meta property="og:description"
                      content="Development of complex and interesting projects"/>
                <meta property="og:image" content={"/logo.png"}/>
                <meta property="og:url" content="codecraftmaster.com"/>
                <meta property="og:type" content="website"/>

                <meta property="og:site_name" content="codecraftmaster"/>
                <meta property="og:locale" content={params.lang === "en" ? "en" : "ua"}/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}