import Coins from "./Coins/Coins";

const CoinList = (props) => {


  return (
    <>
      {props.coinsData.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketecap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          ></Coins>
        );
      })}
    </>
  );
};

export default CoinList;
