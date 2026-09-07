const btnFetch = document.querySelector("#btn-fetch");
const resultadoFetch = document.querySelector("#resultado");

async function buscarUsuarios() {

    try {

        const resposta = await fetch("data/usuarios.json");

        if (!resposta.ok) {
            throw new Error("Erro ao realizar a requisição.");
        }

        const usuarios = await resposta.json();

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

    } catch (erro) {

        resultado.textContent = erro.message;

    }

}

btnFetch.addEventListener("click", buscarUsuarios);