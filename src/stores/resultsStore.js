import {makeAutoObservable} from "mobx";
import {RecipeStore} from "./recipeStore";
import {formatIngredients} from "../constants/functions";

export class ResultsStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  async getResults(ingredients, amount) {
    const reqUrl = process.env.REACT_APP_DOMAIN_URL;
    const req = await fetch(reqUrl, {
      method: "POST",
      body: JSON.stringify({
        ingredients: formatIngredients(ingredients, ","),
        amount: amount
      })
    });
    const response = await req.text();

    try {
      this.recipes = JSON.parse(JSON.parse(response)).map(recipe => new RecipeStore(recipe));
      return true;
    } catch (e) {
      return false;
    }
  }
}