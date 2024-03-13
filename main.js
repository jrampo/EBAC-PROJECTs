//classe abstrata = tratada como "generalizada"

class Personagens {
    constructor(nome, ataque) {
        this.nome = nome
        this.ataque = ataque
    }

    personagemAtaca() {
        console.log(`${this.nome} ataca com: ${this.ataque}!!`)
    }
}

//classes herdeiras = o "generalizado" é oq => tipo
class Paladino extends Personagens {
    constructor(nome) {
        super(nome, 'Impalada Mortal')
    }
}

class Mago extends Personagens{
    constructor(nome) {
        super(nome, 'Bola de Fogo')
    }
}

class Guerreiro extends Personagens{
    constructor(nome) {
        super(nome, 'Espada Sombria')
    }
}

//instâncias => criação do "tipo" => dá "identidade"
const paladino1 = new Paladino('Daniel Paladino')
const mago1 = new Mago('Jean Mago')
const guerreiro1 = new Guerreiro('Kleber Guerreiro')

//instâncias + função de "ação"
paladino1.personagemAtaca()
mago1.personagemAtaca()
guerreiro1.personagemAtaca()