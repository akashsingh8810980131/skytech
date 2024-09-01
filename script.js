document.getElementById('fetchButton').addEventListener('click', fetchUserName);

function fetchUserName() {
  const userId = document.getElementById('userIdInput').value;
  fetch('https://raw.githubusercontent.com/akashsingh8810980131/skytech/main/data.json')
    .then(response => response.json())
    .then(data => {
      const user = data.find(user => user.id === parseInt(userId));
      const resultDiv = document.getElementById('result');
      if (user) {
        resultDiv.innerHTML = `<p>User Name: ${user.name}</p>`;
      } else {
        resultDiv.innerHTML = '<p>User not found.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again.</p>';
    });
}
