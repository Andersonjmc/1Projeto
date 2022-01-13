function escolha() {
    while (escolha < 1 || escolha != 2) {
      var escolha = prompt('1. FICAR NO CASTELO\n2. SAIR DO CASTELO');
  
      if (escolha == 1) {
        window.location.href = "../2personagem/opc02b.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../2personagem/opc02a.html";
        break;
      } else {
        alert("Digite 1 OU 2");
      }
    }
  }
  

 