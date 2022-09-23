var aluno = function CriaAluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;
    this.calcMedia = function () {
        let notasTotal = 0
        let media = 0
        for (i = 0; i < this.notas.length; i++) {
            notasTotal += this.notas[i]
        };
        media = notasTotal / this.notas.length;
        return media
    };
    this.faltas = function () {
        this.qtdFaltas++
    };
}

module.exports = aluno