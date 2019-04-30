import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdermCompraComponent } from './oderm-compra.component';

describe('OdermCompraComponent', () => {
  let component: OdermCompraComponent;
  let fixture: ComponentFixture<OdermCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdermCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdermCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
