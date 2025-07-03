document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:1337/api/posts')
    .then((res) => res.json())
    .then((data) => {
      const list = document.querySelector('#posts ul');
      data.data.forEach((entry) => {
        const { title } = entry.attributes;
        const li = document.createElement('li');
        li.textContent = title;
        list.appendChild(li);
      });
    })
    .catch((err) => {
      console.error('获取文章失败:', err);
    });
});
