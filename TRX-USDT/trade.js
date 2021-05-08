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

// trade
class Trade {
    coins = [];

    tradeLogBuy = [];

    tradeLogSell = [];
}

const trade = new Trade();
const logTableBuy = document.querySelector('.buy-log-tbody'); 
const logTableSell = document.querySelector('.sell-log-tbody');

if(localStorage.getItem('coins')) {
    trade.coins = JSON.parse(localStorage.getItem('coins'));
}

if(localStorage.getItem('tronTradeLogBuy')) {
    trade.tradeLogBuy = JSON.parse(localStorage.getItem('tronTradeLogBuy'));
}

if(localStorage.getItem('tronTradeLogSell')) {
    trade.tradeLogSell = JSON.parse(localStorage.getItem('tronTradeLogSell'));
}

trade.tradeLogBuy.map((log) => {
    let tr = document.createElement('tr');
    tr.classList.add('coin');

    tr.innerHTML = `
        <td class="log-thead-td log-date">${log.date}</td>
        <td class="log-thead-td log-symbol">${log.symbol}</td>
        <td class="log-thead-td log-price">${log.price}</td>
        <td class="log-thead-td log-amount">${log.amount}</td>
        <td class="log-thead-td log-total-price">${log.totalPrice} USDT</td>
    `;

    logTableBuy.appendChild(tr);
})

trade.tradeLogSell.map((log) => { 
    let tr = document.createElement('tr');
    tr.classList.add('coin');

    tr.innerHTML = `
        <td class="log-thead-td log-date">${log.date}</td>
        <td class="log-thead-td log-symbol">${log.symbol}</td>
        <td class="log-thead-td log-price">${log.price}</td>
        <td class="log-thead-td log-amount">${log.amount}</td>
        <td class="log-thead-td log-total-price">${log.totalPrice} USDT</td>
    `;

    logTableSell.appendChild(tr);
})

const tronPriceDOM = document.querySelector('.coin-price');

setInterval(() => {
    trade.coins.map((coin) => {
        let coinsLastPrice = coin.price

        if(coin.symbol == "TRX-USDT") {
            coin.price += (Math.random() * ((coin.price * 0.5) / 100)) - (Math.random() * ((coin.price * 0.49) / 100));
            tronPriceDOM.textContent = `$ ${coin.price.toFixed(5)}`;

            if(coin.price > coinsLastPrice) {
                tronPriceDOM.classList.remove('decreasing');
                tronPriceDOM.classList.add('increasing');
            } else {
                tronPriceDOM.classList.remove('increasing');
                tronPriceDOM.classList.add('decreasing');
            }

        }
    })

    localStorage.setItem('coins', JSON.stringify(trade.coins));
}, 1000);

setInterval(() => {
    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            buyAmountInput.value = (buyTotalPriceInput.value / coin.price).toFixed(2);
            sellTotalPriceInput.value = (sellAmountInput.value * coin.price).toFixed(2);
        }
    })

    localStorage.setItem('coins', JSON.stringify(trade.coins));
}, 10000);



const buyAmountInput = document.querySelector('.amount-input-buy');
const buyTotalPriceInput = document.querySelector('.total-price-input-buy');

const sellAmountInput = document.querySelector('.amount-input-sell');
const sellTotalPriceInput = document.querySelector('.total-price-input-sell');

const buyPercentages = document.querySelectorAll('.buy-p');
const sellPercentages = document.querySelectorAll('.sell-p');

buyPercentages.forEach((p) => {
    let percentage = "";

    if(p.textContent != "0%") {
        percentage += p.textContent[0];
        percentage += p.textContent[1];

        if(p.textContent == "100%") {
            percentage += p.textContent[2];
        }
    } else if(p.textContent == "0%") {
        percentage += p.textContent[0];
    }

    p.addEventListener('click', (e) => {
        buyPercentages.forEach((percent) => {
            percent.classList.remove('selectedPercentageBuy');
        });

        if(p.textContent.indexOf(percentage) != -1) {
            e.target.classList.contains('selectedPercentageBuy') ? e.target.classList.remove('selectedPercentageBuy') : e.target.classList.add('selectedPercentageBuy'); 
        }

        trade.coins.map((coin) => {
            if(coin.symbol == "TRX-USDT") {
                let money = JSON.parse(localStorage.getItem('cryptoMoney'));

                buyAmountInput.value = (((money / coin.price) * percentage) / 100).toFixed(2);
                buyTotalPriceInput.value = ((money * percentage) / 100).toFixed(2);
            }
        })
    })
});

sellPercentages.forEach((p) => {
    let percentage = "";

    if(p.textContent != "0%") {
        percentage += p.textContent[0];
        percentage += p.textContent[1];

        if(p.textContent == "100%") {
            percentage += p.textContent[2];
        }
    } else if(p.textContent == "0%") {
        percentage += p.textContent[0];
    }

    p.addEventListener('click', (e) => {
        sellPercentages.forEach((percent) => {
            percent.classList.remove('selectedPercentageSell');
        });

        if(p.textContent.indexOf(percentage) != -1) {
            e.target.classList.contains('selectedPercentageSell') ? e.target.classList.remove('selectedPercentageSell') : e.target.classList.add('selectedPercentageSell'); 
        }

        trade.coins.map((coin) => {
            if(coin.symbol == "TRX-USDT") {
                sellAmountInput.value = ((coin.amount * percentage) / 100).toFixed(2);
                sellTotalPriceInput.value = (sellAmountInput.value * coin.price).toFixed(2);
            }
        })
    })
});

const buyForm = document.querySelector('.trade-form-buy');
const sellForm = document.querySelector('.trade-form-sell');
const moneyDOM = document.querySelector('.current-money');

updateTotalPrice = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            buyTotalPriceInput.value = (e.target.value * coin.price).toFixed(2);
        }
    })

    console.log(trade.coins);
}
updateTotalPriceSell = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            sellTotalPriceInput.value = (e.target.value * coin.price).toFixed(2);
        }
    })
}

buyAmountInput.addEventListener('keyup', updateTotalPrice);
sellAmountInput.addEventListener('keyup', updateTotalPriceSell);

updateAmount = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            buyAmountInput.value = (e.target.value / coin.price).toFixed(2);
        }
    })
}

updateAmountSell = (e) => {
    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            sellAmountInput.value = (e.target.value / coin.price).toFixed(2);
        }
    })
}

buyTotalPriceInput.addEventListener('keyup', updateAmount);
sellTotalPriceInput.addEventListener('keyup', updateAmountSell);

let money = parseInt(localStorage.getItem('cryptoMoney'));
moneyDOM.textContent = `${money.toFixed(2)} USDT`;

const currentTronDOM = document.querySelector('.current-coin');

trade.coins.map((coin) => {
    if(coin.symbol == "TRX-USDT") {
        currentTronDOM.innerHTML = `${coin.amount.toFixed(2)} TRX`;
        tronPriceDOM.innerHTML = `$ ${coin.price.toFixed(5)}`;
    }
})

addExtraZero = (x) => {
    return x < 10 ? "0" + x : x;
}

buy = (e) => {
    e.preventDefault();

    let amount = buyAmountInput.value;
    let price = buyTotalPriceInput.value;

    let coinPrice = "";

    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            coinPrice = coin.price;

            amount = (price / coinPrice).toFixed(2);
        }
    });

    let d = new Date();

    let h = addExtraZero(d.getHours());
    let m = addExtraZero(d.getMinutes());

    let day = addExtraZero(d.getDate());
    let month = addExtraZero(d.getMonth() + 1);
    let year = addExtraZero(d.getFullYear());

    let date = `${day}.${month}.${year} ${h}:${m}`;

    if(money >= price) {
        money -= price;
    
        trade.coins.map((coin) => {
            if (coin.symbol == "TRX-USDT") {
                coin.amount = JSON.parse(coin.amount) + JSON.parse(amount);
                coin.isUserHave = true;

            trade.tradeLogBuy.unshift({
                price: coin.price.toFixed(5),
                symbol: coin.symbol,
                totalPrice: price,
                amount: amount,
                date: date,
            });

            let tr = document.createElement('tr');
            tr.classList.add('coin');

            tr.innerHTML = `
                <td class="log-thead-td log-date">${date}</td>
                <td class="log-thead-td log-symbol">${coin.symbol}</td>
                <td class="log-thead-td log-price">${coin.price.toFixed(5)}</td>
                <td class="log-thead-td log-amount">${amount}</td>
                <td class="log-thead-td log-total-price">${price} USDT</td>
            `;

            currentTronDOM.innerHTML = `${coin.amount.toFixed(2)} TRX`;

            logTableBuy.prepend(tr);

            localStorage.setItem('tronTradeLogBuy', JSON.stringify(trade.tradeLogBuy));
        }
        });
    } else {
        alert('Not enough money');
    }

    moneyDOM.textContent = `${money.toFixed(2)} USDT`;

    buyAmountInput.value = 0; 
    buyTotalPriceInput.value = ""; 

    localStorage.setItem('cryptoMoney', money);
    localStorage.setItem('coins', JSON.stringify(trade.coins));
}

sell = (e) => {
    e.preventDefault();

    let amount = sellAmountInput.value;
    let price = sellTotalPriceInput.value;

    let coinPrice = "";

    trade.coins.map((coin) => {
        if(coin.symbol == "TRX-USDT") {
            coinPrice = coin.price;

            price = (amount * coinPrice).toFixed(6);
        }
    });

    let d = new Date();

    let h = addExtraZero(d.getHours());
    let m = addExtraZero(d.getMinutes());

    let day = addExtraZero(d.getDate());
    let month = addExtraZero(d.getMonth() + 1);
    let year = addExtraZero(d.getFullYear());

    let date = `${day}.${month}.${year} ${h}:${m}`;

    trade.coins.map((coin) => {
        if (coin.symbol == "TRX-USDT") {
            if(parseInt(amount) <= coin.amount) {
                coin.amount = JSON.parse(coin.amount) - JSON.parse(amount);
                money = parseInt(money) + parseInt(price);

                if(coin.amount < 1) {
                    coin.isUserHave = false;
                }

                trade.tradeLogSell.unshift({
                    price: coin.price.toFixed(6),
                    symbol: coin.symbol,
                    totalPrice: price,
                    amount: amount,
                    date: date,
                });

                let tr = document.createElement('tr');
                tr.classList.add('coin');

                tr.innerHTML = `
                    <td class="log-thead-td log-date">${date}</td>
                    <td class="log-thead-td log-symbol">${coin.symbol}</td>
                    <td class="log-thead-td log-price">${coin.price.toFixed(6)}</td>
                    <td class="log-thead-td log-amount">${amount}</td>
                    <td class="log-thead-td log-total-price">${price} USDT</td>
                `;

                logTableSell.prepend(tr);

                localStorage.setItem('tronTradeLogSell', JSON.stringify(trade.tradeLogSell));

                currentTronDOM.textContent = `${coin.amount.toFixed(2)} TRX`;
                moneyDOM.textContent = `${money.toFixed(2)} USDT`
            } else {
                alert('Not enough Tron');
            }
        }
    });

    sellAmountInput.value = 0; 
    sellTotalPriceInput.value = ""; 

    localStorage.setItem('cryptoMoney', money);
    localStorage.setItem('coins', JSON.stringify(trade.coins));
}

buyForm.addEventListener('submit', buy);
sellForm.addEventListener('submit', sell);

const buyCategoryBtn = document.querySelector('.buy-category-btn'); 
const sellCategoryBtn = document.querySelector('.sell-category-btn'); 

const buyDOM = document.querySelector('.buy');
const sellDOM = document.querySelector('.sell');

showSell = (e) => {
    buyDOM.style.display = "none";
    buyCategoryBtn.classList.remove('buy-active');
    logTableBuy.parentNode.style.display = "none";

    sellDOM.style.display = "flex";
    sellCategoryBtn.classList.add('sell-active');
    logTableSell.parentNode.style.display = "table";
}

showBuy = (e) => {
    buyDOM.style.display = "flex";
    buyCategoryBtn.classList.add('buy-active');
    logTableBuy.parentNode.style.display = "table";

    sellDOM.style.display = "none";
    sellCategoryBtn.classList.remove('sell-active');
    logTableSell.parentElement.style.display = "none";
}

sellCategoryBtn.addEventListener('click', showSell);
buyCategoryBtn.addEventListener('click', showBuy)