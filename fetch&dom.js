async function fetchDataAndUpdateList(buttonId, url, listId, renderItem) {
    const button = document.getElementById(buttonId);
    button.disabled = true; // Disable the button after clicking
    try {
        const response = await fetch(url);
        const data = await response.json();
        const list = document.getElementById(listId);
        list.innerHTML = ''; // Clear the list before adding new items
        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = renderItem(item);
            list.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        button.disabled = false; // Re-enable the button
    }
}

// Task 1: Load Users
document.getElementById('loadUsers').addEventListener('click', () => {
    fetchDataAndUpdateList(
        'loadUsers',
        'https://jsonplaceholder.typicode.com/users',
        'userList',
        user => `<strong>${user.name}</strong> - ${user.email} - ${user.company.name}`
    );
});

// Task 2: Load Posts
document.getElementById('loadPosts').addEventListener('click', () => {
    fetchDataAndUpdateList(
        'loadPosts',
        'https://jsonplaceholder.typicode.com/posts',
        'postList',
        post => `<strong>${post.title}</strong> - ${post.body}`
    );
});

// Task 3: Load Comments
document.getElementById('loadComments').addEventListener('click', () => {
    fetchDataAndUpdateList(
        'loadComments',
        'https://jsonplaceholder.typicode.com/comments',
        'commentList',
        comment => `<strong>${comment.name}</strong> - ${comment.email} - ${comment.body}`
    );
});

// Task 4: Load Albums
document.getElementById('loadAlbums').addEventListener('click', () => {
    fetchDataAndUpdateList(
        'loadAlbums',
        'https://jsonplaceholder.typicode.com/albums',
        'albumList',
        album => `<strong>${album.title}</strong>`
    );
});

// Activate the reset button
document.getElementById('resetButton').addEventListener('click', () => {
    window.location.reload();
});

