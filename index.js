let contagem = 0;
let generateTable = () => {
  let tabela = document.getElementById("tabela");

  for (let i = 0; i <= 4; i++) {
    let linhas = document.createElement("tr");

    for (let j = 0; j <= 4; j++) {
      let td = document.createElement("td");
      td.textContent = `Celula da linha ${contagem}, coluna ${j}`;
      linhas.appendChild(td);
    }
    tabela.appendChild(linhas);
    contagem++;
  }
};
