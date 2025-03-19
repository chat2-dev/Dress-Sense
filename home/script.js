document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const blogsContainer = document.getElementById('blogs-container');
    const saveBlogsButton = document.getElementById('save-blogs');

    blogForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('blog-title').value;
        const content = document.getElementById('blog-content').value;
        const category = document.getElementById('blog-category').value;

        const blog = {
            title,
            content,
            category,
            date: new Date().toLocaleDateString()
        };

        saveBlog(blog);
        blogForm.reset();
    });

    function saveBlog(blog) {
        let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        displayBlogs();
    }

    function displayBlogs() {
        if (blogsContainer) {
            blogsContainer.innerHTML = '';
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            blogs.forEach(blog => {
                const blogElement = document.createElement('div');
                blogElement.classList.add('blog');
                blogElement.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                    <small>${blog.date}</small>
                    <p>Category: ${blog.category}</p>
                `;
                blogsContainer.appendChild(blogElement);
            });
        }
    }

    function displayCategoryBlogs(category) {
        const categoryBlogs = JSON.parse(localStorage.getItem(`${category}.html`)) || [];
        const categoryContainer = document.getElementById('category-blogs-container');
        if (categoryContainer) {
            categoryContainer.innerHTML = '';
            categoryBlogs.forEach(blog => {
                const blogElement = document.createElement('div');
                blogElement.classList.add('blog');
                blogElement.innerHTML = `
                    <h3>${blog.title}</h3>
                    <p>${blog.content}</p>
                    <small>${blog.date}</small>
                    <p>Category: ${blog.category}</p>
                `;
                categoryContainer.appendChild(blogElement);
            });
        }
    }

    if (saveBlogsButton) {
        saveBlogsButton.addEventListener('click', () => {
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            const blob = new Blob([JSON.stringify(blogs, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'blogs.json';
            a.click();
            URL.revokeObjectURL(url);
        });
    }

    displayBlogs();

    // Check if the page is a category page and display category blogs
    const category = document.body.getAttribute('data-category');
    if (category) {
        displayCategoryBlogs(category);
    }
});
