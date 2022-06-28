import Link from "next/link";

function FourOhFour() {
    return (
        <>
            <h1 className="my-5">404 - Página não encontrada</h1>
            <Link href="/">
                <a className="btn btn-primary">Voltar ao início</a>
            </Link>
        </>
    );
}

export default FourOhFour;
