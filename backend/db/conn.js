const mongoose = require("mongoose")

async function main() {

    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect("mongodb+srv://matheus:3brgoVIZbilQfDsL@cluster0.b3rytmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Conectado ao Banco!")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }

}

module.exports = main 