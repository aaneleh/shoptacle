# Shoptacle

![Badge last-commit](https://img.shields.io/github/last-commit/aaneleh/shoptacle)
![Badge issues](https://img.shields.io/github/issues/aaneleh/shoptacle)
[![Badge twitter](https://img.shields.io/twitter/follow/helena_kurzzz)](https://twitter.com/helena_kurzzz)

## Indice

* [Tecnologias](#tecnologias)
* [Descrição](#descrição)
* [Características](#características)
* [Demonstração](#demonstração)
* [Como Utilizar](#como-utilizar)

## Tecnologias

- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"  width="20px" height="auto" /> **PHP**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  width="20px" height="auto" /> **Javascript**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  width="20px" height="auto" /> **CSS**
- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  width="20px" height="auto" /> **HTML**

## Descrição

Projeto feito em 3 dias focando mais no backend.
A ideia do projeto veio de uma prompt de UX do site [FakeClients](https://fakeclients.com/brief/shoptacle).  
A página principal contem a lista de todos os produtos e no canto superior direito há a opção de pesquisar entre esses produtos.
No rodapé da página principal também há um link que leva a outra página para adicionar novas produtos ao .json.
O formulário é validado atraves do js e esse resultado é transformado em um objeto que é somado aos outros produtos. Essa array com todos os produtos é então enviada para o arquivo PHP que reescreve o .json incluindo o novo objeto.

## Características

- Visualizar itens do .json
- Pesquisar produtos
- Adicionar novos produtos

## Demonstração

[![Thumbnail do vídeo](https://img.youtube.com/vi/lOxpAJoyEzE/0.jpg)](https://www.youtube.com/watch?v=lOxpAJoyEzE)

E você mesmo pode testar [aqui](https://aaneleh.github.io/shoptacle/)!

## Como Utilizar

As paginas e a função de pesquisas função simplesmente executando o index.html.
Para utilizar o PHP é necessário algo para processar o Apache, no meu caso uso o XAMPP: 

1. Coloque a pasta dentro da pasta htdocs que está dentro da pasta do XAMPP
2. Abre o site em [`http://localhost/shoptacle/`](http://localhost/shoptacle/)