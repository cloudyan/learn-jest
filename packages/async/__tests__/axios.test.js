import axios from 'axios';

jest.mock('axios');

import * as user from '../user';

test('should fetch users', () => {
  const resp = {
    data: [
      {
        name: 'Durban',
      },
    ],
  };

  axios.get.mockResolvedValue(resp);
  // 或者也可以使用下面的代码
  // axios.get.mockImplementation(() => Promise.resolve(resp));

  return user.all().then(users => expect(users).toEqual(resp.data));
});
