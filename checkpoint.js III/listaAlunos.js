let estudantes = [
    {
        nome: 'Gabriel Teodoro',
        qtdFaltas: 1,
        notas: [4, 3, 6, 5],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Biral',
        qtdFaltas: 0,
        notas: [10, 10, 10, 10],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Simões',
        qtdFaltas: 1,
        notas: [6, 8, 2, 10],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Gustavo',
        qtdFaltas: 2,
        notas: [5, 3, 9, 7],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    }
]

module.exports = estudantes