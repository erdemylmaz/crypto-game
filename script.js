class Coins {
    coins = [
        {
            name: 'Shiba-Inu',
            symbol: 'SHIB/USDT',
            imageLink: '',
            price: 0.000001652,
            amount: 100000000,
            isOnFavorites: false,
            category: 'shit',
            isUserHave: true,
        },
        {
            name: 'Doge-Coin',
            symbol: 'DOGE/USDT',
            imageLink: '',
            price: 0.62346,
            amount: 1500,
            isOnFavorites: false,
            category: 'shit',
            isUserHave: true,
        },
        {
            name: 'Bitcoin',
            symbol: 'BTC/USDT',
            imageLink: '',
            price: 58756,
            amount: 0,
            isOnFavorites: false,
            category: 'best',
            isUserHave: false,
        },
        {
            name: 'Ripple',
            symbol: 'XRP/USDT',
            imageLink: '',
            price: 1.44,
            amount: 0,
            isOnFavorites: false,
            category: 'new',
            isUserHave: false,
        },
        {
            name: 'Tron',
            symbol: 'TRX/USDT',
            imageLink: '',
            price: 0.1274,
            amount: 0,
            isOnFavorites: false,
            category: 'new',
            isUserHave: false,
        },
        {
            name: 'Ethereum',
            symbol: 'ETH/USDT',
            imageLink: '',
            price: 3333,
            amount: 0,
            isOnFavorites: false,
            category: "best",
            isUserHave: false,
        },
        {
            name: 'Lite-Coin',
            symbol: 'LTC/USDT',
            imageLink: '',
            price: 328,
            amount: 0,
            isOnFavorites: false,
            category: "best",
            isUserHave: false,
        },
        {
            name: 'Polkadot',
            symbol: 'DOT/USDT',
            imageLink: '',
            price: 37.20,
            amount: 0,
            isOnFavorites: false,
            category: "new",
            isUserHave: false,
        },
        {
            name: 'Fetch-ai',
            symbol: 'FET/USDT',
            imageLink: '',
            price: 0.57,
            amount: 0,
            isOnFavorites: false,
            category: "new",
            isUserHave: false,
        },
        {
            name: 'Tether-USD',
            symbol: 'USDT/USD',
            imageLink: '',
            price: 1,
            amount: 100,
            isOnFavorites: false,
            category: "best",
            isUserHave: true,
        },
    ];
}

const coins = new Coins();

if(localStorage.getItem('coins')) {
    coins.coins = JSON.parse(localStorage.getItem('coins'));
}

localStorage.setItem('coins', JSON.stringify(coins.coins));

const coinTable = document.querySelector('.coin-table');

coins.coins.map((coin) => {
    let tr = document.createElement('tr');
    tr.classList.add('coin');
    tr.classList.add(`${coin.category}`);

    coin.isIncreasing ? tr.classList.add('increasing') : tr.classList.add('decreasing');

    tr.innerHTML = `
        <td class="symbol-td coin-td">${coin.symbol}</td>
        <td class="name-td coin-td">${coin.name}</td>
        <td class="price-td coin-td ${coin.name}-price">$ ${coin.price.toFixed(9)}</td>
        <td class="buy-coin-td coin-td"><a href="" class="buy-coin-btn">Buy / Sell</a></td>
        <td class="add-to-fav-td coin-td"><div class="add-to-fav-btn"><i class="${coin.isOnFavorites ? "fas fa-heart active" : "far fa-heart"} add-to-fav"></i></div></td>
    `;

    coinTable.appendChild(tr);
});

// change coin's price
const btcPriceDOM = document.querySelector('.Bitcoin-price');
const dogePriceDOM = document.querySelector('.Doge-Coin-price');
const shibPriceDOM = document.querySelector('.Shiba-Inu-price');
const ripplePriceDOM = document.querySelector('.Ripple-price');
const tronPriceDOM = document.querySelector('.Tron-price');
const litePriceDOM = document.querySelector('.Lite-Coin-price');
const ethereumPriceDOM = document.querySelector('.Ethereum-price');
const dotPriceDOM = document.querySelector('.Polkadot-price');
const fetchPriceDOM = document.querySelector('.Fetch-ai-price');
const tetherPriceDOM = document.querySelector('.Tether-USD-price');

setInterval(() => {
    coins.coins.forEach((coin) => {
        let coinsLastPrice = coin.price;

        if(coin.name == 'Bitcoin') {
            coin.price += Math.floor((Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.5) / 100)));
            btcPriceDOM.textContent = `$ ${coin.price}`;

            if(coin.price > coinsLastPrice) {
                btcPriceDOM.classList.remove('decreasing');
                btcPriceDOM.classList.add('increasing');
            } else {
                btcPriceDOM.classList.remove('increasing');
                btcPriceDOM.classList.add('decreasing');
            }

            btcPriceDOM.parentNode.classList.remove('decreasing');
            btcPriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Doge-Coin") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            dogePriceDOM.textContent = `$ ${coin.price.toFixed(5)}`;

            if(coin.price > coinsLastPrice) {
                dogePriceDOM.classList.remove('decreasing');
                dogePriceDOM.classList.add('increasing');
            } else {
                dogePriceDOM.classList.remove('increasing');
                dogePriceDOM.classList.add('decreasing');
            
            }

            dogePriceDOM.parentNode.classList.remove('decreasing');
            dogePriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Shiba-Inu") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            shibPriceDOM.textContent = `$ ${coin.price.toFixed(9)}`;

            if(coin.price > coinsLastPrice) {
                shibPriceDOM.classList.remove('decreasing');
                shibPriceDOM.classList.add('increasing');
            } else {
                shibPriceDOM.classList.remove('increasing');
                shibPriceDOM.classList.add('decreasing');
            }

            shibPriceDOM.parentNode.classList.remove('decreasing');
            shibPriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Ripple") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            ripplePriceDOM.textContent = `$ ${coin.price.toFixed(3)}`;

            if(coin.price > coinsLastPrice) {
                ripplePriceDOM.classList.remove('decreasing');
                ripplePriceDOM.classList.add('increasing');
            } else {
                ripplePriceDOM.classList.remove('increasing');
                ripplePriceDOM.classList.add('decreasing');
            }

            ripplePriceDOM.parentNode.classList.remove('decreasing');
            ripplePriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Tron") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            tronPriceDOM.textContent = `$ ${coin.price.toFixed(4)}`;

            if(coin.price > coinsLastPrice) {
                tronPriceDOM.classList.remove('decreasing');
                tronPriceDOM.classList.add('increasing');
            } else {
                tronPriceDOM.classList.remove('increasing');
                tronPriceDOM.classList.add('decreasing');
            }

            tronPriceDOM.parentNode.classList.remove('decreasing');
            tronPriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Ethereum") {
            coin.price += Math.floor((Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100)));
            ethereumPriceDOM.textContent = `$ ${coin.price}`;

            if(coin.price > coinsLastPrice) {
                ethereumPriceDOM.classList.remove('decreasing');
                ethereumPriceDOM.classList.add('increasing');
            } else {
                ethereumPriceDOM.classList.remove('increasing');
                ethereumPriceDOM.classList.add('decreasing');
            }

            ethereumPriceDOM.parentNode.classList.remove('decreasing');
            ethereumPriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Lite-Coin") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            litePriceDOM.textContent = `$ ${coin.price.toFixed(2)}`;

            if(coin.price > coinsLastPrice) {
                litePriceDOM.classList.remove('decreasing');
                litePriceDOM.classList.add('increasing');
            } else {
                litePriceDOM.classList.remove('increasing');
                litePriceDOM.classList.add('decreasing');
            }

            litePriceDOM.parentNode.classList.remove('decreasing');
            litePriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Polkadot") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            dotPriceDOM.textContent = `$ ${coin.price.toFixed(2)}`;

            if(coin.price > coinsLastPrice) {
                dotPriceDOM.classList.remove('decreasing');
                dotPriceDOM.classList.add('increasing');
            } else {
                dotPriceDOM.classList.remove('increasing');
                dotPriceDOM.classList.add('decreasing');
            }

            dotPriceDOM.parentNode.classList.remove('decreasing');
            dotPriceDOM.parentNode.classList.remove('increasing');

        } else if (coin.name == "Fetch-ai") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            fetchPriceDOM.textContent = `$ ${coin.price.toFixed(3)}`;

            if(coin.price > coinsLastPrice) {
                fetchPriceDOM.classList.remove('decreasing');
                fetchPriceDOM.classList.add('increasing');
            } else {
                fetchPriceDOM.classList.remove('increasing');
                fetchPriceDOM.classList.add('decreasing');
            }

            fetchPriceDOM.parentNode.classList.remove('decreasing');
            fetchPriceDOM.parentNode.classList.remove('increasing');
        } else if(coin.name == "Tether-USD") {
            tetherPriceDOM.textContent = "$ 1.00";
        }

        localStorage.setItem('coins', JSON.stringify(coins.coins));
    });
}, 1000);

// navbar
const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('.navbar-btn');
const body = document.querySelector('body');

showNavbar = () => {
    if(navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        body.style.marginLeft = "0%";
        body.style.transition = "750ms";
        navbar.style.transition = "750ms";
    } else {
        navbar.classList.add('show');
        body.style.marginLeft = "-10%";
        body.style.transition = "750ms";
        navbar.style.transition = "750ms";
    }
}

navbarBtn.addEventListener("click", showNavbar);
document.addEventListener('keyup', (key) => {
    if(key.keyCode == 27) {
        showNavbar();
    }
})

// change theme
const changeBtn = document.querySelector('.change-btn');
const logoImg = document.querySelector('.logo-img');

let mode = 'bright';

changeTheme = () => {
    if(mode == 'bright') {
        mode = 'dark';
        body.classList.remove('bright')
        logoImg.src = "./images/Crypto.png";
    } else {
        mode = 'bright';
        body.classList.add('bright')
        logoImg.src = "./images/Crypto-light.png";
    }

    localStorage.setItem('cryptoTheme', mode);
}

changeBtn.addEventListener('click', changeTheme);

if(localStorage.getItem('cryptoTheme')) {
    if(localStorage.getItem('cryptoTheme') == 'bright') {
        mode = 'bright';
        body.classList.add('bright')
        logoImg.src = "./images/Crypto-light.png";

    }

    if(localStorage.getItem('cryptoTheme') == "dark") {
        mode = 'bright';
        body.classList.remove('bright')
        logoImg.src = "./images/Crypto.png";

    }
}

// add to fav
const addToFavBtns = document.querySelectorAll('.add-to-fav');

addToFav = (e) => {
    const coinsName = e.target.parentNode.parentNode.parentNode.firstElementChild.nextElementSibling.textContent;

    if(e.target.classList.contains('active')) {
        e.target.className = "far fa-heart";
        e.target.parentNode.style.color = "#4a4a4a";
        e.target.classList.remove('active');
 
       coins.coins.map((coin) => {
            if(coin.name == coinsName) {
                 coin.isOnFavorites = false;
             }
        });

    } else {
        e.target.className = "fas fa-heart";
        e.target.parentNode.style.color = "red";
        e.target.classList.add('active');

         coins.coins.map((coin) => {
             if(coin.name == coinsName) {
                 coin.isOnFavorites = true;
             }
         });
    }

    localStorage.setItem('coins', coins.coins);

}

addToFavBtns.forEach((btn) => {
    btn.addEventListener('click', addToFav);
});

localStorage.removeItem('coins');

// reset game
const resetBtn = document.querySelector('.restart-btn');

resetGame = () => {
    if(confirm('Are you sure about reset game? (reload page after reset)')) {
        coinTable.innerHTML = "";
        showNavbar();

        coins.coins = [
            {
                name: 'Shiba-Inu',
                symbol: 'SHIB/USDT',
                imageLink: '',
                price: 0.00000165,
                isOnFavorites: false,
            },
            {
                name: 'Doge-Coin',
                symbol: 'DOGE/USDT',
                imageLink: '',
                price: 0.53495,
                isOnFavorites: false,
            },
            {
                name: 'Bitcoin',
                symbol: 'BTC/USDT',
                imageLink: '',
                price: 58756,
                isOnFavorites: false,
            },
            {
                name: 'Ripple',
                symbol: 'XRP/USDT',
                imageLink: '',
                price: 1.44,
                isOnFavorites: false,
            },
            {
                name: 'Tron',
                symbol: 'TRXUSDT',
                imageLink: '',
                price: 0.1274,
                isOnFavorites: false,
            },
            {
                name: 'Ethereum',
                symbol: 'ETHUSDT',
                imageLink: '',
                price: 3333,
                isOnFavorites: false,
            },
            {
                name: 'Lite-Coin',
                symbol: 'LTCUSDT',
                imageLink: '',
                price: 328,
                isOnFavorites: false,
            },
            {
                name: 'Polkadot',
                symbol: 'DOTUSDT',
                imageLink: '',
                price: 37.20,
                isOnFavorites: false,
            },
            {
                name: 'Fetch-ai',
                symbol: 'FETUSDT',
                imageLink: '',
                price: 0.57,
                isOnFavorites: false,
            }
        ];

        
        coins.coins.map((coin) => {
            let tr = document.createElement('tr');
            tr.classList.add('coin');

            coin.isIncreasing ? tr.classList.add('increasing') : tr.classList.add('decreasing');

            tr.innerHTML = `
                <td class="symbol-td coin-td">${coin.symbol}</td>
                <td class="name-td coin-td">${coin.name}</td>
                <td class="price-td coin-td ${coin.name}-price">$ ${coin.price}</td>
                <td class="buy-coin-td coin-td"><a href="" class="buy-coin-btn">Buy / Sell</a></td>
                <td class="add-to-fav-td coin-td"><div class="add-to-fav-btn"><i class="${coin.isOnFavorites ? "fas fa-heart active" : "far fa-heart"} add-to-fav"></i></div></td>
            `;

            coinTable.appendChild(tr);
        });

        localStorage.setItem('coins', JSON.stringify(coins.coins));
    }
}

resetBtn.addEventListener('click', resetGame);

// category
const allCoins = document.querySelectorAll('.coin');
const allCategory = document.querySelector('.all-category');
const newCategory = document.querySelector('.new-category');
const bestCategory = document.querySelector('.best-category');
const shitCategory = document.querySelector('.shit-category');
const favCategory = document.querySelector('.fav-category');

// new category
showNewCoins = (e) => {
    Array.from(allCoins).forEach((coin) => {
        for(let x = 0; x < coins.coins.length; x++) {
            if(coin.firstElementChild.nextElementSibling.textContent == coins.coins[x].name) {
                if(coins.coins[x].category.toLowerCase() == "new") {
                    coin.style.display = "table-row";
                } else {
                    coin.style.display = "none";
                }
            }
        }
    });
}

newCategory.addEventListener('click', showNewCoins);

// best category
showBestCoins = (e) => {
    Array.from(allCoins).forEach((coin) => {
        for(let x = 0; x < coins.coins.length; x++) {
            if(coin.firstElementChild.nextElementSibling.textContent == coins.coins[x].name) {
                if(coins.coins[x].category.toLowerCase() == "best") {
                    coin.style.display = "table-row";
                } else {
                    coin.style.display = "none";
                }
            }
        }
    });
}

bestCategory.addEventListener('click', showBestCoins);

// shit category
showShitCoins = (e) => {
    Array.from(allCoins).forEach((coin) => {
        for(let x = 0; x < coins.coins.length; x++) {
            if(coin.firstElementChild.nextElementSibling.textContent == coins.coins[x].name) {
                if(coins.coins[x].category.toLowerCase() == "shit") {
                    coin.style.display = "table-row";
                } else {
                    coin.style.display = "none";
                }
            }
        }
    });
}

shitCategory.addEventListener('click', showShitCoins);

// all category
showAllCoins = (e) => {
    Array.from(allCoins).forEach((coin) => {
        coin.style.display = "table-row";
    });
}

allCategory.addEventListener('click', showAllCoins);

// show favorites

showFavorites = (e) => {
    Array.from(allCoins).forEach((coin) => {
        for(let x = 0; x < coins.coins.length; x++) {
            if(coin.firstElementChild.nextElementSibling.textContent == coins.coins[x].name) {
                if(coins.coins[x].isOnFavorites) {
                    coin.style.display = "table-row";
                } else {
                    coin.style.display = "none";
                }
            }
        }
    });
}

favCategory.addEventListener('click', showFavorites);