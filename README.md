# Bloom front end test

[Link para teste](https://bloom-books.vercel.app/genero);

## Bloom Book NYT API consume

### Descrição

O Primeiro passo no teste para desenvolvedor front-end na empresa Bloom.
Busquei usar tecnologias que demonstrem bem meu conhecimento, sem deixar o projeto desnecessáriamente complexo.
Ao final desse documento eu explico um pouco da lógica usada

### Techs used

Pra fazer esse projeto, escolhi as seguintes tecnologias:

- [React](https://reactjs.org) - Obrigatório;
- [Vite](https://vitejs.dev) - Para criar a base do projeto;
- [SCSS](https://sass-lang.com/documentation/syntax) - Toda estilização foi feita usando SCSS, para demonstrar meus conhecimentos com modularização de arquivos de estilo, mas também conheço outras opções, como o styled components;
- [React Router Dom v6](reactrouter.com/) - Foi usado para gerênciar a navegação entre as páginas;
- [Axios](https://axios-http.com/) - Usado para consumir a API do NYT.
- [Vercel](https://vercel.com/) - Host com integração continua.

### How to run the application locally

Pra rodar a aplicação localmente basta clonar o projeto para sua maquina usando o terminal:
`git clone https://github.com/Dragg-io/bloomBooks.git`  
or  
`git@github.com:Dragg-io/bloomBooks.git`

Acesse a pasta que foi criada:
`cd bloombooks`

Execute o comando para instalar as depêndencias:
`yarn`  
or  
`npm i` or `npm install`

Quando todas depêndencias estiverem instaladas, rode o comando para abrir o servidor:
`yarn dev`  
or  
`npm run dev`

Esse comando vai rodar a aplicação e ela poderá ser acessada no link:
[localhost](https://127.0.0.1:5173)

A primeira página da aplicação pode ser acessada na rota: [/genero](https://127.0.0.1:5173/genero)

### Test Check list

#### Página de gêneros literários:

[x] Página principal (Listas de gêneros): Deve mostrar o conjunto de listas provenientes da API books do NYT;

[x] O endpoint retorna todos os itens, no entanto o conteúdo deve ser paginado na aplicação, exibindo (5) por vez;

[x] No topo, deverá ser possível pesquisar o conteúdo da listagem por nome. A pesquisa deve ser realizada no objeto retornado da API. De forma a esconder o conteúdo que não corresponder com a pesquisa conforme o usuário digite;

[x] Deve ser possível mudar a forma de exibição de cards para itens através de um ícone no topo ;

[x] A paginação deve ser dinâmica, de forma que a numeração deve corresponder com a quantidade total de itens retornados da listagem da API;

[x] Cada item deve conter as seguintes informações: - Nome da listagem; - Frequência de atualização; - Datas do último publicado e o mais antigo; - Cada item deve ser um link para a listagem de livros do gênero.

#### Página interna de gêneros:

[x] Deve listar os livros provenientes da API books;

[x] Deve ser possível pesquisar através do nome dos livros no topo da página;

[x] Deve ser possível mudar a forma de exibição de cards para itens através de um ícone no topo;

[x] A paginação deve manter o padrão, exibir apenas (5) itens por vez. Cada item deve conter as seguintes informações: - Nome do livro; - Descrição; - Autor; - Preço; - Editora; - rank; - Link para compra; - ìcone indicando se o livro está entre os favoritos ou não.

#### Aba favoritos (Opcional):

[x] Cada livro na página anterior deve conter um ícone indicando se o mesmo foi favoritado ou não;

[x] Os livros favoritados devem aparecer nessa página;

[x] A informação sobre os livros favoritados deve ser armazenada através de alguma solução que permita compartilhar o estado entre as páginas;

### Final Thoughts

Gostaria de começar dizendo que encontrei algumas divergências entre o layout e os dados trazidos pela api, tive de fazer alguns ajustes por conta disso e alguns devem ser mencionados aqui:

- O EndPoint sugerido para a página interna de genero não trazia dados suficientes para realizar o que se pedia no layout. Por isso, realizei alguns testes e usei um outro endpoint que tornava possível a realização mais fiel do layout;
- O Enpoint da listagem de generos também não trazia as informações como se esperava, por isso alterei o texto que informa a taxa de atualização do Genero;

Fiz alguns pequenos ajustes em relação ao layout e adicionei algumas funcionálidades que não eram especificadas no documento de escopo;

#### About the code

Acho que pode ser interessante explicar a lógica empregada no projeto por isso vou passar brevemente a percepção que tive de acordo com o escopo e layout e como isso influênciou na produção do código.
Eu sempre busco produzir meus códigos de forma a permitir que a aplicação cresça de maneira fácil em torno daquilo que ela se propõe a fazer. Para o projeto Bloom Books, entendi que o funcionamento principal girava em torno do que chamei de "controladores de listagem", além é claro da própria listagem. Dessa forma produzi o código para que todos os meios de se controlar a listagem pudessem se adaptar a qualquer tipo de listagem que queira ser futuramente adicionada.
Sistema de busca, modo de exibição, quantidade de itens mostrados por página e paginação, tudo isso tem um potêncial simples de trabalhar com qualquer tipo de item que possa ser listado futuramente. Os únicos trabalhos seriam o de criar os tipos para as novas listagens (exemplo: Book.d.ts), uma página onde ela seria exibida (exempo: Books.tsx), e um elemento de exibição personalizado caso necessário (exemplo: BookItem.tsx).
Dessa forma, acho que podemos ter uma base sólida para possíveis expansões do projeto, como por exemplo adicionar uma listagem de filmes, jogos e afins.
