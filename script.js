const getPosts = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const data = await response.json()
        const div = document.getElementById('post-data');
        const ul = document.createElement('ul');
        div.innerHTML = '';
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${element.title}</strong> <br> ${element.body}<br><br>`;
            ul.appendChild(li);            
        });
        div.appendChild(ul);
    } catch (error) {
        console.log(error);
    }
}

