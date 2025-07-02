# Strapi Backend

该目录提供通过 Docker 运行 [Strapi](https://github.com/strapi/strapi) 的示例配置。

## 使用方法

1. 安装好 Docker 与 docker-compose。
2. 在此目录下执行 `docker-compose up` 启动服务。
3. 首次启动后，访问 <http://localhost:1337/admin> 创建管理员账户。
4. 在管理后台中使用 Content-Type Builder 新建 `post` 集合类型，包含 `title`(文本)、`content`(富文本) 和 `image`(媒体) 字段，并在权限设置中开放公共读取权限。
5. 完成后，文章接口将位于 <http://localhost:1337/api/posts>。
