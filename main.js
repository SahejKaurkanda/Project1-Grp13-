document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const dataContainer = document.getElementById('dataContainer');
  
    fetchDataBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
  
        // Display JSON data
        dataContainer.innerHTML = `<pre>${JSON.stringify(jsonData, null, 2)}</pre>`;
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    });
  });
  