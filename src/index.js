import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

// const personagemPedrinho = new Personagem("Pedrinho", 5, "Mago");
// const personagemJose = new Personagem("José", 3, "Arqueiro");

const magoAntonio = new Mago("Antonio", 4, "fogo", 4, 3);
const magaJulia = new Mago("Julia", 8, "gelo", 7, 10);
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico];

new PersonagemView(personagens).render();
