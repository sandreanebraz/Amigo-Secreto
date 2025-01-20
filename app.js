// app.js

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome) {
        amigos.push(nome);

        // Adiciona o nome à lista de amigos na interface
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.innerText = nome;

        listaAmigos.appendChild(li);
        input.value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos dois amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let sorteio = [...amigos];
    let sorteados = [];

    for (let i = 0; i < amigos.length; i++) {
        let candidato = amigos[i];
        let index = sorteio.indexOf(candidato);

        // Remove o próprio nome da lista de candidatos
        if (index > -1) {
            sorteio.splice(index, 1);
        }

        // Se a lista de candidatos estiver vazia, reinicie o sorteio
        if (sorteio.length === 0) {
            sorteio = [...amigos];
            sorteio.splice(sorteio.indexOf(candidato), 1);
        }

        // Escolhe um amigo secreto aleatório
        let amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];

        // Remove o amigo secreto escolhido da lista de candidatos
        sorteio.splice(sorteio.indexOf(amigoSecreto), 1);

        sorteados.push({ amigo: candidato, amigoSecreto: amigoSecreto });
    }

    // Exibe o resultado na interface
    sorteados.forEach(par => {
        const li = document.createElement('li');
        li.innerText = `${par.amigo} tirou ${par.amigoSecreto}`;
        resultado.appendChild(li);
    });
    

}

