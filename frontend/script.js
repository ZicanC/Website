document.addEventListener('DOMContentLoaded', () => {
  const base = window.API_BASE_URL || 'http://localhost:1337';
  fetch(`${base}/posts`)
    .then((res) => res.json())
    .then((data) => {
      const list = document.querySelector('#posts ul');
      const entries = Array.isArray(data) ? data : data.data;
      entries.forEach((entry) => {
        const title = entry.title || (entry.attributes && entry.attributes.title);
        if (!title) return;
        const li = document.createElement('li');
        li.textContent = title;
        list.appendChild(li);
      });
    })
    .catch((err) => {
      console.error('获取文章失败:', err);
    });
});
