import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesContentComponent } from './built-in-pipes-content.component';

describe('BuiltInPipesContentComponent', () => {
  let component: BuiltInPipesContentComponent;
  let fixture: ComponentFixture<BuiltInPipesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipesContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuiltInPipesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
