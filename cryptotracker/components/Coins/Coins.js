import styles from "./Coins.module.css";
import Link from "next/link";

const Coins = ({
  id,
  name,
  price,
  volume,
  image,
  symbol,
  priceChange,
  marketcap,
}) => {
  return (
    <Link href="/coin[id]" as={`/coin/${id}`}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.coin}>
          <img src={image} alt={name} className={styles.img} />
          <h1 className={styles.h1}>{name}</h1>
          <p className={styles.symbol}>{symbol}</p>
        </div>

        <div className={styles.data}>
          <p className={styles.price}>${price}</p>
          <p className={styles.volume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={styles.percent_red}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={styles.percent_green}>{priceChange.toFixed(2)}%</p>
          )}

          <p className={styles.marketcap}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Coins;
