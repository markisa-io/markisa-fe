import { SlimscrollDirective } from './slimscroll.directive';

describe('SlimscrollDirective', () => {
  it('should create an instance', () => {
    const elRefMock = {
      nativeElement: document.createElement('div')
    };

    const directive = new SlimscrollDirective(elRefMock, null);
    expect(directive).toBeTruthy();
  });
});
