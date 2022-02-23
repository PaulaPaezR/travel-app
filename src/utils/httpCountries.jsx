export function get(path){
    return fetch('https://restcountries.com/v3.1' + path)
        .then(response => response.json())

}