function escolha() {
    while (escolha < 1 && escolha != 2 || escolha != 3) {
      var escolha = prompt('1. VIELAS\n2. CASTELO ABANDONADO\n3. IGREJA ABANDONADA');
  
      if (escolha == 1) {
        window.location.href = "../2personagem/opc01.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../2personagem/opc02.html";
        break;
      } else if (escolha == 3) {
        window.location.href = "../2personagem/opc03.html";
        break;
      } else {
        alert("Digite 1,2 ou 3");
      }
    }
  }
  

 