// ESERCIZIO NORMALE

/* const getChefBirthday = async (id) => {
    try {
        const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
        const ricetta = await responseRicetta.json();

        const responseChef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`);
        const chef = await responseChef.json();

        return chef.birthDate;
    } catch {
        throw new Error('Qualcosa è andato storto');
    }
};

getChefBirthday(1)
    .then((birthDate) => console.log('Data di nascita dello Chef:', birthDate))
    .catch((error) => console.error('Errore:', error.message)); */

// PRIMO BONUS

/* const getChefBirthday = async (id) => {
    try {
        const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!responseRicetta.ok) {
            throw new Error('Ricetta non trovata');
        }

        const ricetta = await responseRicetta.json();

        const responseChef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`);
        const chef = await responseChef.json();

        return chef.birthDate;
    } catch(error) {
        throw new Error(error.message);
    }
};

getChefBirthday(1)
    .then((birthDate) => console.log('Data di nascita dello Chef:', birthDate))
    .catch((error) => console.error('Errore:', error.message)); */

//SECONDO BONUS

const dayjs = require('dayjs');

const getChefBirthday = async (id) => {
    try {
        const responseRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!responseRicetta.ok) {
            throw new Error('Ricetta non trovata');
        }

        const ricetta = await responseRicetta.json();

        const responseChef = await fetch(`https://dummyjson.com/users/${ricetta.userId}`);
        const chef = await responseChef.json();

        return chef.birthDate;
    } catch(error) {
        throw new Error(error.message);
    }
};

getChefBirthday(1)
    .then((birthDate) => console.log('Data di nascita dello Chef:', dayjs(birthDate).format('DD/MM/YYYY')))
    .catch((error) => console.error('Errore:', error.message));