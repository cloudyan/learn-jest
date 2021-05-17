// 定时器测试（异步测试）及断言

// https://www.jestjs.cn/docs/timer-mocks
// packages/timer/
import { request, infiniteTimer } from '../src/utils';

describe('定时器相关测试', () => {
  // 开启定时函数模拟
  jest.useFakeTimers(); // 如果多处使用，可以 beforeEach 中设置调用

  it('断言异步测试', () => {
    //创建mock函数，用于断言函数被执行或是执行次数的判断
    const callback = jest.fn();
    request(callback);
    expect(callback).not.toBeCalled();

    // 快进，使所有定时器触发回调
    jest.runAllTimers();
    expect(callback).toBeCalled();
  })
});


// 运行待定时间器（运行所有计时器将是一个无限循环）
describe('infiniteTimer', () => {
  test('schedules a 10-second timer after 1 second', () => {
    const callback = jest.fn();

    infiniteTimer(callback);

    // 在这里，会在意秒钟后执行callback的回调    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

    // 只有当前待定的计时器（但不是在该过程中创建的任何新计时器）
    jest.runOnlyPendingTimers();

    // 此时，1秒钟的计时器应该已经被回调了
    expect(callback).toBeCalled();

    // 它应该创建一个新的计时器，以便在10秒内启动游戏    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  });
});


// 按时间提前计时器(Advance Timers by Time)
describe('按时间提前计时器', () => {
  jest.useFakeTimers();

  it('1秒钟后通过advanceTimersByTime调用回调函数', () => {
    const callback = jest.fn();

    request(callback);

    // callback还没有被执行
    expect(callback).not.toBeCalled();

    // 提前1秒钟执行
    jest.advanceTimersByTime(1000);

    // 所有的callback被调用
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});


// 如需清除 jest.clearAllTimers()
