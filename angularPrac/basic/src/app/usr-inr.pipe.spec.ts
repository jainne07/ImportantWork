import { TestBed, async } from '@angular/core/testing';
import { UsdInrPipe } from './usd-inr.pipe';

describe('UsdInrPipe', () => {
    let usdinr: UsdInrPipe;

    beforeEach(() => {
        usdinr = new UsdInrPipe();
    });
    it('should create an instance', () => {
        expect(usdinr).toBeTruthy();
    });
    it('change usd to inr', () => {
        expect(usdinr.transform(100, 76)).toEqual(7600);
    });
}); 
