import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoralisToolComponent } from './moralis-tool.component';

describe('MoralisToolComponent', () => {
  let component: MoralisToolComponent;
  let fixture: ComponentFixture<MoralisToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoralisToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoralisToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
