import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

const Listings: NextPage = ({
  listings,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Listings Demo</title>
        <meta
          name="description"
          content="A demo of listing items from airtable"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <h1>Hello World!</h1>
        {listings.map((l: Listing) => (
          <p key={l.id}>{l.name}</p>
        ))}
      </main>
    </div>
  );
};

interface Listing {
  id: string;
  price: number;
  name: string;
  inventory: number;
  category: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const resp = await fetch(
    'https://api.airtable.com/v0/apprQiLF1TQzIClHl/Listings',
    {
      headers: new Headers({
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
      }),
    }
  );

  const rawRecords = await resp.json();
  const records: Listing[] = rawRecords.records.map(
    (r: {
      id: string;
      fields: Record<string, string>;
      createdTime: string;
    }): Listing => ({
      id: r.id,
      price: parseInt(r.fields.Price),
      name: r.fields.Name,
      inventory: parseInt(r.fields.Inventory),
      category: r.fields.Category,
    })
  );
  return {
    props: {
      listings: records,
    },
  };
};

export default Listings;
