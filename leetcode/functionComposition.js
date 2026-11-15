/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    let resultado = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      resultado = functions[i](resultado);
    }

    return resultado;
  };
};


