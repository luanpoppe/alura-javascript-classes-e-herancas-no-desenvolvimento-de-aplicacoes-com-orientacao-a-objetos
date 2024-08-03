import { Personagem } from "./modules/personagem.js";

const personagemPedrinho = new Personagem();
personagemPedrinho.name = "Pedrinho";
personagemPedrinho.mana = 12;
personagemPedrinho.vida = 7;
personagemPedrinho.tipo = "Mago";
personagemPedrinho.level = "5";

console.log("personagemPedrinho", personagemPedrinho);

const personagemJose = new Personagem();
personagemJose.nome = "José";
personagemJose.tipo = "Arqueiro";
personagemJose.level = 3;
