# Todo Fluig

Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

O projeto tem como objetivo gerenciar uma lista de tarefas onde é possível:
- Criar uma lista de tarefas;
- Excluir a lista de tarefas;
- Criar tarefas dentro das listas criadas;
- Editar tarefas dentro das listas criadas;
- Excluir tarefas das listas criadas;



## Passo 1: Instalando as dependências

É necessário que o Node.js esteja instalado.

Após o projeto estar baixado em sua máquina:

- Navegue pelo prompt até a pasta do projeto `../todo-fluig`;
- Dê o comando `npm install`;



## Passo 2: Rodando json-server 

O json-server serve para simular uma REST API. 

É importante para o funcionamento correto da aplicação e para executar:
- Navegue pelo prompt até a pasta `../src/app/db`
- Nela vamos executar o seguinte comando: ` json-server --watch --delay 500 db.json`

OBS: Não feche o prompt após o comando;



## Passo 3: Executando a aplicação

Após de rodar o json-server, em outro prompt:

- Navegue pelo prompt até a pasta ` ../todo-fluig`
- Dê o comando `ng serve`;
- Vá até o browser e insira o link `http://localhost:4200/`;


## Para mais ajuda

Para mais ajuda use o comando Angulas CLI `ng help` ou dê uma olhada em [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
