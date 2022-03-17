import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofoflifeScreenComponent } from './proofoflife-screen.component';

describe('ProofoflifeScreenComponent', () => {
  let component: ProofoflifeScreenComponent;
  let fixture: ComponentFixture<ProofoflifeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofoflifeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofoflifeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
