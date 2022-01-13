function escolha() {
    while (escolha < 1 || escolha != 2) {
      var escolha = prompt('1. SE MANIFESTAR\n2. FICAR OBSERVANDO');
  
      if (escolha == 1) {
        window.location.href = "../1personagem/opc03a.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../1personagem/opc03b.html";
        break;
      } else {
        alert("Digite 1 OU 2");
      }
    }
  }
  

 