import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipClientListComponent } from './vip-client-list.component';

describe('VipClientListComponent', () => {
  let component: VipClientListComponent;
  let fixture: ComponentFixture<VipClientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VipClientListComponent]
    });
    fixture = TestBed.createComponent(VipClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
