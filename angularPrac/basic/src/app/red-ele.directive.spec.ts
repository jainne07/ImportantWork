import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RedEleDirective } from './red-ele.directive';

@Component({
    template: `<h1 appRedEle>Welcome Directive</h1>`
})
class redEleComp {
}

describe('RedEleDirective', () => {

    let component: redEleComp;
    let fixture: ComponentFixture<redEleComp>;
    let h1: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [redEleComp, RedEleDirective]
        });
        fixture = TestBed.createComponent(redEleComp);
        component = fixture.componentInstance;
        h1 = fixture.debugElement.query(By.css('h1'));
    });

    it('Red color h1 tag', () => {
        fixture.detectChanges();
        expect(h1.nativeElement.style.color).toBe('red');
    });
}); 
