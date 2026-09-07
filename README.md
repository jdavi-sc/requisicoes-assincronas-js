# Requisições Assíncronas com JavaScript

Projeto desenvolvido com o objetivo de estudar e compreender o funcionamento de **requisições assíncronas em JavaScript**, utilizando `XMLHttpRequest` (AJAX) e a **Fetch API**.

O projeto utiliza um arquivo JSON local como fonte de dados e demonstra como realizar requisições, receber e processar dados, trabalhar com Promises, utilizar `async/await`, tratar erros e atualizar dinamicamente o conteúdo da página através do DOM.

---

## 📚 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Tecnologias](#-tecnologias)
- [Como o Projeto Funciona](#-como-o-projeto-funciona)
- [Arquivo JSON](#-arquivo-json)
- [XMLHttpRequest](#-xmlhttprequest)
- [Fetch API](#-fetch-api)
- [Promises](#-promises)
- [Async/Await](#-asyncawait)
- [Como Executar](#-como-executar)
- [Referências](#-referências)
- [Licença](#-licença)

---

# 📖 Sobre o Projeto

Este repositório foi criado para fins de **estudo de programação assíncrona em JavaScript**.

A aplicação realiza requisições para um arquivo `JSON` local utilizando duas abordagens diferentes:

1. `XMLHttpRequest`
2. `Fetch API` utilizando `async/await`

Após receber os dados, o JavaScript interpreta as informações e atualiza dinamicamente a página HTML através do **DOM (Document Object Model)**.

O principal objetivo é compreender os fundamentos das requisições assíncronas e observar a diferença entre a abordagem tradicional do `XMLHttpRequest` e a abordagem moderna utilizando a Fetch API.

---

# 🎯 Objetivos

Os principais objetivos deste projeto são:

- Compreender o conceito de programação assíncrona.
- Entender o conceito de AJAX.
- Aprender como funciona o `XMLHttpRequest`.
- Aprender como utilizar a Fetch API.
- Compreender requisições HTTP.
- Entender o método HTTP `GET`.
- Trabalhar com arquivos JSON.
- Converter JSON para estruturas JavaScript.
- Compreender o conceito de Promise.
- Aprender a utilizar `.then()` e `.catch()`.
- Aprender a utilizar `async` e `await`.
- Praticar tratamento de erros.
- Manipular o DOM com dados obtidos através de uma requisição.
- Comparar `XMLHttpRequest` e Fetch API.

---

# 🛠 Tecnologias

O projeto foi desenvolvido utilizando:

- **HTML5**
- **CSS3**
- **JavaScript**
- **JSON**
- **XMLHttpRequest**
- **Fetch API**
- **Promises**
- **Async/Await**

Não são utilizadas bibliotecas ou frameworks externos.

---

### `index.html`

Responsável pela estrutura da página, incluindo os botões utilizados para realizar as requisições e o elemento onde os dados serão exibidos.

### `data/usuarios.json`

Arquivo que contém os dados utilizados como fonte para as requisições.

### `js/xhr.js`

Contém a implementação das requisições utilizando `XMLHttpRequest`.

### `js/fetch.js`

Contém a implementação utilizando a Fetch API e `async/await`.

### `README.md`

Documentação do projeto e material de consulta para estudos futuros.

---

# 🔄 Como o Projeto Funciona

O funcionamento básico da aplicação pode ser representado da seguinte maneira:

```text
Usuário clica em um botão
          ↓
JavaScript inicia uma requisição
          ↓
Requisição GET para usuarios.json
          ↓
JSON é recebido
          ↓
Dados são convertidos para JavaScript
          ↓
Dados são processados
          ↓
DOM é atualizado
          ↓
Informações são exibidas na página
```

As duas implementações utilizam a mesma fonte de dados, porém utilizando APIs diferentes.

---

# 📄 Arquivo JSON

O projeto utiliza um arquivo JSON local como fonte de dados.

Exemplo:

```json
[
    {
        "id": 1,
        "nome": "José",
        "idade": 20,
        "curso": "Análise e Desenvolvimento de Sistemas"
    },
    {
        "id": 2,
        "nome": "Maria",
        "idade": 21,
        "curso": "Engenharia de Software"
    }
]
```

## O que é JSON?

JSON significa **JavaScript Object Notation**.

É um formato de texto utilizado para representar e armazenar dados estruturados.

Um objeto JSON pode representar informações como:

```json
{
    "id": 1,
    "nome": "José",
    "idade": 20
}
```

No JavaScript, essas informações podem ser convertidas em objetos e arrays para serem manipuladas pelo programa.

---

# 🔵 XMLHttpRequest

`XMLHttpRequest` é uma API do JavaScript utilizada tradicionalmente para realizar requisições HTTP de forma assíncrona.

Ela está diretamente relacionada ao conceito de **AJAX**.

Exemplo utilizado no projeto:

```javascript
const requisicao = new XMLHttpRequest();

requisicao.open("GET", "data/usuarios.json");

requisicao.onreadystatechange = () => {

    if (requisicao.readyState === 4) {

        if (requisicao.status === 200) {

            const usuarios = JSON.parse(
                requisicao.responseText
            );

            // Processamento dos dados

        } else {

            // Tratamento de erro

        }

    }

};

requisicao.send();
```

---

## `new XMLHttpRequest()`

Cria um novo objeto `XMLHttpRequest`.

```javascript
const requisicao = new XMLHttpRequest();
```

Esse objeto fornece os métodos e propriedades necessários para realizar e acompanhar uma requisição HTTP.

---

## `open()`

Configura a requisição:

```javascript
requisicao.open(
    "GET",
    "data/usuarios.json"
);
```

O primeiro parâmetro representa o método HTTP:

```text
GET
```

O segundo parâmetro representa o recurso que será solicitado:

```text
data/usuarios.json
```

---

## `send()`

Envia a requisição:

```javascript
requisicao.send();
```

---

## `readyState`

A propriedade `readyState` indica em qual estado a requisição se encontra.

| Valor | Estado | Descrição |
|---:|---|---|
| `0` | UNSENT | O objeto foi criado, mas `open()` ainda não foi chamado |
| `1` | OPENED | `open()` foi chamado |
| `2` | HEADERS_RECEIVED | Os cabeçalhos da resposta foram recebidos |
| `3` | LOADING | A resposta está sendo recebida |
| `4` | DONE | A requisição foi concluída |

Um exemplo:

```javascript
if (requisicao.readyState === 4) {
    // A requisição terminou
}
```

### ⚠️ Importante

O valor `3` **não representa um erro**.

```text
3 → resposta sendo recebida
4 → requisição concluída
```

Para verificar se a requisição foi bem-sucedida, utilizamos o código HTTP através da propriedade `status`.

---

## `status`

A propriedade `status` representa o código de status HTTP retornado pelo servidor.

Exemplo:

```javascript
if (requisicao.status === 200) {
    // Requisição realizada com sucesso
}
```

Alguns códigos HTTP importantes:

| Código | Significado |
|---:|---|
| `200` | OK |
| `201` | Created |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Internal Server Error |

---

## `responseText`

A propriedade `responseText` contém o conteúdo recebido como texto.

```javascript
requisicao.responseText
```

Como o arquivo recebido é JSON, precisamos convertê-lo para uma estrutura JavaScript.

```javascript
const usuarios = JSON.parse(
    requisicao.responseText
);
```

---

# 🟢 Fetch API

A **Fetch API** fornece uma interface moderna para realizar requisições HTTP utilizando JavaScript.

Exemplo:

```javascript
const resposta = await fetch(
    "data/usuarios.json"
);
```

Uma das principais diferenças em relação ao `XMLHttpRequest` é que o `fetch()` utiliza **Promises**, facilitando sua integração com `async/await`.

---

# 🔗 Promises

Uma **Promise** representa o resultado futuro de uma operação assíncrona.

Uma operação pode:

```text
              Promise
                 │
        ┌────────┴────────┐
        ↓                 ↓
    Resolvida          Rejeitada
    (sucesso)           (erro)
```

O `fetch()` retorna uma Promise.

Por exemplo:

```javascript
fetch("data/usuarios.json")
```

Essa Promise pode ser manipulada utilizando:

```javascript
.then()
.catch()
```

Exemplo:

```javascript
fetch("data/usuarios.json")

    .then(resposta => {
        return resposta.json();
    })

    .then(usuarios => {
        console.log(usuarios);
    })

    .catch(erro => {
        console.error(erro);
    });
```

---

# ⏳ Async/Await

Neste projeto, a Fetch API é utilizada com `async/await`.

Exemplo:

```javascript
async function buscarUsuarios() {

    const resposta = await fetch(
        "data/usuarios.json"
    );

    const usuarios = await resposta.json();

}
```

---

## `async`

A palavra-chave `async` define uma função assíncrona:

```javascript
async function buscarUsuarios() {
    // código
}
```

Uma função `async` sempre retorna uma Promise.

---

## `await`

A palavra-chave `await` é utilizada para aguardar o resultado de uma Promise dentro de uma função `async`.

Exemplo:

```javascript
const resposta = await fetch(
    "data/usuarios.json"
);
```

Podemos interpretar esse código da seguinte maneira:

```text
Iniciar requisição
       ↓
Aguardar a Promise
       ↓
Receber resposta
       ↓
Continuar execução
```

O `await` facilita a leitura do código assíncrono, permitindo uma estrutura mais próxima da leitura sequencial tradicional.

---

# 🔍 Por que utilizamos dois `await`?

No projeto temos:

```javascript
const resposta = await fetch(
    "data/usuarios.json"
);
```

e:

```javascript
const usuarios = await resposta.json();
```

São duas operações diferentes.

### Primeira operação

```javascript
await fetch(...)
```

Aguarda a conclusão da requisição HTTP.

### Segunda operação

```javascript
await resposta.json()
```

Aguarda a conversão do corpo da resposta para uma estrutura JavaScript.

O fluxo é:

```text
fetch()
   ↓
Resposta HTTP
   ↓
response.json()
   ↓
Array/Objeto JavaScript
```

---

# ⚠️ Tratamento de Erros

Um ponto importante sobre a Fetch API é que um erro HTTP, como `404` ou `500`, não faz necessariamente com que a Promise do `fetch()` seja rejeitada.

Por isso, verificamos manualmente a propriedade `ok`.

```javascript
if (!resposta.ok) {

    throw new Error(
        "Erro ao realizar a requisição."
    );

}
```

---

## `response.ok`

A propriedade `ok` é um valor booleano.

Ela será:

```text
true  → status HTTP entre 200 e 299
false → outros status HTTP
```

Exemplo:

```javascript
if (resposta.ok) {

    // Requisição bem-sucedida

}
```

Também podemos verificar quando a requisição **não** foi bem-sucedida:

```javascript
if (!resposta.ok) {

    // Requisição apresentou um status HTTP de erro

}
```

O operador `!` significa **negação**.

Portanto:

```javascript
!resposta.ok
```

significa:

> Se a resposta não for considerada bem-sucedida.

---

# 🚨 `throw new Error()`

Quando identificamos um erro, podemos criar e lançar uma exceção:

```javascript
throw new Error(
    "Erro ao realizar a requisição."
);
```

Isso interrompe a execução do bloco `try` e direciona o fluxo para o bloco `catch`.

---

# 🧯 Try/Catch

O `try/catch` permite executar um código que pode gerar erros e tratá-los caso ocorram.

Estrutura:

```javascript
try {

    // Código que pode gerar erro

} catch (erro) {

    // Tratamento do erro

}
```

No projeto:

```javascript
try {

    const resposta = await fetch(
        "data/usuarios.json"
    );

    if (!resposta.ok) {

        throw new Error(
            "Erro ao realizar a requisição."
        );

    }

    const usuarios = await resposta.json();

} catch (erro) {

    resultado.textContent = erro.message;

}
```

O fluxo pode ser representado como:

```text
try
 ↓
fetch()
 ↓
Resposta
 ↓
resposta.ok?
 │
 ├── Sim → continua
 │
 └── Não
      ↓
 throw Error
      ↓
    catch
      ↓
Trata o erro
```

---
### Fetch API

```javascript
const resposta = await fetch(
    "data/usuarios.json"
);
```

A Fetch API geralmente apresenta uma interface mais simples e moderna.

Porém, compreender `XMLHttpRequest` é importante para entender a evolução das requisições assíncronas no desenvolvimento web e para trabalhar com sistemas mais antigos.

---
# ▶️ Como Executar

## Utilizando VS Code

Uma maneira simples é utilizar a extensão **Live Server**.

### Passos

1. Abra a pasta do projeto no VS Code.
2. Certifique-se de que `index.html` está na raiz do projeto.
3. Abra o arquivo `index.html`.
4. Inicie o Live Server.
5. Acesse a página disponibilizada pelo servidor.
6. Teste os botões de requisição.

A aplicação deverá ser executada através de um endereço semelhante a:

```text
http://127.0.0.1:5500/
```
---

# 📚 Referências

- [MDN Web Docs — XMLHttpRequest](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest)
- [MDN Web Docs — Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)
- [MDN Web Docs — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Web Docs — Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs — Async Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs — Await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await)
- [MDN Web Docs — JSON](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/JSON)

---

# 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de estudo.

Consulte o arquivo [LICENSE](LICENSE) para obter mais informações sobre a licença utilizada.