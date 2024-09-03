

var nome = 'Xablau'; //var e uma variavel

let idade = 88; //let é menor que var

//var ter escopo global e função, e o let tem escopo local de bloco

let float = 3.7;

let booleano = true; //ou false

let nulo = null; //n tem nada nele

let und = undefined;  /*Poruqe é algo que não foi definido ainda, um array sem nada no momento*/ 

let zero = 0;

let array = ['valor 1', 12];

let array2 = new Array(5); //monto algo previamente definido, otmiza o sistema

let objeto = {
    nome: 'Xablau Jr',
    idade: 61,
    nested: {
        nome: 'outra doença'
    },//isso é um obejto dentro de um objeto, chama objeto.nested.nome
    
    metodo: function(mais){
        return 'Socorro'+mais;
    },

    metodo2: (mais) => {
        return 'algo' +mais;
    }, //escopo passa ser de onde ela está, se tiver mais parametros usa o parenteses
    
    metodo3: mais => 'algo' +mais //escopo passa ser de onde ela está, n precisa por parenteses, mas só aceita um parametro
}; //Parecido com as classes do ýthon, feito para dar propriedades


let array3 = new Array();
for(let i=0; i<10; i++){
    array3[i] = function(){
        return i;
    }
}

let objeto1 = {
    nome: 'Xablau Jr',
    idade: 61,
    nested: function() {
        return this;
    },
}

console.log(objeto.nome, 'tem', objeto.idade, 'anos');

console.log(objeto.metodo(' mais'), objeto.nested.nome);

console.log(objeto1.nested(10));



/*let array3 = new Array();
for(let i=0; i<10; i++){
    array3[i] = objeto.metodo3
}*/