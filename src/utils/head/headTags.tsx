import Head from 'next/head';

export const getTitle = (title: string) => {
    return <title>{'Maycon Jesus - ' + title}</title>;
};

interface getHeadConfig {
    title?: string;
}

export function getHead(config: getHeadConfig) {
    return (
        <Head>
            {config.title && getTitle(config.title)}

            <link
                rel="apple-touch-icon"
                sizes="120x120"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#D72323"
            />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="theme-color" content="#D72323" />

            <meta name="title" content="Maycon Jesus" />
            <meta
                name="description"
                content="Olá me chamo Maycon, sou um desenvolvedor full-stack com experiência em instituições financeiras e lives da twitch e booyah"
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://mayconjesus.dev" />
            <meta property="og:title" content="Maycon Jesus" />
            <meta
                property="og:description"
                content="Olá me chamo Maycon, sou um desenvolvedor full-stack com experiência em instituições financeiras e lives da twitch e booyah"
            />
            <meta
                property="og:image"
                content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://mayconjesus.dev" />
            <meta property="twitter:title" content="Maycon Jesus" />
            <meta
                property="twitter:description"
                content="Olá me chamo Maycon, sou um desenvolvedor full-stack com experiência em instituições financeiras e lives da twitch e booyah"
            />
            <meta
                property="twitter:image"
                content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
            />
        </Head>
    );
}
