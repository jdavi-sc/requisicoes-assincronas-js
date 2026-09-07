const btnXHR = document.querySelector("#btn-xhr");
const resultado = document.querySelector("#resultado");

btnXHR.addEventListener("click", () => {

    const requisicao = new XMLHttpRequest(); // cria um objeto responsável por realizar a requisição.

    requisicao.open("GET", "./data/usuarios.json"); // configuramos a requisição. (Faça uma requisição HTTP GET para usuarios.json)

    requisicao.send(); //Enviamos a requisicao
    requisicao.onload = () => { // Funcao que sera executada após a requisicao terminar
        if (requisicao.status === 200) {
            const usuarios = JSON.parse(requisicao.responseText);
            resultado.innerHTML = "";
            usuarios.forEach(usuario => {
                resultado.innerHTML += `
                    <p>
                        <strong>${usuario.nome}</strong><br>
                        Idade: ${usuario.idade}<br>
                        Curso: ${usuario.curso}
                    </p>  
                `;
            });
        } else {
            resultado.textContent = "Erro ao buscar os usuários.";
        }
    };
});