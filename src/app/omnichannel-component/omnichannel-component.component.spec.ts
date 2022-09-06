import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmnichannelComponentComponent } from './omnichannel-component.component';

describe('OmnichannelComponentComponent', () => {
  let component: OmnichannelComponentComponent;
  let fixture: ComponentFixture<OmnichannelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmnichannelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmnichannelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
