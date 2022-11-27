# Waiters App

Waiters App é um aplicativo de gerenciamento de pedidos, desenvolvido durante a semana: **O Poder do Javascript**, ministrado pelo instrutor Mateus Silva.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

---

## 🚀 O Aplicativo

Waiters App é um aplicativo desenvolvido para que restaurantes e barres gerenciem os pedidos feitos pelos clientes, através de um sistema mobile (android e ios) os clientes conseguem realizar pedidos, que serão gerenciados através de uma dashboard em um sistema web.

<table>
  <tr>
    <td><img src="./docs/mobile_01.png"></td>
    <td><img src="./docs/mobile_02.png"></td>
    <td><img src="./docs/mobile_03.png"></td>
  </tr>
  <tr>
    <td><img src="./docs/mobile_04.png"></td>
    <td><img src="./docs/mobile_05.png"></td>
    <td><img src="./docs/mobile_06.png"></td>
  </tr>
</table>

<table>
  <tr>
    <td><img src="./docs/dashboard.png"></td>
  </tr>
</table>



## ⚙️ Instalação

### 📋 Pré-requisitos

Para utilizar o aplicativo será necessário ter instalado o banco de dados **mongodb** ou caso prefira uma instância do Docker com o mesmo, caso opte pelo docker você pode executar esses comandos para fazer sua instalação:

Baixar a imagem do mongo:
```
docker pull mongo
```

Criar uma instância do mongo db no docker:
```
docker run --name mongodb -p 27017:27017 -d mongo
```

Após a instalação inciar o container.

<br/>

---

<p style="color:#f44336">
  <strong>Importante:</strong> Caso você crie o container com um nome diferente do das instruções, você deverá editar: `api > src > index.ts` (linha 13) a conexão com o banco.
</p>

---

<br/>

### 🔧 Como utilizar

Faça um clone da aplicação:

```
https://github.com/gustavosorati/o-poder-do-js-waiters-app.git
```

Instale as dependências das pastas: **api, frontend, mobile**:

```
npm i
```

Execute o scripts para rodar os projetos:

```
npm run start
```

Se tudo ocorrer certo o projeto estará rodando, contudo não terá dados, através das rotas `/products` e `/categories`, você poderá alimentar o sistema.

<br/>


## 👀 Comando uteis

1. Listar os dispositivos android's ativos

```
adb devices
```

2. Mudar o endereço de IP para que o android reconheça o localhost

```
adb -s emulator-5556 reverse tcp:5000 tcp:5000
```

3. Matar e iniciar o adb

```
adb kill-server
adb start-server
```

## 🎁 Agradecimentos

Foi uma semana muito intensa e puxada, o tempo total de hora aulas passaram de 15:00 horas, foi muito aprendizado nessa aplicação, então sou grato por todo conteúdo adquirido.

---

Feito com ❤️ por [Gustavo Sorati](https://github.com/gustavosorati) 

