// callback: getUser accetta come parametro una funzione che chiamerà
// non appena si ottiene l'utente vero e proprio
const getUserCallback = cb => {
  setTimeout(() => {
    cb({name: 'Max'})
  }, 2000)
}

// Callback hell
// Simula il controllo dell'utente in asincrono
const checkAuthCallback = cb => {
  setTimeout( () => {
    cb({ isAuth: true })
  }, 2000);
}

// Simula il recupero dell'utente in asincrono
const getUserAuthCallback = (authInfo, cb) => {
  if(authInfo.isAuth){
    setTimeout( () => {
      cb( {name: 'Max'})
    });
  }
  else{
    cb(null);
    return;
  }
}