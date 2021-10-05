const student = {
    id : 15,
    name : 'Mahim Rahman',
    income : 15000,
    isRich : false,
    subjects: ['english','math','calculas'],
    bestFriend: {
        name: "samir rahman",
        major: 'mathmatices'
    },
    takeExam: function () {
        console.log(this.name,'taking exam')
    },
    treatDey: function(expense) {
       let money = this.income - expense;
       return money;
    }
}

student.takeExam();

const treat = student.treatDey(1000);
console.log(treat);
