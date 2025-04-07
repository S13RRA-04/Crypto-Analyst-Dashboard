import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuneToolComponent } from './dune-tool.component';

describe('DuneToolComponent', () => {
  let component: DuneToolComponent;
  let fixture: ComponentFixture<DuneToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuneToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuneToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
