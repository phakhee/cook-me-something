import {makeAutoObservable} from "mobx";

export class RecipeStore {
  name = "";
  description = "";
  ingredients = [];
  prepTime = "";
  cookTime = "";
  servings = "";
  steps = [];

  constructor(args) {
    makeAutoObservable(this);
    Object.keys(args).forEach(key => this[key] = args[key]);
  }
}