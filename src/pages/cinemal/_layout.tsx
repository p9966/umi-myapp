import React, { useEffect } from 'react';
import { NavBar, DotLoading } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';
import { useHistory } from 'umi';
import { connect } from 'dva';

function _layout(props: any) {
  const history = useHistory();
  useEffect(() => {
    if (props.list.length === 0) {
      props.dispatch({
        type: 'cinema/getList',
        payload: {
          cityId: props.cityId,
        },
      });
    }
  }, []);
  return (
    <div>
      <NavBar
        onBack={() => {
          history.push('/city');
        }}
        back={props.cityName}
        backArrow={false}
        right={<SearchOutline />}
      >
        标题
      </NavBar>

      {props.loading && (
        <div style={{ textAlign: 'center' }}>
          <DotLoading />
        </div>
      )}
      <ul>
        {props.list.map((x: any) => (
          <li key={x.cinemaId}>{x.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default connect((state: any) => {
  return {
    cityName: state.city.cityName,
    cityId: state.city.cityId,
    list: state.cinema.list,
    loading: state.loading.global,
  };
})(_layout);
