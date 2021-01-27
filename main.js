//console.log('CONNECTED');
debugger;

const pies = [{
        name: 'Dutch Apple Pie',
        ingredients: 'apples,sugar,butter,nutmeg,dutch people',
        bakeTemp: 5000,
        drinkPairing: 'Earl Grey Tea',
        imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
        instructor: 'Doc',
        iceCream: 'Vanilla',
    },
    {
        name: 'Berry Pie',
        ingredients: 'berries',
        bakeTemp: 400,
        drinkPairing: 'wine',
        imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
        instructor: 'Doc',
        iceCream: 'banana',
    },
    {
        name: 'Pumpkin Pie',
        ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
        bakeTemp: 42,
        drinkPairing: 'egg nog',
        imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
        instructor: 'Aja',
        iceCream: 'Vanilla',
    },
    {
        name: 'Shoo Fly Pie',
        ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
        bakeTemp: 1234,
        drinkPairing: 'Apple Cider',
        imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
        instructor: 'Aja',
        iceCream: 'Coffee',
    },
    {
        name: 'Pecan Pie',
        ingredients: 'Pecans, sugar, butter, flour',
        bakeTemp: 5000,
        drinkPairing: 'Milk',
        imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
        instructor: 'Trinity',
        iceCream: 'Vanilla',
    },
    {
        name: 'Keylime Pie',
        ingredients: 'lemons, sugar, butter, flour',
        bakeTemp: 5000,
        drinkPairing: 'Water',
        imageUrl: 'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
        instructor: 'Trinity',
        iceCream: 'none',
    },
];

let filter = false;
const selectedPies = [];
let loading = true;

// ****** printToDom  ******
const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.querySelector(divID);
    selectedDiv.innerHTML = textToPrint;
}

const clearFormValues = () => {
    document.querySelector('#name').value = '';
    document.querySelector('#ingredients').value = '';
    document.querySelector('#bakeTemp').value = '';
    document.querySelector('#drinkPairing').value = '';
    document.querySelector('#imageUrl').value = '';
    document.querySelector('#instructor').value = '';
    document.querySelector('#iceCream').value = '';
}

// taco = is the pies array
const pieBuilder = (taco) => {
    let domString = '';

    taco.forEach((item, i) => {
        domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div class="img-container" style="background-image: url('${item.imageUrl}');"></div>
                    <div class="card-body">
                      <p class="card-text">${item.name}</p>
                      <p class="card-text">${item.ingredients}</p>
                      <p class="card-text">${item.bakeTemp}</p>
                      <p class="card-text">${item.drinkPairing}</p>
                      <p class="card-text">${item.iceCream}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                    </div>
                  </div>`;
    })

    printToDom('#pies', domString);
}

// expanding on the function below
const handleButtonClick = (e) => {
    const buttonID = e.target.id;


    if (buttonID === 'Trinity') {
        //Dark mode
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('#valueDoc').disabled = true;
        document.querySelector('#valueAja').disabled = true;
        document.querySelector('#valueTrinity').disabled = false;
        document.querySelector('#valueTrinity').selected = 'selected';
    } else if (buttonID === 'Doc') {
        //Light mode
        document.querySelector('body').style.backgroundColor = '#FFF';
        document.querySelector('#valueDoc').disabled = false;
        document.querySelector('#valueAja').disabled = true;
        document.querySelector('#valueTrinity').disabled = true;
        document.querySelector('#valueDoc').selected = 'selected';
    } else if (buttonID === 'Aja') {
        // Medium mode
        document.querySelector('body').style.backgroundColor = '#808080';
        document.querySelector('#valueDoc').disabled = true;
        document.querySelector('#valueAja').disabled = false;
        document.querySelector('#valueTrinity').disabled = true;
        document.querySelector('#valueAja').selected = 'selected';
    } else if (buttonID === 'All') {
        // Default mode
        document.querySelector('body').style.backgroundColor = 'rgb(175, 196, 175)';
        document.querySelector('#valueDoc').disabled = false;
        document.querySelector('#valueAja').disabled = false;
        document.querySelector('#valueTrinity').disabled = false;
        document.querySelector('#selectAnInstructor').selected = 'selected';
    }

    selectedPies.length = 0;
    for (let i = 0; i < pies.length; i++) {
        if (pies[i].instructor === buttonID) {
            selectedPies.push(pies[i]);
        }
    }

    if (buttonID === 'All') {

        for (let i = 0; i < pies.length; i++) {
            if (pies[i].instructor === buttonID) {
                selectedPies.push(pies[i]);
            }
        }
        filter = false;
        pieBuilder(pies);
    } else {
        filter = true;
        pieBuilder(selectedPies);
    }
}

const getFormInfo = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const ingredients = document.querySelector('#ingredients').value;
    const bakeTemp = document.querySelector('#bakeTemp').value;
    const drinkPairing = document.querySelector('#drinkPairing').value;
    const imageUrl = document.querySelector('#imageUrl').value;
    const instructor = document.querySelector('#instructor').value;
    const iceCream = document.querySelector('#iceCream').value;
    const obj = {
        name,
        bakeTemp,
        ingredients,
        drinkPairing,
        imageUrl,
        instructor,
        iceCream,
    }

    console.log(e);
    pies.push(obj);
    selectedPies.push(obj);

    // handleButtonClick(e);
    if (filter) {
        pieBuilder(selectedPies);
    } else {
        pieBuilder(pies);
    }

    clearFormValues();
    // document.querySelector('form').reset();
}

// D in crud delete pie
const deletePie = (e) => {

    const tartgetType = e.target.type;
    const targetID = e.target.id;
    let piesID = 0;
    const targetIDNum = parseInt(e.target.id, 10);

    if (tartgetType === 'button') {
        // Do Something 
        if (filter) {
            console.log(selectedPies[targetIDNum]);
            for (let i = 0; i < pies.length; i++) {
                if ((pies[i].name === selectedPies[targetIDNum].name) &&
                    (pies[i].instructor === selectedPies[targetIDNum].instructor)) {

                    console.log('in IF');
                    console.log(typeof(2));
                    piesID = i;
                    break;
                }
            }
            pies.splice(piesID, 1);
            selectedPies.splice(targetID, 1);
            pieBuilder(selectedPies);
        } else {
            pies.splice(targetID, 1);
            pieBuilder(pies);
        }
    }

}

const ButtonEvents = () => {
    document.querySelector('#All').addEventListener('click', handleButtonClick);
    document.querySelector('#Doc').addEventListener('click', handleButtonClick);
    document.querySelector('#Aja').addEventListener('click', handleButtonClick);
    document.querySelector('#Trinity').addEventListener('click', handleButtonClick);
    document.querySelector('#pies').addEventListener('click', deletePie);
    document.querySelector('form').addEventListener('submit', getFormInfo);
}

const init = () => {
    ButtonEvents();
    pieBuilder(pies);
}

init();

// END