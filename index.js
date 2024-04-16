import {menuArray} from "/data.js"

const menuSection = document.getElementById('menu-section')

const selectedMarketItems = {
    "button-id0": 1,
    "button-id1": 0,
    "button-id2": 0
}

function createMenuCard(menuArray) {
    return `
        <section class="card">
            <div class="emoji">${menuArray.emoji}</div>
            <div class="card-left">
                <h2>${menuArray.name}</h2>
                <h3>${menuArray.ingredients.join(', ')}</h3>
                <p>Price: $${menuArray.price}</p>
            </div>
            <button class="add-button" id="${'button-id'+ menuArray.id}">+</button>
       </section>
    `;
}

function renderMenu() {
    const menuCards = menuArray.map(menu => createMenuCard(menu));
    menuSection.innerHTML = menuCards.join('');

    const button1 = document.getElementById('button-id0')
    const button2 = document.getElementById('button-id1')
    const button3 = document.getElementById('button-id2')
    const orderSection = document.getElementById('order-section')





    
    const onButtonClick = (id) => {
        selectedMarketItems[id] =  selectedMarketItems[id] + 1



        orderSection.innerHTML =  `<div> ${Object.keys(selectedMarketItems).filter((item) => selectedMarketItems[item] !== 0).map((key) => {
          
          
            return `<div> 
            ${menuArray.find((item) => {  
                const regex = /id(\d+)$/;
                const match = regex.exec(key);
                const idItself = match ? match[1] : null;
                return item.id == idItself
                  }).name}  
            ${menuArray.find((item) => {  
                const regex = /id(\d+)$/;
                const match = regex.exec(key);
                const idItself = match ? match[1] : null;
                return item.id == idItself
                    }).emoji}   
            ${menuArray.find((item) => {  
            const regex = /id(\d+)$/;
            const match = regex.exec(key);
            const idItself = match ? match[1] : null;
            return item.id == idItself
                }).price} 
                
                ${menuArray.find((item) => {  
                    const regex = /id(\d+)$/;
                    const match = regex.exec(key);
                    const idItself = match ? match[1] : null;
                    return item.id == idItself
                        }).price * selectedMarketItems[id]}$

                
                  </div>`
        })} </div>`

    


        const selectedSingleItemCount = selectedMarketItems[id]

        if (selectedSingleItemCount == 0) return null


        const orderSectionHTML = `<div> 
            ${Object.keys(selectedMarketItems).map}

        </div>`
    
        

        console.log('i am button', id)
    }


    button1.addEventListener("click", function(){
        onButtonClick(button1.id)
    }) 
    button2.addEventListener("click", function(){
        onButtonClick(button2.id)
    }) 
    button3.addEventListener("click", function(){
        onButtonClick(button3.id)
    }) 


}

renderMenu();






