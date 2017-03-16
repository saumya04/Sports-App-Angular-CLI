import { Injectable } from '@angular/core';
import { Storage } from '../utilities/storage';

@Injectable()
export class AppService {
	private players;
	
	constructor(private storage: Storage) {
		this.players = this.storage.get('players');
	}

	addNewPlayer(obj: Object) {
		if(!this.players) {
			this.players = [];
		}

		this.players.push(obj);
		this.updatePlayers();
	}

	updatePlayers() {
		this.storage.set('players', this.players);
	}

	getPlayers() {
		return this.storage.get('players');
	}

	deletePlayer(id: string) {
		this.players = this.players.filter(
			(element, index) => {
				if(element.id == id) {
					return false;
				}
				return true;
			}
		);

		this.updatePlayers();
	}

	getPlayerDetails(id: string) {
		let returnVal = null;

		this.players = this.players.map(
			(element, index) => {
				console.log(element);
				if(element.id == id) {
					returnVal = element;
				}
			}
		);

		return returnVal;
	}

	editPlayerDetails(data) {
		let players = this.getPlayers();

		if(data && data.hasOwnProperty('id')) {
			if(players) {
				for(let key in players) {
					if(players[key].id == data.id) {
						players[key].name = data.name;
					}
				}
			}
		}

		this.players = players;
		this.updatePlayers();
	}

}