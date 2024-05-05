import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredients } from 'src/app/shared/ingredients';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingActions from '../shopping-list-actions'
import * as fromShopping from '../../app.reducer'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInput!: ElementRef;
  // @ViewChild('amountInput') amountInput!: ElementRef;
  //@Output() ingreAdd=new EventEmitter<{name: string, amount: number}>()
  @ViewChild('addIng') addIng!: NgForm;
  editMode=false;
  editIndex!: number;
  editItem!: Ingredients;
  editSubs!: Subscription
  constructor(private shoppingSer:ShoppingService, private store: Store<fromShopping.AppState>) {}

  ngOnInit(): void {
    this.editSubs=this.store.select('shoppinglist').subscribe((stateData: any)=>{
      console.log(stateData)
      if(stateData.editIndex >-1){
        this.editMode=true;
        this.editIndex=stateData.editIndex;
        this.editItem=stateData.editIng;
        this.addIng.form.patchValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }else{
        this.editMode=false;
      }
    })
  // this.editSubs=this.shoppingSer.startEditing.subscribe((index: number)=>{
  //   this.editIndex=index;
  //   this.editMode=true;
  //   this.editItem=this.shoppingSer.getIngreId(index)
  //   this.addIng.form.patchValue({
  //     name: this.editItem.name,
  //     amount: this.editItem.amount
  //   })
  // })
  }
  addSubmit(){
    const ingredient=new Ingredients(this.addIng.value.name, this.addIng.value.amount)
    if(this.editMode){
      this.store.dispatch(new shoppingActions.updateIngre({index: this.editIndex, ingredients: ingredient}))
      //this.shoppingSer.updateIngre(this.editIndex, ingredient)
    }else{
      this.store.dispatch( new shoppingActions.addIngre(ingredient))
      //this.shoppingSer.addIngre(ingredient);
    }
    this.addIng.reset()
    this.editMode=false;
  }
  clear(){
    this.addIng.reset();
    this.store.dispatch( new shoppingActions.stop)
    this.editMode=false;
  }
  onDelete() {
    this.store.dispatch(new shoppingActions.delIngre(this.editIndex))
    //this.shoppingSer.deleteIng(this.editIndex);
    this.clear();
  }
  // addIngre(){
  //   const name= this.nameInput.nativeElement.value
  //   const amount=this.amountInput.nativeElement.value
  //   const ingredient=new Ingredients(name, amount)
  //   this.shoppingSer.addIngre(ingredient);
  //   // this.ingreAdd.emit({
  //   //   name: this.nameInput.nativeElement.value,
  //   //   amount: this.amountInput.nativeElement.value
  //   // })
  // }
  ngOnDestroy(): void {
    this.editSubs.unsubscribe();
  }
}
