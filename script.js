const blogData = [
  {
    title: "First Blog Post",
    date: "January 1, 2022",
    content: "This is content of the first blog page.",
  },
  {
    title: "Second Blog Post",
    date: "February 1, 2022",
    content: "This is the content of the second blog post",
  },
  {
    title: "Third Blog Post",
    date: " March 1, 2022",
    content: "This is content of the third blog page.",
  },
];

function addBlog(blog) {
  const blogPost = document.createElement("div");
  blogPost.className = "blog-post";

  const blogHeader = document.createElement("div");
  blogHeader.className = "blog-header";

  const blogButtons = document.createElement("div");
  blogButtons.className = "blog-buttons";

  const blogBox = document.createElement("div");
  blogBox.className = "blog-box";

  const moveUpButton = document.createElement("button");
  moveUpButton.className = "move-up";
  moveUpButton.className = "blog-button";
  moveUpButton.textContent = "move up";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.className = "blog-button";
  deleteButton.textContent = "delete";

  const moveDownButton = document.createElement("button");
  moveDownButton.className = "move-down";
  moveDownButton.className = "blog-button";
  moveDownButton.textContent = "move down";

  const blogTitle = document.createElement("h2");
  blogTitle.className = "blog-title";
  blogTitle.textContent = blog.title;

  const blogDate = document.createElement("p");
  blogDate.className = "blog-date";
  blogDate.textContent = blog.date;

  const blogContent = document.createElement("p");
  blogContent.className = "blog-content";
  blogContent.textContent = blog.content;

  blogHeader.append(blogTitle, blogDate);
  blogPost.append(blogHeader, blogContent);

  const blogList = document.querySelector(".blog-list");

  blogButtons.append(moveUpButton, moveDownButton, deleteButton);
  blogBox.append(blogPost, blogButtons);
  blogList.appendChild(blogBox);

  moveUpButton.addEventListener("click", () => moveBlogUp(blogBox));
  moveDownButton.addEventListener("click", () => moveBlogDown(blogBox));
  deleteButton.addEventListener("click", () => deleteBlog(blogBox));

  function moveBlogUp(blogBox) {
    const previousElement = blogBox.previousElementSibling;
    if (previousElement) {
      blogBox.parentElement.insertBefore(blogBox, previousElement);
    }
  }

  function moveBlogDown(blogBox) {
    const nextElement = blogBox.nextElementSibling;
    if (nextElement) {
      blogBox.parentElement.insertBefore(nextElement, blogBox);
    }
  }

  function deleteBlog(blogBox) {
    blogBox.remove();
  }
}

blogData.forEach((element) => {
  addBlog(element);
});
