const cats = ["Milo", "Otis", "Garfield"];
let newArray;

function destructivelyAppendCat(name) {
  cats.push(`${name}`);
}

function destructivelyPrependCat(name) {
  cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return newArray = [...cats, `${name}`];
}

function prependCat(name) {
    return newArray = [`${name}`, ...cats];
}

function removeLastCat() {
    return newArray = [...cats.slice(0,2)];
  }

function removeFirstCat(name) {
    return newArray = [...cats.slice(1,3)];
  }