import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        // Link를 사용하지 않고 anchor태그를 사용해서 한다면 페이지를 전체 리로드한다.
        <nav>
            <Link href="/"><a className={router.pathname === "/" ? "active" : ""}>Home</a></Link>
            <Link href="/about"><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
            <style jsx>{`
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
        </nav>
    )
}