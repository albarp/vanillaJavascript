// Esempio che non funzione perché il ritorno è asincrono
const getUserNotWorking = () => {
  setTimeout( () => {
    return {name: 'Max'}
  }, 2000);
}