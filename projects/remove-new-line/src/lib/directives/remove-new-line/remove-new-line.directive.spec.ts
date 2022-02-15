import { ElementRef, Renderer2 } from '@angular/core';
import { RemoveNewLineDirective } from './remove-new-line.directive';

describe('RemoveNewLineDirective', () => {
  it('should create an instance', () => {
    const directive = new RemoveNewLineDirective(new ElementRef(null), {} as Renderer2);
    expect(directive).toBeTruthy();
  });
});
