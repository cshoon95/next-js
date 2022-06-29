import { AppProps } from 'next/dist/shared/lib/router/router'
import NavBar from "../components/NavBar";
import Layout from './Layout';

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    );
};