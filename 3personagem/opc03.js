function escolha() {
    while (escolha < 1 || escolha != 2) {
      var escolha = prompt('1. SAIR\n2. FICAR');
  
      if (escolha == 1) {
        window.location.href = "../3personagem/opc03a.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../3personagem/opc03b.html";
        break;
      } else {
        alert("Digite 1 OU 2");
      }
    }
  }
  

 