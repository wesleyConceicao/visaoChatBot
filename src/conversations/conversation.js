import { buttons, remoteTxt, remoteJson, remoteImg } from "../helpers";

/**
 * Chatbot conversation flow
 * Your custom conversation
 */
export default [
  {
    id: 1,
    parent: 0,
    pattern: /.*/,
    message:
      "Olá, eu sou o Chat do Territórios!  Meu papel é ajudar você a se conectar com seu território em momentos de enchentes. Para que a gente possa fazer isso, vamos precisar te pedir algumas informações, tudo bem? Isso vai auxiliar a gente a direcionar, da melhor forma possível, as suas necessidades e possibilidades de ajuda.",
    description: "Escolha uma opção!",
    buttons: buttons([
      "Sim, estou de acordo.",
      "Não, não quero ajudar.",
      "Quer entender melhor como funciona o chat?",
    ]),
  },
  {
    id: 2,
    parent: 1,
    pattern: /sim, estou de acordo/,
    message:
      "Que bom! Agradecemos sua confiança. Saiba que suas informações estarão seguras conosco e só usaremos da forma que você permitir no passo a passo a seguir, caso ainda tenha dúvidas você sempre pode acessar nosso site. Então, vamos juntos responder algumas perguntinhas?",
  },
  {
    id: 3,
    parent: 1,
    pattern: /não, não quero ajudar/,
    message:
      " É uma pena, mas entendemos sua decisão! Caso tenha dúvidas sobre nossa política de proteção de dados você pode acessar nosso site: ww….. e entender melhor como funciona nosso projeto.    ",
  },

  {
    id: 4,
    parent: 2,
    pattern: /.*/,
    message: "Você precisa de ajuda contra enchentes agora?",
    description: "Escolha uma opção!",
    buttons: buttons(["Sim", "Não"]),
  },

  {
    id: 5,
    parent: 4,
    pattern: /sim/,
    message: "Informe seu cep",
  },
  {
    id: 6,
    parent: 5,
    pattern: /^\d{8}$/,
    message: "Ok! Peguei seu CEP!",
  },

  {
    id: 7,
    parent: 6,
    pattern: /.*/,
    message: "Nos últimos 6 meses, a sua residência foi afetada por enchentes?",
    description: "Escolha uma opção!",
    buttons: buttons(["Sim", "Não"]),
  },
  {
    id: 8,
    parent: 7,
    pattern: /sim/,
    message: "Ok!",
    end: true,
  },
];
