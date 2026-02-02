const post = {titulo: "Introdução do JS"};
const copiaPost = post;

copiaPost.titulo = "Aprendendo React";

console.log (post.titulo);


const nome = "Pedro"
const curso = {curso: "Desenvolvimento de sistemas", duracao: 9}

console.log(`Olá ${nome}, bem vindo ao curso ${curso.curso} com duração de ${curso.duracao} horas`);


function soma () {
  let a = 10;
  let b = 15;
  console.log(a+b);
  console.log(a);
}


const roupa = {roupa: "camisa"}

roupa.roupa = "tenis"

console.log(roupa.roupa)


function cumprimentar (nome) {
    return "ola", nome, "!"
};

console.log(cumprimentar("Lucas"));