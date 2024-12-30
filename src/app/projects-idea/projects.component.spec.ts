import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIdeaComponent } from './projects.component';

describe('ProjectsIdeaComponent', () => {
  let component: ProjectsIdeaComponent;
  let fixture: ComponentFixture<ProjectsIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
