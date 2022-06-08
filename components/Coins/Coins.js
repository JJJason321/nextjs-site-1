import React, { useState } from "react";
import styles from "./Coins.module.css";

const Coins = (props) => {
  const priceChange = props.priceChange;

  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img
            src={props.image}
            alt={props.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_h1}>{props.name}</h1>
          <p className={styles.coin_symbol}>{props.symbol}</p>
        </div>
        <div className={styles.coin_data}>
          <p className={styles.coin_price}>${props.price}</p>
          <p className={styles.coin_volume}>${props.volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className={(styles.coin_percent, styles.red)}>
              {props.priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className={(styles.coin_percent, styles.green)}>
              {props.priceChange.toFixed(2)}%
            </p>
          )}

          <p className={styles.coin_marketcap}>
            Mkt Cap: ${props.marketecap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
