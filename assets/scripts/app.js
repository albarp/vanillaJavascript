// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://postman-echo.com/get?foo1=bar1&foo2=bar2", true);
// xhr.onload = () => outputResult(xhr.responseText);
// xhr.send();

// 01
// // user è indefinito, perché getUser ritorna subito undefined
// const user = getUserNotWorking();
// // questo scoppia
// console.log(user.name);

// 02 - Callback
// ok, questo funziona
// getUserCallback( user => {
//   console.log(user.name);
// });

// 03 - Callback Hell
// checkAuthCallback(authInfo => {
//   getUserAuthCallback(authInfo, user => {
//     console.log(user.name);
//   });
// });

// 04 - Promise
checkAuthPromise()
  .then(authInfo => {
    return getUserPromise(authInfo)
  })
  .then(user => {
    console.log(user.name)
  })
  .catch(error => {
    console.log(error);
  })

// 05 - Async / Await
async function fetchUser() {
  try{
    const authInfo = await checkAuthPromise();

    const user = await getUserPromise(authInfo);

    return user;
  }
  catch(error){
    // ...
  }
}

fetchUser().then(user => console.log(user));