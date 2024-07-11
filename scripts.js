const list = document.querySelector("ul");
const buttonTodosOsBurgers = document.querySelector(".todos-os-burgers");
const buttonHappyHour = document.querySelector(".happy-hour");
let myLI = "";

function TodosOsBurgers(array) {
    myLI = "";
    array.forEach(product => {
        myLI += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="cor-preço">R$ ${product.price.toFixed(2)}</p>
            </li>
        `;
    });
    list.innerHTML = myLI;
}

function desconto() {
    const newPrices = menuOptions.map(product => ({
        name: product.name,
        price: product.price * 0.9,
        vegan: product.vegan,
        src: product.src
    }));
    TodosOsBurgers(newPrices);
}

buttonTodosOsBurgers.addEventListener("click", () => TodosOsBurgers(menuOptions));
buttonHappyHour.addEventListener("click", desconto);
