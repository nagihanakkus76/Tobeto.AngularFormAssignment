import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirtyGuardPageComponent } from './dirty-guard-page.component';

describe('DirtyGuardPageComponent', () => {
  let component: DirtyGuardPageComponent;
  let fixture: ComponentFixture<DirtyGuardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirtyGuardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirtyGuardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
