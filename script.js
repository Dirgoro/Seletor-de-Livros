
document.addEventListener('DOMContentLoaded', function() {
  
  const botaoRecomendar = document.getElementById('btn-recomendar');

  if (botaoRecomendar) {
    botaoRecomendar.addEventListener('click', gerarRecomendacao);
  }

});

function gerarRecomendacao() {
 
  const generoSelecionado = document.getElementById('genero').value;
  const tempoSelecionado = document.getElementById('tempo').value;


  const blocoResultado = document.getElementById('resultado');
  const elementoLivro = document.getElementById('livro-nome');
  const elementoDescricao = document.getElementById('livro-descricao');
  const elementoTitulo = document.getElementById('titulo-resultado');

   if (generoSelecionado === "" || tempoSelecionado === "") {
    blocoResultado.style.display = "block";
    blocoResultado.classList.add("alerta");
    elementoTitulo.innerText = "⚠️ Seleção Incompleta!";
    elementoLivro.innerText = "Por favor, escolhe ambas as opções.";
    elementoDescricao.innerText = "Precisas de selecionar um género e o tempo disponível para que o algoritmo possa calcular a melhor sugestão.";
    return; 
  }


  blocoResultado.classList.remove("alerta");
  elementoTitulo.innerText = "📖 Recomendação Especial para Ti:";


  let livroRecomendado = "";
  let sinopse = "";

  if (generoSelecionado === "ficcao") {
    if (tempoSelecionado === "curto") {
      livroRecomendado = "O Guia do Mochileiro das Galáxias (Excertos)";
      sinopse = "Uma leitura rápida e bem-humorada sobre viagens intergalácticas e computadores superinteligentes.";
    } else if (tempoSelecionado === "medio") {
      livroRecomendado = "Eu, Robô - Isaac Asimov";
      sinopse = "Uma coletânea de contos clássicos que discute as 3 Leis da Robótica e as fronteiras entre humanos e máquinas.";
    } else {
      livroRecomendado = "Duna - Frank Herbert";
      sinopse = "Um épico denso e complexo sobre ecologia, política, tecnologia e o futuro da humanidade num planeta desértico.";
    }
  }

  else if (generoSelecionado === "misterio") {
    if (tempoSelecionado === "curto") {
      livroRecomendado = "O Escorpião Vermelho - Coleção Vaga-Lume";
      sinopse = "Um mistério ágil e envolvente, perfeito para uma leitura rápida cheia de pistas e reviravoltas.";
    } else if (tempoSelecionado === "medio") {
      livroRecomendado = "O Cão dos Baskervilles - Arthur Conan Doyle";
      sinopse = "Sherlock Holmes utiliza a lógica pura e o método científico para desvendar uma lenda sombria nos pântanos.";
    } else {
      livroRecomendado = "E Não Sobrou Nenhum - Agatha Christie";
      sinopse = "Dez pessoas isoladas numa ilha são confrontadas com os seus segredos num clássico do suspense psicológico.";
    }
  }

  else if (generoSelecionado === "aventura") {
    if (tempoSelecionado === "curto") {
      livroRecomendado = "O Princezinho - Antoine de Saint-Exupéry";
      sinopse = "Uma jornada poética pelo espaço com reflexões profundas sobre amizade, sensibilidade e afeto.";
    } else if (tempoSelecionado === "medio") {
      livroRecomendado = "Percy Jackson e o Ladrão de Raios - Rick Riordan";
      sinopse = "Uma aventura moderna que mistura mitologia grega, desafios dinâmicos e amizade nos dias de hoje.";
    } else {
      livroRecomendado = "O Hobbit - J.R.R. Tolkien";
      sinopse = "Uma expedição detalhada repleta de perigos, criaturas mágicas e superação pessoal num mundo fantástico.";
    }
  }

  else if (generoSelecionado === "hq") {
    if (tempoSelecionado === "curto") {
      livroRecomendado = "Turma da Mônica Jovem - Edição Especial";
      sinopse = "Leitura super dinâmica com humor, tecnologia e temas do quotidiano dos jovens.";
    } else if (tempoSelecionado === "medio") {
      livroRecomendado = "Homem-Aranha: A Queda de Murdock";
      sinopse = "Narrativa visual envolvente que combina arte marcante, dilemas éticos e ação constante.";
    } else {
      livroRecomendado = "Maus - Art Spiegelman";
      sinopse = "Uma novela gráfica profunda e premiada que retrata memórias históricas através de uma metáfora com animais.";
    }
  }

  elementoLivro.innerText = livroRecomendado;
  elementoDescricao.innerText = sinopse;
  
  blocoResultado.style.display = "block";
}