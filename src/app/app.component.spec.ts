import { SharedModule } from './shared/shared.module';
import { ExampleService } from './core/example.service';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [AppComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    expect(app.title).toEqual('portfolio');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to portfolio!'
    );
  });

  it('Should call count on example service', () => {
    fixture.detectChanges();
    const exampleService = TestBed.get(ExampleService);
    const countSpy = spyOn(exampleService, 'count');

    app.ngOnInit();

    expect(countSpy).toHaveBeenCalled();
  });

  it('Should render an example component', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const exampleComponent = compiled.querySelector('app-example');

    expect(exampleComponent).not.toBeNull();
  });
});
