document.addEventListener('DOMContentLoaded', () => {
  const base = window.API_BASE_URL || 'http://localhost:1337';
  fetch(`${base}/api/posts`)
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
