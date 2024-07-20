// Define the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users array and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors that occur during the fetch
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Add event listener for DOMContentLoaded to invoke fetchUserData
document.addEventListener('DOMContentLoaded', fetchUserData);

