import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosPythonComponent } from './projetos-python.component';

describe('ProjetosPythonComponent', () => {
  let component: ProjetosPythonComponent;
  let fixture: ComponentFixture<ProjetosPythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosPythonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
