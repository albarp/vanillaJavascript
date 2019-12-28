const checkAuthPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({isAuth: true})
    }, 2000);
  })
}

const getUserPromise = (authInfo) => {
  return new Promise( (resolve, reject) => {
    if(authInfo.isAuth) {
      setTimeout(() => {
        resolve({name: 'Max'})
      }, 2000);
    }
    else{
      reject('anAuth');
    }
  })
}