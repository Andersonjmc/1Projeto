function escolha() {
    while (escolha < 1 && escolha != 2 || escolha != 3) {
      var escolha = prompt('1. MATA\n2. CASA ABANDONADA\n3. CEMITÉRIO');
  
      if (escolha == 1) {
        window.location.href = "../1personagem/opc01.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../1personagem/opc02.html";
        break;
      } else if (escolha == 3) {
        window.location.href = "../1personagem/opc03.html";
        break;
      } else {
        alert("Digite 1,2 ou 3");
      }
    }
  }
 
 