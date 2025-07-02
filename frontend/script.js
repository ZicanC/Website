document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cms.example.com/api/posts')
    .then((res) => res.json())
    .then((data) => {
      const list = document.querySelector('#posts ul');
      data.forEach((post) => {
        const li = document.createElement('li');
        li.textContent = post.title;
        list.appendChild(li);
      });
    })
    .catch((err) => {
      console.error('获取文章失败:', err);
    });
});
