const btnXHR = document.querySelector("#btn-xhr");
const resultadoXhr = document.querySelector("#resultado");

btnXHR.addEventListener("click", () => {

    const requisicao = new XMLHttpRequest();

    requisicao.open("GET", "data/usuarios.json");

    requisicao.onreadystatechange = () => {

        // Estado 3: resposta sendo recebida
        if (requisicao.readyState === 3) {

            resultado.textContent = "Recebendo dados...";

        }

        // Estado 4: requisição concluída
        if (requisicao.readyState === 4) {

            // Status HTTP 200 = requisição realizada com sucesso
            if (requisicao.status === 200) {

                const usuarios = JSON.parse(requisicao.responseText);

                resultado.innerHTML = "";

                usuarios.forEach(usuario => {

                    resultadoXhr.innerHTML += `
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

        }

    };

    requisicao.send();

});