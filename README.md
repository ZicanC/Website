# 个人网站项目



## 前端

`frontend/` 目录下存放静态页面，可直接在浏览器中打开 `index.html` 预览效果。页面展示了图片画廊和从后端获取的文章列表。

## 配置

前端使用 `frontend/config.js` 提供可配置的 API 基础地址。你可以在加载脚本前设置
`window.CONFIG = { API_BASE_URL: 'http://your-server:1337' }`，或在运行环境中设置
`API_BASE_URL` 变量。未配置时默认使用 `http://localhost:1337`。

`index.html` 已在引入 `script.js` 前加载 `config.js`，脚本会读取该地址来请求文章数据。

## 推荐的后端：Strapi

- 仓库地址：<https://github.com/strapi/strapi>
- 运行环境：Node.js
- 主要优势：支持内容管理、文件上传、REST 与 GraphQL API，社区活跃。

### 快速开始
1. 全局安装 `yarn`：`npm install -g yarn`
2. 克隆仓库并安装依赖：
   ```bash
   git clone https://github.com/strapi/strapi.git
   cd strapi
   yarn install
   ```
3. 运行示例项目：
   ```bash
   yarn build --clean
   yarn develop
   ```
4. 根据 Strapi 文档创建 `Post` 内容类型，启用公开读取权限，随后在 `frontend/script.js` 中将 `fetch` 地址改为实际接口地址。

如果你希望通过 Docker 同时启动前端与后端，可在仓库根目录执行：

```bash
docker-compose up
```

此命令会使用 `docker-compose.yml` 运行 Nginx 与 Strapi，前端将通过 <http://localhost:3000> 提供，后台仍在 <http://localhost:1337>。

若只想启动 Strapi 后端，可执行：

```bash
npm run backend
```

该命令会使用 `backend/docker-compose.yml` 配置并在本地启动服务。

更多配置及部署方式请参考 [Strapi 官方文档](https://docs.strapi.io/)。

## 使用 1Panel 管理服务器

你可以通过开源面板 [1Panel](https://github.com/1Panel-dev/1Panel) 对服务器
进行运维管理。本仓库在 `docker-compose.yml` 中已加入 `1panel` 服务，基于
`xeath/1panel-in-docker` 镜像运行。默认使用宿主网络并挂载 Docker 相关目录：

```bash
docker-compose up -d 1panel
```

首次启动会按容器内脚本安装 1Panel，安装完成后可在浏览器访问
`http://<宿主机IP>:8888`（或日志中提示的端口）。如需自定义面板端口等环境
变量，可在 `docker-compose.yml` 中调整 `PANEL_PORT` 等设置。

