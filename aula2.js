const { MongoClient } = require("mongodb");
//const json = require('./books.json')

async function main(){
    const uri = "mongodb://localhost:27017";
    
    const client = new MongoClient(uri); //Para chamar a classe com new

    try{
        const db = client.db("store"); //criando um banco de dados ou selecionando
        const col = db.collection('books'); //col é a collection
        //const res = await col.find().toArray();//a partir desse ponto fazemos os comandos do mongo
        //const res = await col.insertMany(json);//chamou todos os ids do books.json
        /*const res = await col.find().sort({author: 1, pages: -1})
        .skip(5).limit(10).toArray();*/
        //const res = await col.find({author: { $ne: "Vyasa"} }).limit(1).toArray(); //$eq e os que são igual a vyasa, $ne é os que não são vyasa
        //const res = await col.find({pages: {$gt: 300}}).toArray();
        const res = await col.find({pages: {$gt: 300, $lt:1000}}).toArray(); //$gt é maior do q e $lt é menor q 

        console.log(res);
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}
main();
//await spara que uma função seja executada