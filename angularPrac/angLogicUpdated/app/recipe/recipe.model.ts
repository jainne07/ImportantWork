import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    constructor(public name: string, public description: string, public imagpath: string, public ingredient: Ingredients[]){
        this.name=name;
        this.description=description;
        this.imagpath=imagpath;
        this.ingredient=ingredient
    }
}