## OsTicket - Frontend

Desenvolvido para exibir em monitores e telões alguns dados referentes ao suporte Celtaware.

## Como preparar o servidor

Se você já está no frontend, muito provavelmente já baixou e seguiu todos os passos do [backend](https://github.com/thiagovasconcellos/osTicketAPI), portanto não vou repetir.
Siga os passos abaixo apenas se já concluiu e rodou sua versão do servidor.

### Como rodar a aplicação

No PowerShell, navegue até um diretório de sua preferência para baixar o código-fonte do projeto.
Realize o clone desse repositório em sua máquina utilizando o comando `git clone https://github.com/thiagovasconcellos/osTicketFront`

Após a conclusão, navegue até a raiz do projeto e rode o comando `yarn` para realizar o download de todos os módulos e bibliotecas necessários para o funcionamento desta aplicação. Após isso, `yarn start` que o React possa emular um React-App.

Seguindo as mesmas regras da API, há um arquivo .env na raiz do proejto com apenas um parâmetro: O endereço do servidor da API.
Preencha o arquivo .env de acordo com o endereço do seu servidor. Do contrário a aplicação não irá funcionar.

## Considerações finais

Esse projeto contém uma rota funcional para exibição. Há a intenção de criar mais rotas, mas elas virão com o tempo e conforme a demanda.

## Built with

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width=88 height=68 title="ReactJS" alt="ReactJS"> </img>

## Autor

- **Thiago Vasconcellos**
