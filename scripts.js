const list = document.querySelector("ul");
const buttonTodosOsBurgers = document.querySelector(".todos-os-burgers");
const buttonHappyHour = document.querySelector(".happy-hour");
const somarTudo = document.querySelector(".pedir-todos")
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

function sumAll() {
    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
   list.innerHTML =` 
     <li>
                
                <p>O valor total de todos os itens é R$ ${total}</p>
              
            </li>
     `
}

buttonTodosOsBurgers.addEventListener("click", () => TodosOsBurgers(menuOptions));
buttonHappyHour.addEventListener("click", desconto);
somarTudo.addEventListener("click", sumAll)
