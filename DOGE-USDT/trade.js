// navbar
const navbar = document.querySelector('.navbar');
const navbarBtn = document.querySelector('.navbar-btn');
const body = document.querySelector('body');

showNavbar = () => {
    if(navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        body.style.marginLeft = "0%";
        body.style.transition = "1s";
        navbar.style.transition = "1s";
    } else {
        navbar.classList.add('show');
        body.style.marginLeft = "-10%";
        body.style.transition = "1s";
        navbar.style.transition = "1s";
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

class Trade {
    coins = [];
}

const trade = new Trade();

if(localStorage.getItem('coins')) {
    trade.coins = JSON.parse(localStorage.getItem('coins'));
}

const dogePriceDOM = document.querySelector('.coin-price');

setInterval(() => {
    trade.coins.map((coin) => {
        let coinsLastPrice = coin.price

        if(coin.symbol == "DOGE-USDT") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            dogePriceDOM.textContent = `$ ${coin.price.toFixed(5)}`;

            if(coin.price > coinsLastPrice) {
                dogePriceDOM.classList.remove('decreasing');
                dogePriceDOM.classList.add('increasing');
            } else {
                dogePriceDOM.classList.remove('increasing');
                dogePriceDOM.classList.add('decreasing');
            }

        }
    })
}, 1000)

const buyAmountInput = document.querySelector('.amount-input-buy');
const buyTotalPriceInput = document.querySelector('.total-price-input-buy');
const buyForm = document.querySelector('.trade-form-buy');
const moneyDOM = document.querySelector('.current-money');

updateTotalPrice = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "DOGE-USDT") {
            buyTotalPriceInput.value = (e.target.value * coin.price).toFixed(2);
        }
    })
}

buyAmountInput.addEventListener('keyup', updateTotalPrice);

updateAmount = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "DOGE-USDT") {
            buyAmountInput.value = (e.target.value / coin.price).toFixed();
        }
    })
}

buyTotalPriceInput.addEventListener('keyup', updateAmount);

let money = parseInt(localStorage.getItem('cryptoMoney'));

moneyDOM.textContent = `${money} USDT`;

buy = (e) => {
    e.preventDefault();

    let amount = buyAmountInput.value;
    let price = buyTotalPriceInput.value;

    if(money >= price) {
        money -= price;
    
        trade.coins.map((coin) => {
            if (coin.symbol == "DOGE-USDT") {
                coin.amount = JSON.parse(coin.amount) + JSON.parse(amount);
            }
        });
    } else {
        alert('Not enough money');
    }

    moneyDOM.textContent = `${money.toFixed(2)} USDT`;

    console.log(trade.coins[1].amount);

    localStorage.setItem('cryptoMoney', money);
    localStorage.setItem('coins', JSON.stringify(trade.coins));
}

buyForm.addEventListener('submit', buy);