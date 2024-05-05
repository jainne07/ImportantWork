import { Ingredients } from "../shared/ingredients";

export class Recipes {
    constructor(public name: string,public description: string, public image: string, public ingredients: Ingredients[]){
        this.name=name;
        this.description=description;
        this.image=image;
        this.ingredients=ingredients
    }
}
