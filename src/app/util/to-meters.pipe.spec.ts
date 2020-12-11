import { ToMetersPipe } from './to-meters.pipe';

describe('ToMetersPipe', () => {
  it('create an instance', () => {
    const pipe = new ToMetersPipe();
    expect(pipe).toBeTruthy();
  });
});
