import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));


  it(`should have as title ‘UnitTestExample’`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('UnitTestExample');
  });
  it('should change title to Unit Test App', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.nativeElement.querySelector('button').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h1')
          .textContent).toEqual('Unit Test App');
  }));
});
