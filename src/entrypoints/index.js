import Alpine from 'alpinejs'
window.Alpine = Alpine
window.addEventListener('load', () => {
    Alpine.start();
})

window._arrayEquals = function arrayEquals(a, b){
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}


Alpine.data('product', () => {
  
})
