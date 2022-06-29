import Head from "next/head";

export default function Seo({ title }: {title: 'Home' | 'About'}) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    )
}