import { Injectable } from '@angular/core';

@Injectable()
export class Helpers {

	static guid(): string {
	  return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
	    this.s4() + '-' + this.s4() + this.s4() + this.s4();
	}

	static s4(): string {
	  return Math.floor((1 + Math.random()) * 0x10000)
	    .toString(16)
	    .substring(1);
	}

}