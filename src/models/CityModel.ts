export default {
  namespace: 'city',
  state: {
    cityName: '北京',
    cityId: 110100,
  },

  reducers: {
    changeCity(preState: any, action: any) {
      return {
        ...preState,
        cityName: action.payload.cityName,
        cityId: action.payload.cityId,
      };
    },
  },
};
