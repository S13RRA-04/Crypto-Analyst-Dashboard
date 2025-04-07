import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationLogsComponent } from './investigation-logs.component';

describe('InvestigationLogsComponent', () => {
  let component: InvestigationLogsComponent;
  let fixture: ComponentFixture<InvestigationLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigationLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigationLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
