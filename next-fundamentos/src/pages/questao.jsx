import { useEffect, useState } from "react";

export default function questao() {
    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
        .then(res => res.json())
        .then(setQuestao);
    },[])

    const renderizarRespostas = () => {
        if(questao) {
            return questao.respostas.map((res,index) =>{
                return <li key={index}> {res} </li>
            })
        }

        return false
    }

    return (
        <div>
            <h1>Questao:</h1>
            <div>
                <span>{questao?.id} - {questao?.enunciado}</span>
                <ul>
                    {renderizarRespostas()}
                </ul>
            </div>
        </div>
    )
}