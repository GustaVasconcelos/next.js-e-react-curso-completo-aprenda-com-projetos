import Link from "next/link";
import { useRouter } from "next/router";

const Rotas = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Rotas index</h1>
            <ul>
                <Link href="/rotas/123/buscar">
                    <li>
                        id
                    </li>
                </Link>
            </ul>
            <div style={{ display:"flex", flexDirection:"column"}}>
                <button onClick={() => router.push('/rotas/123/buscar')}>Buscar</button>
            </div>
        </div>
    )
}

export default Rotas;