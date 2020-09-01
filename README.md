# yy-react-base

<h1 align="center">Welcome to yy-react-base</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## 🏠 [Homepage](https://github.com/yaoyao1987/yy-react-base)

学习组件库搭建，参考链接

1. [可能是最详细的 React 组件库搭建总结](https://juejin.im/post/6844904160568016910)
2. [是时候搭建你们团队的 UI 组件库了](https://juejin.im/post/6844904200359378958)
3. [art-ui](https://github.com/art-design-ui/art-ui)
4. [你真的懂`npm publish`？](https://juejin.im/post/6844904037377114119)
5. [2020 Create React App 开始一个 UI 组件库](https://juejin.im/post/6844904045862191118)
6. [在 Typescript 项目中，如何优雅的使用 ESLint 和 Prettier](https://github.com/forthealllight/blog/issues/45)
7. [https://mp.weixin.qq.com/s/qpUlllsMvMH0Gc88QJ66Fg](https://mp.weixin.qq.com/s/qpUlllsMvMH0Gc88QJ66Fg)
8. [前端 UI 组件库搭建指南](https://zhuanlan.zhihu.com/p/94920464)

   用 ESLint 来规范 Typescript 代码  
   用 ESLint 来规范 React 代码  
   结合 Prettier 和 ESLint 来规范代码  
   在 VSCode 中使用 ESLint  
   husky 和 lint-staged 构建代码工作流  
   travis 来规范代码

```
dist：UMD格式，兼容 window 或 global ,同时也兼容 AMD、CommonJS格式
es：ES2015 的风格的模块
lib：CommonJS 格式
```

### 技术栈

> 技术栈严格要求以下形式，注意切不可用`React Class`来书写组件

- 🌈React-Hooks
- 🛡Typescript
- 🎨Less
- 📦Jest

### 开发流程

在你 clone 了**yy-react-base**的代码并且使用**npm install**安装完依赖后，你还可以运行下面几个常用的命令：

- **yarn run docs**在本地开发时,查看文档
- **npm run lint**检查代码风格。
- **npm test**运行测试。(在运行测试前请确保 NODE_ENV 环境变量没有被设定，否则可能会引发一些问题)
- **yarn run test:coverage**查看测试覆盖率
- **npm run build**编译 TypeScript 代码到 lib 和 es 目录，构建 yy 的 UMD 版本到 dist 目录。

### API 文档

> 组件声明 Props 注释每个类型，`react-docgen-typescript-loader`插件会自动读取

```typescript
interface BaseButtonProps {
  className?: string
  /** 设置 Button 的禁用 */
  disabled?: boolean
  /** 设置 Button 的尺寸 */
  size?: ButtonSize
  /** 设置 Button 的类型 */
  type?: ButtonType
  children: React.ReactNode
  href?: string
}
```

#### 初始默认值

> 通过类的 defaultProps 属性初始化默认值

```typescript
Button.defaultProps = {
  disabled: false,
}
```

### 提交

#### 提交前

> 在你发送 Pull Request 之前，请确认你是按照下面的步骤来做的：

- 基于**正确的分支**做修改。
- 在项目根目录下运行了**npm install**。
- 如果你修复了一个**bug**或者新增了一个功能，请确保写了相应的测试，这很重要。
- 确认所有的测试都是通过的**npm run test**。 小贴士：开发过程中可以用 npm test -- --watch TestName 来运行指定的测试。
- 运行**npm test:update**来更新 jest snapshot 并且把这些更新也提交上来（如果有的话）。
- 确保你的代码通过了**lint**检查**npm run lint**. 小贴士: Lint 会在你 git commit 的时候自动运行（通过 Git Hooks）。

#### git 提交流程

1. git fetch
2. git merge 远程仓库
3. git status 查看状态
4. git add . 将所有修改加入暂存区
5. yarn run commit
6. git push 将本地仓库代码更新到 远程仓库

## 性能监控?

[Lighthouse 测试内幕](https://juejin.im/post/6844903992380637198)
