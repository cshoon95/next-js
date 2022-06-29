import NavBar from "../components/NavBar";

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
}