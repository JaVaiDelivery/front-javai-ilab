<h1 align="center">
<img src="https://mototurbogoiania.com/wp-content/uploads/2018/03/courier-motoboy-central-moto-boy-freelancer-motoboy-moto-taxi-setor-empresa-de-entregas.png" title="Entregador" />
</h1>

<h3 align="center">
  JaVai
</h3>

<p align="center">
  <a href="#sobre o projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>
</p>

## 👨🏻‍💻 Sobre o projeto

- <p style="color: red;">O projeto tem o objetivo de manter todo o histórico de telemetria de um entregador para um determinado pedido. A telemetria é encerrada quando há um evento de conclusão ou cancelamento (por parte do entregador).</p>

Para ver o **Back-end**, clique aqui: [JaVai back-end](https://github.com/JaVaiDelivery/back-javai-ilab)</br>

## ⚙️ Funcionalidades
Funcionalidades que o sistema oferece:
- Autenticação do entregador
- Consulta de pedidos em eberto
- Atribuição de pedido pelo entregador
- Alteração de status do pedido (EM_ABERTO/EM_ROTA/CONCLUIDO)
- Consulta de geolocalização do entregador
- Criptografia de senhas
- Validação de requisições
- Documentação dos endpoints
- Mensagens de erro customizadas *user friendly*

## 🚀 Tecnologias

Tecnologias que utilizamos para desenvolver esta API Rest:

- [Node.js](https://nodejs.org/)
- [Vue.js](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Popper.js](https://popper.js.org/)
- [Vite.js](https://vitejs.dev/)

## 💻 Desenvolvedores
- [Alessandra Lamas Luisi](https://github.com/alluisi)
- [Alessandro Costa](https://github.com/ab-costa)
- [Jessica Xavier](https://github.com/jfsax)
- [Rebeca Ferreira](https://github.com/rvsfrebeca1)
- [Talita de Almeida](https://github.com/TalitaCarvalho)

## 💻 Iniciando

- As instruções a seguir irão te guiar para que você crie uma cópia do projeto na sua máquina local.

### Pré-requisitos

- Siga as orientações do README do repositório [Back-end](https://github.com/JaVaiDelivery/back-javai-ilab)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/JaVaiDelivery/front-javai-ilab && cd front-javai-ilab
```

**Instale as dependências**
```
$ yarn
```

**Inicie o client**
```
$ yarn start
```

Para acessar o projeto diretamente no seu browser, acesse https://javai.netlify.app/








<h1 align="center">
<img src="https://mototurbogoiania.com/wp-content/uploads/2018/03/courier-motoboy-central-moto-boy-freelancer-motoboy-moto-taxi-setor-empresa-de-entregas.png" title="Entregador" />
</h1>

<h3 align="center">
  JaVai
</h3>

<p align="center">
  <a href="#sobre o projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>
</p>

## 👨🏻‍💻 Sobre o projeto

- <p style="color: red;">O projeto tem o objetivo de manter todo o histórico de telemetria de um entregador para um determinado pedido. A telemetria é encerrada quando há um evento de conclusão ou cancelamento (por parte do entregador).</p>

Para ver o **Front-end**, clique aqui: [JaVai front-end](https://github.com/JaVaiDelivery/front-javai-ilab)</br>

## ⚙️ Funcionalidades
Funcionalidades que o sistema oferece:
- Autenticação do entregador
- Consulta de pedidos em eberto
- Atribuição de pedido pelo entregador
- Alteração de status do pedido (EM_ABERTO/EM_ROTA/CONCLUIDO)
- Consulta de geolocalização do entregador
- Criptografia de senhas
- Validação de requisições
- Documentação dos endpoints
- Mensagens de erro customizadas *user friendly*

## 🚀 Tecnologias

Tecnologias que utilizamos para desenvolver esta API Rest:

- [Java](https://www.java.com/pt-BR/)
- [Spring Boot](https://spring.io/)
- [JWT](https://jwt.io/)
<!-- - [Swagger](https://swagger.io/) -->

## 💻 Desenvolvedores
- [Alessandra Lamas Luisi](https://github.com/alluisi)
- [Alessandro Costa](https://github.com/ab-costa)
- [Jessica Xavier](https://github.com/jfsax)
- [Rebeca Ferreira](https://github.com/rvsfrebeca1)
- [Talita de Almeida](https://github.com/TalitaCarvalho)

## 💻 Iniciando

- As instruções a seguir irão te guiar para que você crie uma cópia do projeto na sua máquina local.

### Pré-requisitos

- Configure um banco de dados [PostgreSQL](https://www.postgresql.org/) na sua máquina e crie um novo banco.

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/JaVaiDelivery/back-javai-ilab && cd back-javai-ilab
```

**Siga as etapas abaixo**

Edite o arquivo "application.properties" com as configurações do seu banco de dados:

```
spring.datasource.username = seu_usuario
spring.datasource.password = sua_senha
spring.datasource.url = jdbc:postgresql:sua_URL:sua_porta/nome_do_banco?useTimezone=true&serverTimezone=UTC

```
Agora siga as orientações do README do repositório [Front-end](https://github.com/JaVaiDelivery/front-javai-ilab)

Para acessar o projeto diretamente no seu browser, acesse https://javai.netlify.app/