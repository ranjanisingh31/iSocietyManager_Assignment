import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDialogComponent } from './edit-add-dialog.component';

describe('EditAddDialogComponent', () => {
  let component: EditAddDialogComponent;
  let fixture: ComponentFixture<EditAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
