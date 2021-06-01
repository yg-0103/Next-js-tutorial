import React from 'react';
import { Grid } from 'semantic-ui-react';
import Link from 'next/link';

function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3} style={{ padding: '0 20px' }}>
        <Grid.Row>
          {list.map(item => (
            <Grid.Column
              key={item.id}
              style={{ textAlign: 'center', margin: '20px 0' }}
            >
              <Link href={`/detail/${item.id}`}>
                <a>
                  <img
                    style={{
                      display: 'block',
                      margin: '0 auto',
                    }}
                    src={item.image_link}
                    alt={item.name}
                  />
                  <strong
                    style={{
                      width: 200,
                      display: 'block',
                      margin: '6px auto',
                    }}
                  >
                    {item.name}
                  </strong>
                  <span
                    style={{
                      display: 'block',
                      margin: '6px 0',
                      color: 'lightgray',
                    }}
                  >
                    {item.category} {item.product_type}
                  </span>
                  <strong style={{ display: 'block', color: 'orangered' }}>
                    ${item.price}
                  </strong>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ItemList;
