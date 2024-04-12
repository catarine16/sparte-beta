function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../index.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}

//função de deslogar

//todos esses com o mesmo nome.js são necessários para que o mesmo nome.html funcionarem

//FAZER TODOS OS JS DENTRO DO BACKEND, E LINKAR AO LOCAL PARA SAIR COM ../ E VOLTAR