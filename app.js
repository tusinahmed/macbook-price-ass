
function memeorybuton(inputid, num) {
    const memorycosts = document.getElementById(inputid);
    const memorycosttext = memorycosts.innerText;
    const memorycost = parseFloat(memorycosttext);
    const updateprice = memorycosts.innerText = num;
}

function total() {

    const bestprice = document.getElementById('best-price-id');
    const bestpricetect = bestprice.innerText;
    const bestpricevalue = parseFloat(bestpricetect);
    console.log(bestpricevalue);

    
    const Mprice = document.getElementById('memory-cost');
    const Mpricetext= Mprice.innerText;
    const Mprices = parseFloat(Mpricetext);
    console.log(Mprices);

    const Sprice = document.getElementById('strage-cost');
    const Spricetext= Sprice.innerText;
    const Sprices = parseFloat(Spricetext);
    console.log(Sprices);

    const dprice = document.getElementById('delivery-20');
    const dpricetext= dprice.innerText;
    const dprices = parseFloat(dpricetext);
    console.log(dprices);


    const totalcost = dprices + Sprices + Mprices + bestpricevalue;
    console.log(totalcost);

    const totoade = document.getElementById('total-price');
    const totoadetext = totoade.innerText;
    const totoadenumber = parseFloat(totoadetext);

    totoade.innerText = totalcost;
    console.log(totoadenumber);

    const totalpriceafterall = document.getElementById('total-price-after-all-update');
    const afteralltotal = totalpriceafterall.innerText;
    const afterallnumber = parseFloat(afteralltotal);
   
    let alltotals =  totalpriceafterall.innerText = totalcost;
  
    
}

// function promo() {
//     const totalpriceafterall = document.getElementById('total-price-after-all-update');
//     const afteralltotal = totalpriceafterall.innerText;
//     let afterallnumber = parseFloat(afteralltotal);
    
//     const inputvaluecode = document.getElementById('promo-code-input');
//     const inputvaluecodes = inputvaluecode.value;

//     return inputvaluecodes;
   
    
   
// }





document.getElementById('16gb-button').addEventListener('click', function () {
    console.log('click')

    let update16gbmemeroyprice = memeorybuton('memory-cost', 180);
    total();

  

    
});


document.getElementById('8gb-button').addEventListener('click', function () {
    console.log(' click')

    let update8gbmemeroyprice = memeorybuton('memory-cost', 0);
    total();
    
    
    
})

//strage button

document.getElementById('256gb-ssd-button').addEventListener('click', function () {
    console.log('click')
    console.log('click stor')

    const update256gbStrongeprice = memeorybuton('strage-cost', 0);
    total();

    
    
});



document.getElementById('512gb-ssd-button').addEventListener('click', function () {
    console.log('click')

    const update512gbStrongeprice = memeorybuton('strage-cost', 100);
    total();
    
});



document.getElementById('1tb-ssd-button').addEventListener('click', function () {
    console.log('click')

    const update1tbgbStrongeprice = memeorybuton('strage-cost', 180);
    total();
    
});

// delivery chage


document.getElementById('deliver-free').addEventListener('click', function () {
    console.log('click')

    const deliverycharge20 = memeorybuton('delivery-20', 0);
    total();
    
});


document.getElementById('delivery-charge-20').addEventListener('click', function () {
    console.log('click')

    const deliverycharge20 = memeorybuton('delivery-20', 20);
    total();
});


document.getElementById('promocode-button').addEventListener('click', function () {
    console.log('aply')

    const totalpriceafterall = document.getElementById('total-price-after-all-update');
   const afteralltotal = totalpriceafterall.innerText;
  let afterallnumber = parseFloat(afteralltotal);
        
const inputvaluecode = document.getElementById('promo-code-input');
const inputvaluecodes = inputvaluecode.value;

    if (inputvaluecodes == 'stevekaku') {
        const promo = (afterallnumber / 100) * 20;
        const totalpriceafterpromocode = afterallnumber - promo;
        totalpriceafterall.innerText = totalpriceafterpromocode;
        
        
    }

    else {
        alert('need valid promo code');
    }


    
 
});


