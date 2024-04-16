import { menuArray } from "/data.js";

const menuSection = document.getElementById("menu-section");

const selectedMarketItems = {
  "button-id0": 0,
  "button-id1": 0,
  "button-id2": 0,
};

function createMenuCard(menuArray) {
  return `
        <section class="card">
            <div class="emoji">${menuArray.emoji}</div>
            <div class="card-left">
                <h2>${menuArray.name}</h2>
                <h3>${menuArray.ingredients.join(", ")}</h3>
                <p>Price: $${menuArray.price}</p>
            </div>
            <button class="add-button" id="${
              "button-id" + menuArray.id
            }">+</button>
       </section>
    `;
}

function renderMenu() {
  const menuCards = menuArray.map((menu) => createMenuCard(menu));
  menuSection.innerHTML = menuCards.join("");

  const button1 = document.getElementById("button-id0");
  const button2 = document.getElementById("button-id1");
  const button3 = document.getElementById("button-id2");
  const orderSection = document.getElementById("order-section");

  const onButtonClick = (buttonId) => {
    selectedMarketItems[buttonId] += 1;

    const selectedItems = Object.entries(selectedMarketItems).filter(
      (item) => item[1] > 0
    );

    const selectedItemsHTML = selectedItems.map((item) => {
      const menuItem = menuArray.find(
        (menu) => menu.id === +item[0].split("button-id")[1]
      );
      return `
            <div class="small-card">
                <div class="emoji">
                    ${menuItem.emoji}     
                    <div class=""titles> 
                        <h2>${menuItem.name}</h2>
                        <h3>${menuItem.ingredients.join(", ")}</h3>
                    </div>        
                    <div class="description">
                      <p>Price: $${menuItem.price * item[1]}</p>
                    </div>     
                </div>
            </div>
        `;
    });

    const total = selectedItems.reduce((acc, item) => {
      const menuItem = menuArray.find(
        (menu) => menu.id === +item[0].split("button-id")[1]
      );
      return acc + menuItem.price * item[1];
    }, 0);

    selectedItemsHTML.push(`<h2 class="total-price">Total: $${total}</h2>`);
    orderSection.innerHTML = selectedItemsHTML.join("");
  };

  button1.addEventListener("click", function () {
    onButtonClick(button1.id);
  });
  button2.addEventListener("click", function () {
    onButtonClick(button2.id);
  });
  button3.addEventListener("click", function () {
    onButtonClick(button3.id);
  });
}

renderMenu();
