
export function request(callback) {
  // console.log('foo...')
  sleep(callback)
}

export function sleep(callback, time = 1000) {
  setTimeout(() => {
    const res = {code: 0, data: {}}
    callback && callback(res);
  }, time);
}

export function infiniteTimer(callback) {
  sleep(() => {
    callback && callback();

    sleep(callback, 10000);
  })
}
