# Cursor Rules for Plax Project

这个目录包含了 Plax 项目的 Cursor AI 规则，用于帮助 AI 更好地理解和协助开发这个项目。

## 规则文件

### 1. `project-structure.mdc` (始终应用)

**描述**: 项目整体结构和架构指南

**内容**:

- 项目技术栈概述（Next.js 14.2, React 18, GSAP, Swiper）
- 目录结构说明
- 路径别名配置
- 开发命令

**应用场景**: 所有请求

---

### 2. `javascript-standards.mdc`

**描述**: JavaScript/JSX 编码规范和最佳实践

**内容**:

- 组件定义和导出规范
- 导入顺序约定
- 命名规范（组件、函数、变量）
- JSX 编写规范
- 事件处理模式
- GSAP 动画使用规范
- 性能优化建议

**应用场景**: 所有 `.js` 和 `.jsx` 文件

---

### 3. `git-commit.mdc` (始终应用)

**描述**: Git commit 消息规范

**内容**:

- Conventional Commits 格式
- commit type 类型说明
- scope 范围定义
- commit 消息示例
- 提交最佳实践

**应用场景**: 所有 Git 提交操作

**重要**: Commit 消息必须使用英文

---

### 4. `nextjs-best-practices.mdc`

**描述**: Next.js 14 App Router 最佳实践

**内容**:

- 服务器组件 vs 客户端组件
- 布局和页面结构
- 路由和导航
- 数据获取模式
- 图片优化
- 元数据和 SEO
- 性能优化
- GSAP 集成
- 错误处理

**应用场景**: `app/`, `components/`, `layouts/` 目录下的 `.js` 文件

---

### 5. `styling-guide.mdc`

**描述**: 样式开发指南

**内容**:

- CSS/SCSS 架构说明
- CSS 类名规范（BEM with `mil-` prefix）
- 响应式设计（Bootstrap Grid）
- 颜色系统
- 字体系统
- 动画和过渡
- 组件样式模式
- 性能优化

**应用场景**: `.css`, `.scss` 文件，以及 `app/` 和 `components/` 目录下的 `.js` 文件

---

## 规则应用方式

### 自动应用

以下规则会自动应用到所有请求：

- `project-structure.mdc`
- `git-commit.mdc`

### 基于文件类型应用

以下规则会根据文件类型自动应用：

- `javascript-standards.mdc` → `*.js`, `*.jsx`
- `nextjs-best-practices.mdc` → `app/**/*.js`, `components/**/*.js`, `layouts/**/*.js`
- `styling-guide.mdc` → `*.css`, `*.scss`, `app/**/*.js`, `components/**/*.js`

### 手动触发

如果某个规则没有自动应用，您可以在对话中提及规则名称或相关主题来触发它。

---

## 如何修改规则

1. 直接编辑 `.cursor/rules/*.mdc` 文件
2. 修改文件开头的 frontmatter 来控制应用方式：
   ```yaml
   ---
   alwaysApply: true # 始终应用
   ---
   ```
   或
   ```yaml
   ---
   globs: *.js,*.jsx  # 基于文件类型应用
   ---
   ```
   或
   ```yaml
   ---
   description: "规则描述" # 基于描述手动应用
   ---
   ```

---

## 语言约定

- **规则内容**: 中文
- **代码示例**: 英文
- **Git commit 消息**: 英文（Conventional Commits）
- **代码注释**: 中文

---

## 更新历史

- **2024-10**: 初始创建
  - 创建项目结构规则
  - 创建 JavaScript 编码规范
  - 创建 Git commit 规范
  - 创建 Next.js 最佳实践
  - 创建样式开发指南
