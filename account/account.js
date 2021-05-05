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
        logoImg.src = "../images/Crypto.png";
    } else {
        mode = 'bright';
        body.classList.add('bright')
        logoImg.src = "../images/Crypto-light.png";
    }

    localStorage.setItem('cryptoTheme', mode);
}

changeBtn.addEventListener('click', changeTheme);

if(localStorage.getItem('cryptoTheme')) {
    if(localStorage.getItem('cryptoTheme') == 'bright') {
        mode = 'bright';
        body.classList.add('bright')
        logoImg.src = "../images/Crypto-light.png";

    }

    if(localStorage.getItem('cryptoTheme') == "dark") {
        mode = 'bright';
        body.classList.remove('bright')
        logoImg.src = "../images/Crypto.png";
    }
}

// portfolio
class Portfolio {
    currentCoins = [];

    totalMoney = 0;
}

const portfolio = new Portfolio();

if(localStorage.getItem('coins')) {
    portfolio.currentCoins = JSON.parse(localStorage.getItem('coins'));
}

const coinsTable = document.querySelector('.coins');

portfolio.currentCoins.map((coin) => {
    if(coin.isUserHave) {
        let coinsTotalPrice = coin.price * coin.amount;

        let tr = document.createElement('tr');
        tr.classList.add('coin');

        tr.innerHTML = `
            <td class="coin-symbol">${coin.symbol}</td>
            <td class="coin-name">${coin.name}</td>
            <td class="coin-amount">${coin.amount}</td>
            <td class="coin-total-price ${coin.name}-total">$ ${(coinsTotalPrice).toFixed(2)}</td>
            <td class="coin-buy-sell"><div class="buy-btn">Buy / Sell</div></td>
        `;

        coinsTable.appendChild(tr);
    }

});

// update price
setInterval(() => {
    portfolio.totalMoney = 100;

    portfolio.currentCoins.forEach((coin) => {
        if(coin.name == 'Bitcoin' && coin.isUserHave) {
            coin.price += Math.floor((Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.5) / 100)));
            portfolio.totalMoney += coin.price * coin.amount;

            let btcTotalDOM = document.querySelector('.Bitcoin-total')

            btcTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Doge-Coin" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let dogeTotalDOM = document.querySelector('.Doge-Coin-total')

            dogeTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

       } else if (coin.name == "Shiba-Inu" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let shibTotalDOM = document.querySelector('.Shiba-Inu-total')

            shibTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Ripple" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let rippleTotalDOM = document.querySelector('.Ripple-total')

            rippleTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Tron" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let tronTotalDOM = document.querySelector('.Tron-total')

            tronTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Ethereum" && coin.isUserHave) {
            coin.price += Math.floor((Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100)));
            portfolio.totalMoney += coin.price * coin.amount;

            let ethereumTotalDOM = document.querySelector('.Ethereum-total')

            ethereumTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

       } else if (coin.name == "Lite-Coin" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let liteTotalDOM = document.querySelector('.Lite-Coin-total')

            liteTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Polkadot" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let dotTotalDOM = document.querySelector('.Polkadot-total')

            dotTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;

        } else if (coin.name == "Fetch-ai" && coin.isUserHave) {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            portfolio.totalMoney += coin.price * coin.amount;

            let fetchTotalDOM = document.querySelector('.Fetch-ai-total')

            fetchTotalDOM.textContent = `$ ${(coin.price * coin.amount).toFixed(2)}`;
        }

    const totalMoneyDOM = document.querySelector('.total-money');

    totalMoneyDOM.textContent = `$ ${portfolio.totalMoney.toFixed(2)}`;

    localStorage.setItem('coins', JSON.stringify(portfolio.currentCoins));

    });
}, 1000);
