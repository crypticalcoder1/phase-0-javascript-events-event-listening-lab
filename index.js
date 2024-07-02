function addingEventListener() {
    const input = document.getElementById('button');
    
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  addingEventListener(); // Call the function to set up the event listener
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // 400px (game width) - 40px (dodger width)
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  