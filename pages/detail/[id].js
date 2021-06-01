import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button, Divider, Item, Loader } from 'semantic-ui-react';

function Detail({ item, name }) {
  const router = useRouter();
  // const [item, setItem] = useState(null);
  // const { id } = router.query;

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // const getData = async () => {
  //   try {
  //     const res = await axios.get(API_URL);
  //     setItem(res.data);
  //   } catch (e) {
  //     throw new Error();
  //   }
  // };

  // useEffect(() => {
  //   if (!id) return;
  //   getData();
  // }, [id]);
  if (router.isFallback) {
    return (
      <div style={{ padding: '300px 0' }}>
        <Loader inline="centered" active>
          Loading
        </Loader>
      </div>
    );
  }
  if (!item) return null;
  return (
    <div style={{ padding: '15px 10px' }}>
      {name} 환경입니다
      <Item>
        <Item.Image src={item.image_link} />

        <Item.Content>
          <Item.Header>{item.name}</Item.Header>
          <Item.Meta>
            <span
              style={{ display: 'block', color: 'orangered', margin: '10px 0' }}
            >
              ${item.price}
            </span>
          </Item.Meta>
          <Divider />
          <Item.Description>{item.description}</Item.Description>
          <Item.Extra>
            <Button primary style={{ margin: '20px 0' }}>
              구매하기
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    </div>
  );
}

export default Detail;

export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    paths: data.slice(0, 9).map(item => ({
      params: { id: `${item.id}` },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
