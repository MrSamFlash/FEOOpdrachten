const getSucceedingPromise = (message, ms) => {
    const succesMessage = new Promise((resolve, reject) => {
        setTimeout(() => resolve(message), ms);
    });
    return succesMessage;
};

const getFailingPromise = (errorMessage, ms) => {
    const failMessage = new Promise((resolve, reject) => {
        setTimeout(() => reject(errorMessage), ms);
    });
    return failMessage;
};

const getRandomSucceedingOrFailingPromise = id => {
    // This randomly resolves to true or false
    let promiseShouldSucceed = Math.random() >= 0.5;
    // This gets some semi-random amound of seconds under the 5seconds:
    let randomMillisecond = Math.floor(Math.random() * 5000);

    if (promiseShouldSucceed) {
        return getSucceedingPromise(
            `Promise ${id} succeeded in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    } else {
        return getFailingPromise(
            `Promise ${id} failed in ${randomMillisecond} ms.`,
            randomMillisecond
        );
    }
};

const createPromiseElement = promise => {
    const div = document.createElement("div");
    div.classList = promise.state;
    div.innerHTML = `Promise: ${promise.id}`;
    return div;
};

const showPromises = promises => {
    console.log("I get called every time a Promise rejects or resolves")
    const promisesDiv = document.querySelector(".promises");
    promisesDiv.innerHTML = "";
    const promisesElements = promises.map(createPromiseElement);
    promisesElements.forEach(element => promisesDiv.appendChild(element));
};

const add50Promises = () => {
    let i = 0;
    const allPromises = [];
    // fill the allPromises array with 50 objects that will soon be Promises. 
    // they all have an ID
    while (i <= 50) {
        let id = i;
        allPromises.push({
            id: i,
            state: "pending"
        });
        consumePromise(allPromises, id);
        i++;
    }
    // Put the inital pending Promises in the DOM:
    showPromises(allPromises);
};

const consumePromise = function (allPromises, id) {
    const promise = getRandomSucceedingOrFailingPromise(id);
    //consumeer hier je Promise
    console.log(promise);
    promise.then(resolved => {
        console.log(resolved, "Yep, dit werkte!");
        allPromises[id].state = "resolved";
        showPromises(allPromises);
    }).catch(errored => { //de .then en .catch moeten aan dezelfde variabele worden gekoppeld!
        console.log(errored, "Helaas pindakaas!");
        allPromises[id].state = "errored";
        showPromises(allPromises); //Kleurupdaters in de {}!
    });
};

const registerEventHandlers = () => {
    document.querySelector("button").addEventListener("click", add50Promises);
};

document.addEventListener("DOMContentLoaded", () => {
    registerEventHandlers();
});