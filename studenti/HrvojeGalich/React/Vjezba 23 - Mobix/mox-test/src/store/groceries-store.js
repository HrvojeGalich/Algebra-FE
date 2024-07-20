import { action, computed, makeObservable, observable } from "mobx";

class GroceriesStore {
  grocerise = [];

  constructor() {
    makeObservable(this, {
      grocerise: observable,
      getGroceries: computed,
      addGrocery: action,
      deleteGrocery: action,
    });
  }

  get getGroceries() {
    return this.grocerise;
  }

  addGrocery(grocery) {
    this.grocerise.push(grocery);
  }

  deleteGrocery(grocery) {
    this.grocerise.remove(grocery);
  }
}

export const groceriesStore = new GroceriesStore();
