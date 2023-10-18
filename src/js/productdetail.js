document.addEventListener("DOMContentLoaded", function() {
    
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const quantityElement = document.getElementById('quantity');
  
    decrementButton.addEventListener('click', function() {
      let currentQuantity = parseInt(quantityElement.textContent.split(": ")[1], 10);
      if (currentQuantity > 1) {
        currentQuantity -= 1;
        quantityElement.textContent = `Qty: ${currentQuantity}`;
      }
    });
  
    incrementButton.addEventListener('click', function() {
      let currentQuantity = parseInt(quantityElement.textContent.split(": ")[1], 10);
      currentQuantity += 1;
      quantityElement.textContent = `Qty: ${currentQuantity}`;
    });
    
  });




 

  



