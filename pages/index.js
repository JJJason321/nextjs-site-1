import Head from "next/head";

import SearchBar from "../components/SearchBar/SearchBar";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" />
        <CoinList coinsData={props.coinsData} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );
  const data = await res.json();

  return {
    props: {
      coinsData: data,
    },
  };
};
