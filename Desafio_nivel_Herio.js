

//crating variable, wiht calling function HeroLevel
let matches = HeroLevel(18, 15);

//calling funtion for hero Classification
Classification();

//victories and defeats in matchs
function HeroLevel(victories, defeats) {
    return victories - defeats
}

//hero classification
function Classification() {
    if (matches < 0) {
        console.log("Erga se Guerreiro e vá em busca da IMORTALIDADE !!!")
    } else if (matches < 11) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de "Ferro"`);
    } else if (matches > 10 && matches < 21) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de Bronze"`);
    } else if (matches > 20 && matches < 51) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de Prata"`);
    } else if (matches > 50 && matches < 81) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de Ouro"`);
    } else if (matches > 80 && matches < 91) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de Diamente"`);
    } else if (matches > 90 && matches < 101) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de Lendário"`);
    } else if (matches > 100) {
        console.log(`O Herói Você tem o saldo de ${matches} ${Plural('vitoria', 'vitorias', matches)} e está no nível de IMORTAL"`);

    }
}

//plural and singular helper function 
function Plural(singular, plural, count) {
    return count > 1 ? plural : singular;
}