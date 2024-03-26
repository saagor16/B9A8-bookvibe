
const getStoredCardApplication = () =>{
    const storedCardApplication = localStorage.getItem('cardApplication');
    if(storedCardApplication){
        return JSON.parse(storedCardApplication);
    }
    return [];
}


const saveCardApplication = id =>{
    const storedCardApplications = getStoredCardApplication();
    const exists = storedCardApplications.find(cardId => cardId === id);
    if(!exists){
        storedCardApplications.push(id);
        localStorage.setItem('cardApplication', JSON.stringify(storedCardApplications))
    }
}

export { getStoredCardApplication, saveCardApplication}