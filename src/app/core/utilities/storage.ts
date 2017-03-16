import { Injectable } from '@angular/core';

@Injectable()
export class Storage {

	private storage = localStorage;

	get(key) {
		let item = this.storage.getItem(key);

		try {
			return JSON.parse(item);
		} catch (err) {
			return item;
		}
	}

	set(key, value) {
    if(typeof value === "object") {
      this.storage.setItem(key, JSON.stringify(value));
    } else {
      this.storage.setItem(key, value);
    }
  }

  remove(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

}