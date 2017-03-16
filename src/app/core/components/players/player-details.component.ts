import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router' ;

@Component({
	templateUrl: './player-details.component.html'
})

export class PlayerDetailsComponent implements OnInit {

	editPlayerForm: any;
	player: any;
	player_id: string;
	editPlayerFormSubmitted: boolean = false;

	constructor(
		private appService: AppService,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router
	) { }
	
	ngOnInit() {
		this.subscribeRoute();
	}

	subscribeRoute() {
		this.route.params
				    .subscribe(
				    	(params) => {
				    		console.log(params['id']);
				    		this.player_id = params['id'];
				    		this.fetchPlayerDetails(params['id']);
				    	}
			    	)
	}

	initEditForm() {
		this.editPlayerForm = this.formBuilder.group({
			name: [this.player.name, Validators.required],
		});
	}

	fetchPlayerDetails(id: string) {
		this.player = this.appService.getPlayerDetails(id);
		if(!this.player) {
			alert('Invalid Route!');
			this.router.navigate(['/players']);
		}
		this.initEditForm();
	}

	onEditPlayerClick() {
		console.log(this.editPlayerForm);
		if(!this.editPlayerForm.valid) {
			return;
		}
		this.appService.editPlayerDetails({
			id: this.player_id,
			name: this.editPlayerForm.value.name
		});
		this.router.navigate(['/players']);
	}
	
}