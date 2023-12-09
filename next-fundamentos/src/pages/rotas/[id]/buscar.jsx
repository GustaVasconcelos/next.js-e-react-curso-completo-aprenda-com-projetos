import { useRouter } from "next/router";

const Buscar = () => {
    const router = useRouter();
    
    const query = router.query.id;
    return (
        <div>
            <h1>Buscar: {query}</h1>
        </div>
    )
}

export default Buscar;