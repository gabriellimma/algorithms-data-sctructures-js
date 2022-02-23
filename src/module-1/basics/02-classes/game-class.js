
class Game {
	constructor(
		name,
		price,        // game full price.
		isDeal,       // if the game is with a price off to make a discount.
		description,
		developer,    // rockstar north, martin lancer etc.
		distribuitor, // Devolver, Sony etc.
		playTipe,     // single player, coop, mmo, online etc.
		platforms = [],    // Mobile, PC, PS5, VR...
		rate
	) {
		this._name = name;
		this._price = price;
		this._isDeal = isDeal;
		this._description = description;
		this._developer = developer;
		this._distribuitor = distribuitor;
		this._playTipe = playTipe;
		this._platforms = platforms;
		this._rate = rate;
	}
	isDealTrue(discount) {
		return this._isDeal == true ? this._price = (this._price - discount) : this._price;
	}
}

const HTMLBody = () => {

	let gameHorizon = new Game();
	gameHorizon._name = 'horizon - zero down';
	gameHorizon._price = 19.00;
	gameHorizon._isDeal = true;
	gameHorizon._description = 'a open world post apolaiptical game';
	gameHorizon._developer = 'Sony';
	gameHorizon._distribuitor = 'Sony';
	gameHorizon._playTipe = 'Offline Single Player';
	gameHorizon._platforms = ['Play Station 4', 'Play Station 5', 'PC'];
	gameHorizon._rate = '8.5';
	try {
		document.getElementById('gameObject').innerHTML = `
		<p id='gameName'> Nome: ${gameHorizon._name} </p>
		<p id='gamePrice'> Preço: R$${gameHorizon._price} </p>
		<p id='gameDescription'> Descrição: ${gameHorizon._description} </p>
		<p id='gameDeveloper'> Desenolvedora: ${gameHorizon._developer} </p>
		<p id='gameDistribuitor'> Distribuidora: ${gameHorizon._distribuitor} </p>
		<p id='gamePlaytimePlatforms'> Tipo de jogo: ${gameHorizon._playTipe} 
		Plataforma: ${gameHorizon._platforms} </p>
		<p id='gameRate'> Nota: ${gameHorizon._rate} </p>`;
		return true;
	} catch (error) {
		return false
	}
}

HTMLBody();

module.exports = {
	HTMLBody,
	Game
}