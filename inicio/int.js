function partida() {
    while (escolha < 1 && escolha != 2 || escolha != 3) {
      var escolha = prompt('1. FREIRA\n2. DRACULA\n3. PENNYWISE');
  
      if (escolha == 1) {
        window.location.href = "../1personagem/pers01.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../2personagem/pers02.html";
        break;
      } else if (escolha == 3) {
        window.location.href = "../3personagem/pers03.html";
        break;
      } else {
        alert("Digite 1,2 ou 3");
      }
    }
  }

 