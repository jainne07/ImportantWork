import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredients } from 'src/app/shared/ingredients';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput') nameInput!: ElementRef;
  // @ViewChild('amountInput') amountInput!: ElementRef;
  //@Output() ingreAdd=new EventEmitter<{name: string, amount: number}>()
  @ViewChild('addIng') addIng!: NgForm;
  editMode=false;
  editIndex!: number;
  editItem!: Ingredients;
  editSubs!: Subscription
  constructor(private shoppingSer:ShoppingService) {}

  ngOnInit(): void {
  this.editSubs=this.shoppingSer.startEditing.subscribe((index: number)=>{
    this.editIndex=index;
    this.editMode=true;
    this.editItem=this.shoppingSer.getIngreId(index)
    this.addIng.form.patchValue({
      name: this.editItem.name,
      amount: this.editItem.amount
    })
  })
  }
  addSubmit(){
    const ingredient=new Ingredients(this.addIng.value.name, this.addIng.value.amount)
    if(this.editMode){
      this.shoppingSer.updateIngre(this.editIndex, ingredient)
    }else{
      this.shoppingSer.addIngre(ingredient);
    }
    this.addIng.reset()
    this.editMode=false;
  }
  clear(){
    this.addIng.reset();
    this.editMode=false;
  }
  onDelete() {
    this.shoppingSer.deleteIng(this.editIndex);
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
}
