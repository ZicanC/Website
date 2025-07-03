document.addEventListener('DOMContentLoaded', () => {
  // 请求同域名下的 Strapi 接口，可通过 nginx 转发到实际后端
  fetch('/api/posts')
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
