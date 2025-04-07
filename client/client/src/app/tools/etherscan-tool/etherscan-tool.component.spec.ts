import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtherscanToolComponent } from './etherscan-tool.component';

describe('EtherscanToolComponent', () => {
  let component: EtherscanToolComponent;
  let fixture: ComponentFixture<EtherscanToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtherscanToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtherscanToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
