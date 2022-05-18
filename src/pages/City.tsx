import React, { useEffect, useRef, useState } from 'react';
import { IndexBar, List } from 'antd-mobile';
import { IndexBarRef } from 'antd-mobile/es/components/index-bar';
import { useHistory } from 'umi';
import { connect } from 'dva';

function City(props: any) {
  const [list, setList] = useState<any>([]);
  const history = useHistory();

  const filterCity = (data: any) => {
    const result: any = [];
    const letterArr: string[] = [];
    for (let i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i));
    }

    letterArr.forEach((x) => {
      const items = data.filter(
        (item: any) => item.pinyin.substring(0, 1).toUpperCase() === x,
      );
      items.length &&
        result.push({
          type: x,
          items: items,
        });
    });
    return result;
  };

  const selectedItem = (item: any) => {
    props.dispatch({
      type: 'city/changeCity',
      payload: {
        cityName: item.name,
        cityId: item.cityId,
      },
    });

    props.dispatch({
      type: 'cinema/clearList',
    });
    history.push('/cinemal');
  };

  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=8206400', {
      method: 'GET',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651142561548394309255169"}',
        'X-Host': 'mall.film-ticket.city.list',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setList(filterCity(res.data.cities));
      });
  }, []);
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {list.map((group: any) => {
          const { type, items } = group;
          return (
            <IndexBar.Panel index={type} title={type} key={type}>
              <List>
                {items.map((item: any, index: number) => (
                  <List.Item key={index} onClick={() => selectedItem(item)}>
                    {item.name}
                  </List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          );
        })}
      </IndexBar>
    </div>
  );
}

export default connect(() => ({}))(City);
