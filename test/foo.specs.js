import Foo from 'lib/foo';

describe('ES6 Foo', () => {
  let foo;

  beforeEach(() => {
    foo = new Foo();
  });

  afterEach(() => {
  });

  it('should return "Do Something" when calling doSomething', () => {
    expect(foo.doSomething()).toEqual('Do Something');
  });
});
