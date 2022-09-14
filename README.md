## 移动端项目脚手架

### 简介
基于vite搭建的移动端脚手架，暂定整合了Vant框架。

### 功能

- 🍒 集成 [Vant UI](https://vant-contrib.gitee.io/)
- 🍑 集成登陆、注销及权限验证
- 🍐 集成多环境配置，dev、测试、生产环境
- 🍎 集成 `eslint + prettier`，代码约束和格式化统一
- 🍌 集成 `husky + commitlint`，代码提交规范化
- 🍉 集成 `mock` 接口服务，dev 环境和发布环境都支持，可动态配置是否启用 mock 服务，不启用时不会加载 mock 包，减少打包体积
- 🍍 集成 `pinia`，vuex 的替代方案，轻量、简单、易用
- 📦 集成 `unplugin` 插件，自动导入，解放双手，开发效率直接起飞
- 🤹 集成 `iconify` 图标，支持自定义 svg 图标, 优雅使用 icon
- 🍇 集成 `unocss`，antfu 开源的原子 css 解决方案，非常轻量

### 快速开始

```shell
# 推荐配置git autocrlf 为 false（本项目规范使用lf换行符，此配置是为防止git自动将源文件转换为crlf）
# 不清楚为什么要这样做的请参考这篇文章：https://www.freesion.com/article/4532642129
git config --global core.autocrlf false

# 克隆项目
git clone git@code-base.yoyohr.com:youpin-frontend-team/sz-environmental-protection-admin.git

# 进入项目目录
cd sz-environmental-protection-admin

# 安装依赖(建议使用pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # 装了可忽略
pnpm i # 或者 npm i

# 启动
pnpm dev
```

### 构建发布

```shell
# 构建测试环境
pnpm build:test

# 构建github pages环境
pnpm build:github

# 构建生产环境
pnpm build
```

### 其他指令

```shell
# 请确保执行一下命令，让系统有权限执行预提交脚本
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

```shell
# eslint代码格式检查
pnpm lint

# 代码检查并修复
pnpm lint:fix

# 预览发布包效果（需先执行构建指令）
pnpm preview

# 提交代码（husky+commitlint）
pnpm cz
```