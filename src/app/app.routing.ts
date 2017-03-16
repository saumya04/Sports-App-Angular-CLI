import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { PlayersComponent } from './core/components/players/players.component';
import { PlayerDetailsComponent } from './core/components/players/player-details.component';

export const routes: Routes = [
	{	path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'players',
		children: [
			{
				path: '',
				component: PlayersComponent
			},
			{
				path: ':id',
				component: PlayerDetailsComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
