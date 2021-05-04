class Coins {
    coins = [
        {
            name: 'Shiba-Inu',
            symbol: 'SHIB/USDT',
            imageLink: '',
            price: 0.00000165,
            isIncreasing: true,
            isOnFavorites: false,
        },
        {
            name: 'Doge-Coin',
            symbol: 'DOGE/USDT',
            imageLink: '',
            price: 0.53495,
            isIncreasing: true,
            isOnFavorites: false,
        },
        {
            name: 'Bitcoin',
            symbol: 'BTC.USDT',
            imageLink: '',
            price: 58756,
            isIncreasing: false,
            isOnFavorites: false,
        }
    ];
}

const coins = new Coins();

const coinTable = document.querySelector('.coin-table');

coins.coins.map((coin) => {
    let tr = document.createElement('tr');
    tr.classList.add('coin');

    coin.isIncreasing ? tr.classList.add('increasing') : tr.classList.add('decreasing');

    tr.innerHTML = `
        <td class="symbol-td coin-td">${coin.symbol}</td>
        <td class="name-td coin-td">${coin.name}</td>
        <td class="price-td coin-td ${coin.name}-price">$ ${coin.price}</td>
        <td class="buy-coin-td coin-td"><a href="" class="buy-coin-btn">Buy / Sell</a></td>
        <td class="add-to-fav-td coin-td"><div class="add-to-fav-btn">Add to Favorites</div></td>
    `;

    coinTable.appendChild(tr);
});

// change coin's price
const btcPriceDOM = document.querySelector('.Bitcoin-price');
const dogePriceDOM = document.querySelector('.Doge-Coin-price');
const shibPriceDOM = document.querySelector('.Shiba-Inu-price');

setInterval(() => {
    coins.coins.forEach((coin) => {
        let coinsLastPrice = coin.price;
        
        if(coin.name == 'Bitcoin') {
            coin.price += Math.floor((Math.random() * 300) - (Math.random() * 300));
            btcPriceDOM.textContent = `$ ${coin.price}`;

            if(coin.price > coinsLastPrice) {
                btcPriceDOM.parentNode.classList.remove('decreasing');
                btcPriceDOM.parentNode.classList.add('increasing');
            } else {
                btcPriceDOM.parentNode.classList.remove('increasing');
                btcPriceDOM.parentNode.classList.add('decreasing');
            }
        } else if (coin.name == "Doge-Coin") {
            coin.price += (Math.random() * 0.005) - (Math.random() * 0.005);
            dogePriceDOM.textContent = `$ ${coin.price.toFixed(5)}`;

            if(coin.price > coinsLastPrice) {
                dogePriceDOM.parentNode.classList.remove('decreasing');
                dogePriceDOM.parentNode.classList.add('increasing');
            } else {
                dogePriceDOM.parentNode.classList.remove('increasing');
                dogePriceDOM.parentNode.classList.add('decreasing');
            
            }
        } else if (coin.name == "Shiba-Inu") {
            coin.price += (Math.random() * 0.0000001) - (Math.random() * 0.0000001);
            shibPriceDOM.textContent = `$ ${coin.price.toFixed(9)}`;

            if(coin.price > coinsLastPrice) {
                shibPriceDOM.parentNode.classList.remove('decreasing');
                shibPriceDOM.parentNode.classList.add('increasing');
            } else {
                shibPriceDOM.parentNode.classList.remove('increasing');
                shibPriceDOM.parentNode.classList.add('decreasing');
            }
        }
    });
}, 1000);