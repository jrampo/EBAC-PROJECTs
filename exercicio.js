const alunos = [
    {nome: 'joao', nota: 10},
    {nome: 'maria', nota: 8},
    {nome: 'roger', nota: 4},
    {nome: 'kleber', nota: 6},
    {nome: 'kleiton', nota: 5}
]

function filtraNota6(arrayAlunos) {
    return arrayAlunos
    .filter(aluno => (aluno.nota >= 6))
    .map(aluno => aluno.nome)
}

const filtradosNota = filtraNota6(alunos)

console.log(`Os alunos - ${filtradosNota} - foram aprovados!`)

