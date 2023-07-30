const myProfileButton = document.getElementById('myProfileButton');

myProfileButton.addEventListener('click', async function () {
	// Code to execute when button is clicked
	try {
		const response = await fetch('http://localhost:4400/activity');
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		  
		}
		const data = await response.json();
		console.log(data);
	  } catch (error) {
		console.error(error);
	  }
  });