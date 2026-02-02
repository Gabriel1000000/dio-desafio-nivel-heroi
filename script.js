let numExperient;
let totalHero=prompt("Informe quantos herois serão avaliado:")

totalHero=parseInt(totalHero,10);

for(let i=1; i<=totalHero; i++){

  const nameHero=prompt("Informe o nome do Hero: ");
  const input=prompt("Informe a quantidade de XP do Heroi: ");
  numExperient= parseInt(input , 10);

  condicao(nameHero, numExperient);

}

console.log(`Fim da avaliação! Total de Avaliações: ${totalHero}`);
console.log("Obrigado por usar o sistema de avaliação de Herois!")

function condicao(nameHero, numExperient) {
  let nivel = "";

  if (numExperient <= 1000) nivel = "Ferro";
  else if (numExperient <= 2000) nivel = "Bronze";
  else if (numExperient <= 5000) nivel = "Prata";
  else if (numExperient <= 7000) nivel = "Ouro";
  else if (numExperient <= 8000) nivel = "Platina";
  else if (numExperient <= 9000) nivel = "Ascendente";
  else if (numExperient <= 10000) nivel = "Imortal";
  else nivel = "Radiante";

  console.log(`O Herói de nome ${nameHero} está no nível de ${nivel}`);
  console.log(`XP do heroi: ${numExperient}XP`);
}

