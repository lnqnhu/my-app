import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCustomersComponent } from './group-customers-component';

describe('GroupCustomersComponent', () => {
  let component: GroupCustomersComponent;
  let fixture: ComponentFixture<GroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
