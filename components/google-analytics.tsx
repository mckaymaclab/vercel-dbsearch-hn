"use client";
import Script from "next/script";

export function GoogleAnalytics() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-4MRGRS2VR5"
                async={true}
                strategy="afterInteractive"
            ></Script>
            <Script
                id="google-analytics"
                async={true}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-4MRGRS2VR5');
                    `,
                }}
            ></Script>
        </>
    );
}
