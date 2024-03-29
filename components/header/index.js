import Head from "next/head"

export default function Header(props) {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.descriptions} />
            <link rel="icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        </Head>
    )
}