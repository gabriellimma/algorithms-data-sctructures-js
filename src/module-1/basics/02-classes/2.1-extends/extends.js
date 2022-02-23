const dogClass = require('../classes.js');

class doggy extends dogClass.dog {
    constructor(name, heigth, color, temperament) {
        super(name, heigth, color);
        this._temperament = temperament;
    }
}

const funcStartDoggo = () => {
    try {
        const doggo = new doggy('Bob', '38cm', 'black', 'calm')
        document.getElementById('title').innerHTML = `Doggo Extends Dog`
        document.getElementById('doggo').innerHTML = `
        <p>Doggo name: ${doggo.getName()}</p>
        <p>Tamanho do doggo: ${doggo.getHeigth()}cm</p>
        <p>Cor do doggo: ${doggo.getName()}</p>
        <p>Temperamento do doggo: ${doggo.getName()}</p>
        `;
        return true;
    } catch (error) {
        return false;
    }
}

funcStartDoggo();

module.exports = {
    doggy,
    funcStartDoggo
}