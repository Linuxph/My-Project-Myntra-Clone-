const item = [{
    id : '001',
    image : 'images/js-images/item1.jpg',
    rating : {
        stars: 4,
        count: '10.7k'
    },
    company:'Roadster',
    item_name:'Colourblocked T-shirt',
    current_price:202,
    original_price:699,
    return_period : 14,
    delivery_date: 'Sat Jan 20',
    discount_percentage: 71,
},
{
    id : '002',
    image : 'images/js-images/item2.jpg',
    rating : {
        stars: 3.9,
        count: '12.4k'
    },
    company:'Urbano Fashion',
    item_name:'Men Black Slim Fit Mid-rise Clean Look Stretchable Jeans ',
    current_price:699,
    return_period: 14,
    delivery_date: 'Sat 20 Jan',
    original_price:1399,
    discount_percentage:50,
},
{
    id : '003',
    image : 'images/js-images/item3.jpg',
    rating : {
        stars: 4.3,
        count: '1.5k'
    },
    company:'Red Tape',
    item_name:'Men Slip Resistant Sneakers',
    current_price:1349,
    return_period: 14,
    delivery_date: 'Mon, Jan 22',
    original_price:5399,
    discount_percentage:75,
},
{
    id : '004',
    image : 'images/js-images/item4.jpg',
    rating : {
        stars: 4.2,
        count: '1.9k'
    },
    company:'Campus',
    item_name:'Men Black Mesh Running Shoes',
    current_price:1119,
    original_price:1699,
    delivery_date:'Mon, Jan 22',
    return_period: 14,
    discount_percentage:'Rs. 580 OFF',
},
{
    id : '005',
    image : 'images/js-images/item6.jpg',
    rating : {
        stars: 4.2,
        count: 297
    },
    company:'Jompers',
    item_name:'Geometric Chickankari Embroidered Kurta With Pyjamas',
    current_price:1379,
    return_period: 14, 
    delivery_date: 'Sun, Jan 21',
    original_price:5999,
    discount_percentage:77,
},
{
    id : '006',
    image : 'images/js-images/item7.jpg',
    rating : {
        stars: 4.4,
        count: 295
    },
    company:'U.S. Polo Assn',
    item_name:'Men Rust Printed Cotton Boxers',
    delivery_date: 'Sat, Jan 20',
    return_period: 14,
    current_price:699,
    original_price:1499,
    discount_percentage:55,
},
{
    id : '007',
    image : 'images/js-images/item8.jpg',
    rating : {
        stars: 4.4,
        count: 1400
    },
    company:'CMF by Nothing',
    item_name:'Watch Pro',
    current_price:3499,
    original_price:5999,
    delivery_date: 'Sun, Jan 21',
    return_period: 14,
    discount_percentage:'Rs. 2500 OFF',
},
{
    id : '008',
    image : 'images/js-images/item5.jpg',
    rating : {
        stars: 4.4,
        count: 16
    },
    company:'Puma',
    item_name:'Leather Embrossed Wallets',
    current_price:999,
    delivery_date:'Thu, Jan 25',
    return_period:14,
    original_price:1999,
    discount_percentage:50,
},
];

let BagItems ;

onload();

function onload() {
    let items_str = localStorage.getItem('BagItems');
    BagItems = items_str ? JSON.parse(items_str) : []; 
    Todisplay();
    bagitem();
    
}

//function to display items in the page or create items on the page
function Todisplay() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    item.forEach(item => {
      innerHtml += `
      <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      </div>`
    });
    itemsContainerElement.innerHTML = innerHtml;
}

//function to add items to bag

function addToBag(itemId) {
    BagItems.push(itemId);
    localStorage.setItem('BagItems' , JSON.stringify(BagItems));
    bagitem();
}

function bagitem() {
    let count = document.querySelector('.bag-item-count');
    if(BagItems.length > 0){
        count.style.visibility = 'visible';
        count.innerText = BagItems.length;
    }
    else{
        count.style.visibility = 'hidden';
    }
}


function callslider() {
    document.querySelector('.slider').style.left = '0%'
    document.querySelector('.shadow').style.left = '51%'
    document.body.style.overflow = 'hidden';
}

function back() {
    document.querySelector('.slider').style.left = '-50%';
    document.querySelector('.shadow').style.left = '-50%';
    document.body.style.overflow = 'auto';
}
