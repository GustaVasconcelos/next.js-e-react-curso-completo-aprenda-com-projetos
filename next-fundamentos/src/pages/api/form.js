const usuarios = []

export default function form (req, res)  {
    
    if (req.method === 'POST') {
        post(req, res)
    }
    
    return res.status(200).send(usuarios);
}


function post(req, res) {
    const usuario = JSON.parse(req.body);

    usuarios.push(usuario);

    return res.status(201).send()
}