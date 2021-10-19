let caixa = document.getElementById("caixaMaior");

function chamarJanela(){
    caixa.style.display = "block";
    if(document.getElementById("opcao1").checked) document.getElementById("mensagemCaixa").innerHTML = "Você escolheu A Paz - João Bosco";
    else if (document.getElementById("opcao2").checked) document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Garota de Ipanema - Simone";
    else if (document.getElementById("opcao3").checked) document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Boa noite - Luciana Mello";
    else if (document.getElementById("opcao4").checked) document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Caso Sério - Ed Motta";
    else if (document.getElementById("opcao5").checked) document.getElementById("mensagemCaixa").innerHTML = "Você escolheu Este seu Olha - Toquinho";
    else if (document.getElementById("opcao6").checked) document.getElementById("mensagemCaixa").innerHTML = "Você não gosta de nenhuma";
    else document.getElementById("mensagemCaixa").innerHTML = "Você não escolheu banda";
}

function fecharJanela(){
    caixa.style.display = "none";
    for (let i = 1; i<=6; i++){
        let check = document.getElementById("opcao"+i);
        check.checked = false;
    }
}
