import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShodanToolComponent } from './shodan-tool.component';

describe('ShodanToolComponent', () => {
  let component: ShodanToolComponent;
  let fixture: ComponentFixture<ShodanToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShodanToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShodanToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
