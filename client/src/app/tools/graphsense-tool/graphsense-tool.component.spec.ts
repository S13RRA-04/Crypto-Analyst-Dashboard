import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsenseToolComponent } from './graphsense-tool.component';

describe('GraphsenseToolComponent', () => {
  let component: GraphsenseToolComponent;
  let fixture: ComponentFixture<GraphsenseToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphsenseToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphsenseToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
