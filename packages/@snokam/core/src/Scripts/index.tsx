import Script from "next/script";

export const CommonScripts = () => {
  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-6WLLK1H0HW"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6WLLK1H0HW');
        `}
      </Script>
    </>
  );
};

export default CommonScripts;
