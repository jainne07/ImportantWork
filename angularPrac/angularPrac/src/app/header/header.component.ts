import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { DataRecipeService } from '../shared/data-recipe.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = false;
  @Output() linkSelected=new EventEmitter<string>();
  isAuth=false
  chk!: Subscription
  constructor(private dataservice: DataRecipeService, private auth:AuthService) { }

  ngOnInit(): void {
    this.chk=this.auth.user.subscribe((user)=>
      {
      this.isAuth=!!user
      console.log(!!user)
      console.log(!user)
    }
    )
  }
  onLogout() {
    this.auth.logout();
  }
  // onselect(feature:string){
  //   //console.log(feature)
  //   this.linkSelected.emit(feature)
  // }

  storeRecp(){
    this.dataservice.storeRecipes()
  }
  fetchRecp(){
    this.dataservice.fetchRecipes().subscribe()
  }
  ngOnDestroy(): void {
    this.chk.unsubscribe();
  }

}
