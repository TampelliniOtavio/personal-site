import Link from "next/link";

function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl">Home</a>
                </Link>
                <Link href="/teste">
                    <a className="btn btn-ghost normal-case text-lg">Teste</a>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
