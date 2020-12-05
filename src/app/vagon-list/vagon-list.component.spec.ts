import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagonListComponent } from './vagon-list.component';

describe('VagonListComponent', () => {
  let component: VagonListComponent;
  let fixture: ComponentFixture<VagonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VagonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
