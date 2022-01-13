function escolha() {
    while (escolha < 1 && escolha != 2 || escolha != 3) {
      var escolha = prompt('1. VENDER BALÕES\n2. CABANA ABANDONADA\n3. ESGOTO');
  
      if (escolha == 1) {
        window.location.href = "../3personagem/opc01.html";
        break;
    } else if (escolha == 2) {
        window.location.href = "../3personagem/opc02.html";
        break;
      } else if (escolha == 3) {
        window.location.href = "../3personagem/opc03.html";
        break;
      } else {
        alert("Digite 1,2 ou 3");
      }
    }
  }
  

 