export class Personagem {
  nome;
  vida;
  mana;
  level;
  tipo;
  descricao;

  constructor(nome, level) {
    this.nome = nome;
    this.level = level;
    this.vida = 100;
    this.mana = 100;
  }

  obterInsignia() {
    if (this.level >= 5) {
      return `Implacável ${this.constructor.tipo}`;
    }

    return `${this.constructor.tipo} Iniciante`;
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return "Empate!!!"
    }
    if (personagem1.level > personagem2.level) {
      `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
    }
    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
  }
}
