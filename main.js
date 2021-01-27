console.log('CONNECTED');

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

// ****** printToDom  ******
const printToDom = (divID, textToPrint) => {
    // console.log('in printToDom');
    // console.log(divID);
    // console.log(textToPrint);
    const selectedDiv = document.querySelector(divID);
    // console.log(selectedDiv);
    selectedDiv.innerHTML = textToPrint;
}

// taco = is the pies array
const pieBuilder = (taco) => {
    let domString = '';
    // console.log('in pieBuilder');
    for (let i = 0; i < taco.length; i++) {
        domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                        <div class="img-container" style="background-image: url('${taco[i].imageUrl}');"></div>
                        <div class="card-body">
                          <p class="card-text">${taco[i].name}</p>
                          <p class="card-text">${taco[i].ingredients}</p>
                          <p class="card-text">${taco[i].bakeTemp}</p>
                          <p class="card-text">${taco[i].drinkPairing}</p>
                          <p class="card-text">${taco[i].iceCream}</p>
                          <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                        </div>
                      </div>`;

    }
    // console.log('in pieBuilder');
    // console.log(domString);
    printToDom('#pies', domString);
}

/*This is the callback function to handle the different targeted buttons */
// const handleButtonClick = (e) => {
//     console.log(e.target.id);
// }

// expanding on the function below
const handleButtonClick = (e) => {
    // console.log(e.target.id);
    const buttonID = e.target.id;

    // we have access to the entire event 
    // console.log(e);

    if (buttonID === 'Trinity') {
        //Dark mode
        document.querySelector('body').style.backgroundColor = '#000';
    } else if (buttonID === 'Doc') {
        //Light mode
        document.querySelector('body').style.backgroundColor = '#FFF';
    } else if (buttonID === 'Aja') {
        // Medium mode
        document.querySelector('body').style.backgroundColor = '#808080';
    } else if (buttonID === 'All') {
        // Default mode
        document.querySelector('body').style.backgroundColor = 'rgb(175, 196, 175)';
    }

    //Update the pies based on the button click
    const selectedPies = [];
    //Pies[0].instructor // Doc
    for (let i = 0; i < pies.length; i++) {
        if (pies[i].instructor === buttonID) {
            selectedPies.push(pies[i]);
        }
    }

    if (buttonID === 'All') {
        pieBuilder(pies);
    } else {
        pieBuilder(selectedPies);
    }

}

// // target elements on the DOM 
// const ButtonEvents = () => {
//     const allBtn = document.querySelector('#All');
//     const docBtn = document.querySelector('#Doc');
//     const ajaBtn = document.querySelector('#Aja');
//     const trinityBtn = document.querySelector('#Trinity');

//     // now we are targeting each one of them 
//     // The second argument is an anonymous to make sure that it actually works the way we want 
//     // allBtn.addEventListener('click', (e) => {
//     //     console.log(e.target.id);
//     // })
//     /*We can create a call back function to not have to target each btn individually */

//     allBtn.addEventListener('click', handleButtonClick);
// }


const getFormInfo = (e) => {
    // document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // prevent defalt prevent's the page from refreshing 
    // console.log('Form Submited');
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

    console.log(obj);
    pies.push(obj);
    pieBuilder(pies);
    document.querySelector('form').reset();
}

// D in crud delete pie
const deletePie = (e) => {

    const tartgetType = e.target.type;
    const targetID = e.target.id;

    if (tartgetType === 'button') {
        // Do Something 
        console.log(pies);
        pies.splice(targetID, 1);

    } else {
        console.log(pies);
    }
    pieBuilder(pies);

}




/*Chainnig = ability to do something and add something to it at the end 
same as above to, short hand  */
// target elements on the DOM 
const ButtonEvents = () => {
    document.querySelector('#All').addEventListener('click', handleButtonClick);
    document.querySelector('#Doc').addEventListener('click', handleButtonClick);
    document.querySelector('#Aja').addEventListener('click', handleButtonClick);
    document.querySelector('#Trinity').addEventListener('click', handleButtonClick);

    document.querySelector('#pies').addEventListener('click', deletePie);

    // document.querySelector('#pies').addEventListener('click', (e) => {
    //     console.log(e.target.id);
    // });

    // document.querySelector('#pies').addEventListener('click', (e) => {
    //     console.log(e);
    // });


    // document.querySelector('#pies').addEventListener('click', (e) => {
    //     // console.log(e.target.id);
    //     const tartgetType = e.target.type;
    //     const targetID = e.target.id;

    //     if (tartgetType === 'button') {
    //         // Do Something 
    //         console.log(pies);
    //         pies.splice(targetID, 1);

    //     } else {
    //         console.log(pies);
    //     }
    //     pieBuilder(pies);
    // });




    document.querySelector('form').addEventListener('submit', getFormInfo);
    // document.querySelector('form').addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     console.log('Form Submited');
    //     const name = document.querySelector('#name').value;
    //     const ingredients = document.querySelector('#ingredients').value;
    //     const bakeTemp = document.querySelector('#bakeTemp').value;
    //     const drinkPairing = document.querySelector('#drinkPairing').value;
    //     const imageUrl = document.querySelector('#imageUrl').value;
    //     const instructor = document.querySelector('#instructor').value;
    //     const iceCream = document.querySelector('#iceCream').value;

    //     const obj = {
    //         name,
    //         bakeTemp,
    //         ingredients,
    //         drinkPairing,
    //         imageUrl,
    //         instructor,
    //         iceCream,
    //     }

    //     console.log(obj);


    //}); // the page reloaded to fast 
    // we don't want it to reload


}



const init = () => {
    ButtonEvents();
    pieBuilder(pies);
    // console.log('in init');
}

init();








// END