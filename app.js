const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const botao_add = document.querySelector(".butao");
const botao_limpar = document.querySelector(".butao_limpar");
const atividades = document.querySelector(".atividades");
const paletas = document.querySelector(".paletas");
const container = document.querySelector('.container');
const erro = document.querySelector('.erro');
const caixa = document.querySelector('.caixa');
const input = document.querySelector('.input');

paleta1.addEventListener('click', () => definirBackground('rgb(46, 104, 71)'));
paleta2.addEventListener('mouseover', () => definirBackground('rgb(78, 59, 51)'));
paleta3.addEventListener('dblclick', () => definirBackground('rgb(187, 83, 65)'));
botao_add.addEventListener('click', () => cadastrarAtividade());
botao_limpar.addEventListener('click', () => removerAtividades());

function definirBackground(cor){
    container.style.background = cor;
    atividades.style.background = cor;
}

function cadastrarAtividade(){
    if(input.value.length > 5){
        erro.style.display = 'none';
        criarAtividade();
    }else{
        erro.style.display = 'flex';
    }
}

function limparInput(){
    input.value='';
}

function removerAtividade(elemento){
    atividades.removeChild(elemento);
}

function removerAtividades(){
    while(atividades.firstChild){
        atividades.removeChild(atividades.firstChild);
    }
}

window.addEventListener('keypress', (e) => {
    if(e.key === "Enter"){
        cadastrarAtividade();
        }
});

function criarAtividade(){
    const div = document.createElement('div');
    div.classList.add('atividade');
    const nomeAtividade = document.createElement('h2');
    nomeAtividade.textContent = input.value;
    const button = document.createElement('button');
    button.textContent = 'limpar';
    button.classList.add('botao_del');
    button.addEventListener('click', () => this.removerAtividade(div));
    div.appendChild(nomeAtividade);
    div.appendChild(button);
    atividades.appendChild(div);
    limparInput();
}