
import fetchData from '../fetchData';


describe('callback', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })
  // afterEach(() => {
  //   jest.runAllTimers();
  // })

  test('the data is peanut butter', () => {
    const promise = fetchData().then((data) => {
      expect(data).toBe('peanut butter');
    });

    jest.runAllTimers();

    return promise;
  });

  test('the fetch fails with an error', () => {
    expect.assertions(1);
    const promise = fetchData(true).catch((err) => {
      expect(err).toMatch('error');
    });

    jest.runAllTimers();

    return promise;
  });

  test('the data is peanut butter', () => {
    const promise = expect(fetchData()).resolves.toBe('peanut butter');

    jest.runAllTimers();
    return promise;
  });

  test('the fetch fails with an error', () => {
    const promise = expect(fetchData(true)).rejects.toMatch('error');

    jest.runAllTimers();
    return promise;
  });

})


