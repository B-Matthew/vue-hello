// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img

function vueFun() {
  new Vue({

    el: '.container',

    data: {
      "hello" : "Ciao Gandalf",
      image: 'img/200.gif'
    }

  });
}

function init() {
  vueFun();
}


$(init);
