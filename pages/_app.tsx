import { AppProps } from 'next/dist/shared/lib/router/router'
import NavBar from "../components/NavBar";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <NavBar />
            <Component {...pageProps}/>
            <span>코딩병원</span>
            <style jsx global>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }`
            }</style>
        </>
    );
};