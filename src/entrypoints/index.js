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
  return {
    product: JSON.parse(document.querySelector('[data-product-json]').innerHTML),
    selectedVariant: null,
    quantity: 1,
    
    
    init() {
      console.log('init')
      this.product = JSON.parse(document.querySelector('[data-product-json]').innerHTML)
      
      const params = (new URL(document.location)).searchParams
      const variant_id = params.get('variant_id')
      let firstAvailableVariant = this.product.variants.find(v => v.available === true) || this.product.variants[0]

      if(variant_id !== '' && this.product.variants.find(v => v.id === Number(variant_id)) !== undefined){
        const variantFromUrlParams = this.product.variants.find(v => v.id === Number(variant_id))
        if(variantFromUrlParams.available){
          firstAvailableVariant = variantFromUrlParams
        }
      }

      this.selectedVariant = firstAvailableVariant

    }
  }
})
