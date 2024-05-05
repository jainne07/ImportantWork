import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styles: [
  ]
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  // @ViewChild('name') name!: ElementRef;
  // @ViewChild('amount') amount!: ElementRef;
  @ViewChild('signup') signup!:NgForm;
  ing!:Ingredients;
  editIndex!: number;
  editmode= false;
  data!: Subscription;
  constructor(private shopSer: ShoppingService) { }

  ngOnInit(): void {
    this.data=this.shopSer.selectedIng.subscribe((id: number)=>{
      //console.log('selectedindex',id);
      this.editIndex= id;
      this.editmode=this.editIndex !== null
      this.ing=this.shopSer.selectIngr(this.editIndex)
      //console.log(this.ing, this.editmode)
      this.signup.setValue({
        name: this.ing.name,
        amount: this.ing.amount
      })
    })
  }
  ngForm(){
    if(this.editmode){
      this.shopSer.updIngr(this.editIndex, this.signup.value)
    }else{
      this.shopSer.addingr(this.signup.value)
    }
    this.onClear();
  }
  onDelete(){
    this.shopSer.deleteIngr(this.editIndex)
    this.onClear();
  }
  submit(){
    //console.log(this.signup)
    this.ngForm();
    //e.preventDefault();
    // const name=this.name.nativeElement.value;
    // const am=this.amount.nativeElement.value
    // const newIng=new Ingredients(name, +am)
    // if(name !== '' && am !== ''){
    //   this.shopSer.addingr(newIng);
    //   this.name.nativeElement.value=''
    //   this.amount.nativeElement.value=''
    // }
  }
  onClear(){
    this.signup.reset()
    this.editmode=false
  }
  ngOnDestroy(){
    this.data.unsubscribe()
  }
}
