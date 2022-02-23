class Person {
    constructor(name) {
        this._name = name;
    }
    get getName() {
        return this._name;
    }
    set setName(newName) {
        return this._name = newName;
    }
}
// definicao da classe
const person = new Person('Person Name');

// metodo que recupera o valor dentro do input e chama a funcao html 
const refreshInfos = () => {
    try {
        let newName = document.getElementById('impName').value;
        person.setName = newName;
        return HTML();
    } catch (error) {
        console.error(error);
        return false
    }
}
// funcao que popula o HTML da página dinamicamente
const HTML = () => {
    try {
        document.getElementById('title').innerHTML = `${person.getName}`;
        document.getElementById('principal').innerHTML = `
            <h1>Esse é seu nome: ${person.getName}</h1>
            <label for="impName">Nome:</label>
            <input autofocus="true" type="text" id="impName" name="impName"></input
            <button onclick="refreshInfos()">Confirmar</button>
        `
    } catch (error) {
        console.error(error);
        return false
    }
}

HTML();

module.exports = {
    Person,
    refreshInfos,
    HTML
}