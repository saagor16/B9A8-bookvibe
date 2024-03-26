
const getStoredCardApplicationTwo = () =>{
    const storedCardApplicationTwo = localStorage.getItem('cardApplicationTwo');
    if(storedCardApplicationTwo){
        return JSON.parse(storedCardApplicationTwo);
    }
    return [];
}


const saveCardApplicationTwo = id =>{
    const storedCardApplicationsTwo = getStoredCardApplicationTwo();
    const exists = storedCardApplicationsTwo.find(cardId => cardId === id);
    if(!exists){
        storedCardApplicationsTwo.push(id);
        localStorage.setItem('cardApplicationTwo', JSON.stringify(storedCardApplicationsTwo))
    }
}

export { getStoredCardApplicationTwo, saveCardApplicationTwo}