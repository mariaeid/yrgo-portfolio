import { SharedModule } from './../shared/shared.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePageComponent } from './example-page.component';

describe('ExamplePageComponent', () => {
  let component: ExamplePageComponent;
  let fixture: ComponentFixture<ExamplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ExamplePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render an example component', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const exampleComponent = compiled.querySelector('app-example');

    expect(exampleComponent).not.toBeNull();
  });
});
