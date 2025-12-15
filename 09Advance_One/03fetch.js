fetch('https://')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching posts:', error)); 