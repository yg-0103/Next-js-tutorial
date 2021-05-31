import axios from 'axios';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import ItemList from '../src/components/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

const API_URL =
  'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getDatas = useCallback(async () => {
    try {
      const res = await axios.get(API_URL);
      setList(res.data);
      setIsLoading(false);
    } catch (e) {
      throw new Error();
    }
  }, []);

  useEffect(() => {
    getDatas();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | YG</title>
        <meta name="description" content="홈입니다" />
      </Head>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : (
        <>
          <Header as="h3" style={{ paddingTop: 30 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 30 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
