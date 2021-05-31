import Head from 'next/head';
import React from 'react';
import { List } from 'semantic-ui-react';

function About() {
  return (
    <>
      <Head>
        <title>ABOUT| YG</title>
      </Head>
      <List>
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
        />
      </List>
    </>
  );
}

export default About;
