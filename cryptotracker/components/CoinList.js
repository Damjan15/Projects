import Coins from "./Coins/Coins";

const CoinList = ({ filteredCoins }) => {
    return (
        <>
            { filteredCoins.map(coin => (
                <Coins key={coin.id} id={coin.id} name={coin.name} price={coin.current_price} symbol={coin.symbol} marketcap={coin.market_cap} volume={coin.total_volume} image={coin.image} priceChange={coin.price_change_percentage_24h}  />
            ))}
        </>
    )
}

export default CoinList;
