import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators }	from '@angular/forms';
import { Helpers } from '../../utilities/helpers';
import { AppService } from '../../services/app.service';

@Component({
	templateUrl: './players.component.html'
})
export class PlayersComponent implements OnInit {
	addPlayerForm: FormGroup;
	addPlayerFormSubmitted: boolean = false;
	players: any;
	
	constructor(
		private appService: AppService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.getPlayers();

		this.addPlayerForm = this.formBuilder.group({
			name: ['', Validators.required],
		});
	}

	onAddNewPlayerClick() {

		this.addPlayerFormSubmitted = true;
		console.log(this.addPlayerForm);

		if(!this.addPlayerForm.valid) {	
			return;
		}

		this.appService.addNewPlayer({
			id: Helpers.guid(),
			name: this.addPlayerForm.value.name
		});

		this.addPlayerFormSubmitted = false;
		this.addPlayerForm.reset();
		this.getPlayers();
	}

	getPlayers() {
		this.players = this.appService.getPlayers();
		console.log(this.players);
	}

	onDeletePlayer(id: string) {
		if(confirm("Are you sure?")) {
			this.appService.deletePlayer(id);
			this.getPlayers();
		}
	}
}