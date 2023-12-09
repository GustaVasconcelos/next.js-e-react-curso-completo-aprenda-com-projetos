import { useState } from "react"

export default function Form () {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [usuarios, setUsuarios] = useState(0)

    const salvarUsuario = async () => {
        await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({
                nome,
                idade
            })
        })

        setNome('')
        setIdade(0)

        const res = await fetch('/api/form');
        const usuarios = await res.json();
        setUsuarios(usuarios);
    }

    function renderizarUsuarios() {
        if (usuarios) {
            return usuarios.map((usuario, i)  => {
                return <li key={i}> {usuario.nome} - {usuario.idade} </li>
            })
        }

        return false;
    }

    return (
        <div>
            <h1>Intregando com api</h1>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            <input type="text" value={idade}  onChange={e => setIdade(+e.target.value)} />
            <button onClick={salvarUsuario}>Enviar</button>
            <ul>
                {
                    renderizarUsuarios()
                }
            </ul>
        </div>
    )
}

