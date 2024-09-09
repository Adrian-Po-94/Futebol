function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Nada encontrado!"
        return
    }

        campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa)
  
    // Inicializa a string que armazenará os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if ((titulo.includes(campoPesquisa)) || (descricao.includes(campoPesquisa))|| (tags.includes(campoPesquisa)))
       
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank"> ${dado.titulo} </a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }

    if (!resultados){
        resultados = "Atleta não encontrado!"

    }
  
    // Insere os resultados construídos na seção
    section.innerHTML = resultados;
  }