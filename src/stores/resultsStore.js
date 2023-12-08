import {makeAutoObservable} from "mobx";
import {RecipeStore} from "./recipeStore";

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
        ingredients: ingredients.replace(/[^a-zA-Z\s]/g, '').split(" ").join(","),
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