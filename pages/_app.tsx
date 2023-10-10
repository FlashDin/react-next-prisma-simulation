import Layout from '../components/layout'
import * as React from "react";
import '../app/globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']});

export default function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}