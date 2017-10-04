If you're transpiling `async` / `await` for the browser, and you care about the filesize of your minified bundles,
which transpiler should you use?

### In short:

Babel's output is 8.1x the size of the input (after minification)  
TypeScript's is 3.5x

(Remember that TypeScript can be used to transpile plain JavaScript, sans type-checking)

tsc's output came from [the playground](http://www.typescriptlang.org/play/index.html#src=async%20function%20serialAsyncMap(collection%2C%20fn)%20%7B%0D%0A%20%20let%20result%20%3D%20%5B%5D%3B%0D%0A%20%20for%20(let%20item%20of%20collection)%20%7B%0D%0A%20%20%20%20result.push(await%20fn(item))%3B%0D%0A%20%20%7D%0D%0A%20%20return%20result%3B%0D%0A%7D#src=export%20async%20function%20serialAsyncMap(collection%2C%20fn)%20%7B%0D%0A%20%20%20%20let%20result%20%3D%20%5B%5D%3B%0D%0A%20%20%20%20for%20(let%20item%20of%20collection)%20%7B%0D%0A%20%20%20%20%20%20%20%20result.push(await%20fn(item))%3B%0D%0A%20%20%20%20%7D%0D%0A%20%20%20%20return%20result%3B%0D%0A%7D%0D%0A)

Babel's output came from [their playground](http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=KYDwDg9gTgLgBAQwM4E8B2BjOAzArpmASwjTiWCkIQBsBBVTAWQTAAoMJrrgMiSAaHGgCUcAN4AoONLjd4UYElzV4AXjgBtALoBuKTOzQ4rOXEIxgAWzgRscDlx58R4_TJkKlKgHRhcSAAtWBAB3BHMhVnMrYWE9dwBfNzgFGFwoUk9lGD0koA&debug=false&circleciRepo=&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&targets=&version=6.26.0) as well.
