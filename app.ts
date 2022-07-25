//Desafio Number 1

const carro: {codigo: number, name: string} = {
    codigo: 20,
    name :'Mustang'

}



//Desadio number 2

enum emprego{
    Jogadora,
    Piloto
}

type Humano = {
    nome: string,
    idade: number,
    profissao: emprego

}



let pessoa1: Humano = {
    nome : 'maria',
    idade : 29,
    profissao : emprego.Jogadora

};

let pessoa2: Humano = {
    nome : 'roberto',
    idade : 19,
    profissao : emprego.Piloto

};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: emprego.Jogadora
};

let pessoa4: Humano = {
    nome : 'carlos',
    idade : 19,
    profissao : emprego.Piloto

};



