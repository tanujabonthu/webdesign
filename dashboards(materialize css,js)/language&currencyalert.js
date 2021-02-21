document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { coverTrigger: false });

    myBalance()
    TypeNotification()
});
async function myBalance() {
    var balance = await fetch('/myBalance', {
        method: 'GET'
    })
    if (balance.ok) {
        balance = await balance.json()
        document.getElementById('balanceDisplay').innerText = balance.currency + ' ' + balance.balance;
        localStorage.setItem('myCurrency', balance.currency)
        var selectedCurrency = localStorage.getItem('selectedCurrency')
        if (selectedCurrency !== null) document.getElementById('selectedCurrency').innerText = selectedCurrency
    } else {
        console.log('balance load error: ', balance)
    }
}
//notification

async function TypeNotification() {
    document.getElementById("show2").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("free").style.backgroundColor = "#01b1ef";
    document.getElementById("free").style.color = "white";
    document.getElementById("off").style.backgroundColor = "white";
    document.getElementById("off").style.color = "black";

    var res = await fetch('/typenotificationlist', {
        method: 'GET'
    })
    if (res.ok) {
        var ul = ''
        res = await res.json()

        res.forEach(function (notifications) {
            var createdOn = notifications.createdOn
            var createdat = moment(createdOn).format('HH : mm A');
            var createddate = moment(createdOn).format('ddd, DD MMM YYYY');
            ul += '<li class="block"><a class="black-text" href="' + notifications.link + '"><b>' + notifications.title +
                '</b><p id="ig" height="100%" width="100%" ' + notifications.description + '></p><p><b>' + createdat + ' ' + createddate + '</b></p></a></li>'
        })
        document.getElementById('show').innerHTML = ul
    }
    var elem = document.querySelectorAll('.notification');
    var instances = M.Dropdown.init(elem, { coverTrigger: false, closeOnClick: false });
}

async function OfferNotification() {
    document.getElementById("free").style.backgroundColor = "white";
    document.getElementById("free").style.color = "black";
    document.getElementById("off").style.backgroundColor = "#01b1ef";
    document.getElementById("off").style.color = "white";
    document.getElementById("show").style.display = "none";
    document.getElementById("show2").style.display = "block";
    var res = await fetch('/offernotificationlist', {
        method: 'GET'
    })
    if (res.ok) {
        var ul = ''
        res = await res.json()

        res.forEach(function (notifications) {
            var createdOn = notifications.createdOn
            var createdat = moment(createdOn).format('HH : mm A');
            var createddate = moment(createdOn).format('ddd, DD MMM YYYY');
            ul += '<li class="block"><img id="igs" height="100%" width="100%" href="' + notifications.link + '" src="/notificationimage?id=' + notifications.id
                + '" alt="' + notifications.description + '"<p><b>' + createdat + ' ' + createddate + '</b></p></li>'
        })
        document.getElementById('show2').innerHTML = ul
    }
    var elem = document.querySelectorAll('.notification');
    var instances = M.Dropdown.init(elem, { coverTrigger: false, closeOnClick: false });
}
function signout() {
    console.log('clearing')
    localStorage.clear()
}
///comingsoon////
var elems = document.querySelectorAll('.comingSoon');
var instances = M.Modal.init(elems, {});

var currency = document.getElementById('currency')
currency.addEventListener('click', async function (event) {
    try {
        var myCurrency = localStorage.getItem('myCurrency')
        if (myCurrency != event.target.innerHTML) {
            var res = await fetch('/currency?base=' + myCurrency + '&convert=' + event.target.innerHTML, {
                method: 'GET'
            })
            if (res.ok) {
                res = await res.text()
                var converted = res
                localStorage.setItem('currencyValue', Number(converted))
                localStorage.setItem('selectedCurrency', event.target.innerHTML)
                document.getElementById('selectedCurrency').innerText = event.target.innerHTML
            } else {
                console.log(await res.text())
            }
        } else {
            localStorage.setItem('currencyValue', Number(1))
            localStorage.setItem('selectedCurrency', event.target.innerHTML)
            document.getElementById('selectedCurrency').innerText = event.target.innerHTML
        }
    } catch (error) {
        console.log(error)
    }
})   