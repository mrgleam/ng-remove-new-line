import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveNewLineComponent } from './remove-new-line.component';

describe('RemoveNewLineComponent', () => {
  let component: RemoveNewLineComponent;
  let fixture: ComponentFixture<RemoveNewLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveNewLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveNewLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
