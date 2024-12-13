document.getElementById('start-btn').addEventListener('click', async () => {
    try {
      const response = await fetch('http://localhost:3000/swap-colors', {
        method: 'GET',
      });
  
      const data = await response.json();
  
      const greenBox = document.getElementById('green-box');
      const redBox = document.getElementById('red-box');
  
      // Оновлюємо кольори квадратів
      greenBox.textContent = data.green.text;
      greenBox.style.backgroundColor = data.green.color;
  
      redBox.textContent = data.red.text;
      redBox.style.backgroundColor = data.red.color;
    } catch (error) {
      console.error('Error:', error);
    }
  });
  