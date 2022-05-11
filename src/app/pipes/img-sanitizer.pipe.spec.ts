import { ImgSanitizerPipe } from './img-sanitizer.pipe';

describe('ImgSanitizerPipe', () => {
  it('create an instance', () => {
    const pipe = new ImgSanitizerPipe();
    expect(pipe).toBeTruthy();
  });
});
