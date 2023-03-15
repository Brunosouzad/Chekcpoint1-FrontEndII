let form = document.querySelector('#container');
let form2 = document.getElementById('inputUser');
let form3 = document.getElementById('inputUser1');
let cardsContainer = document.querySelector('#cards-container');
let botaoCapturado = document.getElementById("salvar");

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let titulo = event.target.titulo.value;
  let imagemUrl = event.target.url.value;
  let descricao = event.target.descricao.value;

  let card = document.createElement('div');
  card.classList.add('card');

  let imagemWrapper = document.createElement('div');
  imagemWrapper.classList.add('card-imagem');
  let imagem = document.createElement('img');
  imagem.src = imagemUrl;
  imagem.alt = titulo;
  imagemWrapper.appendChild(imagem);
  card.appendChild(imagemWrapper);

  let conteudo = document.createElement('div');
  conteudo.classList.add('card-conteudo');
  let tituloElemento = document.createElement('h2');
  tituloElemento.textContent = titulo;
  conteudo.appendChild(tituloElemento);
  let descricaoElemento = document.createElement('p');
  descricaoElemento.textContent = descricao;
  conteudo.appendChild(descricaoElemento);
  card.appendChild(conteudo);

  cardsContainer.appendChild(card);

  form.reset();
});


  form2.addEventListener("keyup", function () {  

    console.log("Clicou no campo Nome e sobrenome");
    form2.style.backgroundColor = "";
  
  
    if (form3.value.length >= 4 && form2.value.length >= 4) {
      //Manipulando o botão de salvar
      botaoCapturado.removeAttribute("disabled")
      botaoCapturado.style.backgroundColor = "#0b5ed7"   
  
    }else if(form2.value.length <= 3) {
  
      //Manipulando o botão de salvar
      botaoCapturado.setAttribute("disabled", true);
      botaoCapturado.style.backgroundColor = "#B4B4B4"
    }
  })

  form3.addEventListener("keyup", function () {  

    console.log("Clicou no campo Nome e sobrenome");
    form3.style.backgroundColor = "";
  
  
    if (form3.value.length >= 4 && form2.value.length >= 4) {
      //Manipulando o botão de salvar
      botaoCapturado.removeAttribute("disabled")
      botaoCapturado.style.backgroundColor = "#0b5ed7"   
  
    }else {
  
      //Manipulando o botão de salvar
      botaoCapturado.setAttribute("disabled", true);
      botaoCapturado.style.backgroundColor = "#B4B4B4"
    }
  })


  










