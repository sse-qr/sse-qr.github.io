(async() => {


const sleep = (millis) => new Promise((resolve, reject) => setTimeout(resolve, millis));

//https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript/
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

const id = findGetParameter('id');

document.body.innerText = 'Got id: "' + id + '". Now redirecting ...';

await sleep(5000);

window.location.href = 'https://sseglobal.com';


})();
