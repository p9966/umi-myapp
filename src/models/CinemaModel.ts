export default {
  namespace: 'cinema',
  state: {
    list: [],
  },

  reducers: {
    changeList(preState: any, action: any) {
      return {
        ...preState,
        list: action.payload,
      };
    },
    clearList(preState: any, action: any) {
      return {
        ...preState,
        list: [],
      };
    },
  },
  effects: {
    *getList(action: any, obj: any): any {
      const { put, call } = obj;
      var res = yield call(getListForCinema, action.payload.cityId);

      yield put({
        type: 'changeList',
        payload: res,
      });
    },
  },
};

async function getListForCinema(cityId: any) {
  var res = await fetch(
    `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=8828650`,
    {
      method: 'GET',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651142561548394309255169"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    },
  ).then((res) => res.json());
  return res.data.cinemas;
}
