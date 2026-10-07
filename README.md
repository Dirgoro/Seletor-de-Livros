# 📚 Recomendador de Livros — Biblioteca Escolar

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Acessibilidade](https://img.shields.io/badge/Acessibilidade-WCAG--AA-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge)

O **Recomendador de Livros** é uma aplicação web interativa desenvolvida para auxiliar estudantes na escolha da sua próxima leitura escolar. Por meio de um formulário simples, a aplicação processa as preferências do usuário (gênero literário e tempo disponível) e utiliza uma **árvore de decisão lógica em JavaScript** para indicar a melhor opção do acervo.

Este projeto também possui fins pedagógicos, servindo como modelo de ensino prático de **Lógica de Programação**, **Desenvolvimento Web Front-End** e **Pensamento Computacional** com foco em ética e conscientização sobre algoritmos de recomendação.

---

## 🎯 Funcionalidades

- **Seleção Dinâmica de Preferências:** Filtros por gênero literário (*Ficção Científica, Mistério, Aventura, HQ/Mangá*) e tempo de leitura (*Curto, Médio, Longo*).
- **Processamento de Lógica Condicional:** Algoritmo em JavaScript que avalia combinações de escolhas usando estruturas `if / else if / else`.
- **Validação de Formulário:** Alertas interativos caso o usuário esqueça de preencher algum campo antes de gerar a recomendação.
- **Acessibilidade Digital (a11y):**
  - Associação explícita entre rótulos (`<label>`) e campos de seleção (`<select>`).
  - Atributo `aria-live="polite"` para leitura dinâmica por leitores de tela na exibição dos resultados.
  - Estrutura semântica em HTML5.
- **Design Responsivo:** Interface adaptada para navegação em computadores, Chromebooks e dispositivos móveis.

---

## 🧩 Estrutura da Árvore de Decisão Lógica

O motor da aplicação simula um algoritmo de recomendação básico:

```text
               [ Escolha do Usuário ]
                         │
        ┌────────────────┴────────────────┐
   Gênero Literário                 Tempo Disponível
(Ficção, Mistério, etc.)         (Curto, Médio, Longo)
        │                                 │
        └────────────────┬────────────────┘
                         ▼
        [ Estrutura Condicional (if / else) ]
                         │
                         ▼
             [ Livro + Sinopse Sugeridos ]
