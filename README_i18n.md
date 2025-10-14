# 国际化 (i18n) 使用指南

本项目已配置完整的国际化支持，使用 `next-intl` 库。

## 支持的语言

- `en` - English (英语) - 默认语言
- `zh` - 中文

## 项目结构

```
plax/
├── app/
│   └── [locale]/          # 动态语言路由
│       ├── layout.js      # 语言布局
│       ├── page.js        # 首页
│       └── ...            # 其他页面
├── i18n/
│   └── request.js         # i18n 配置
├── messages/              # 翻译文件
│   ├── en.json           # 英文翻译
│   └── zh.json           # 中文翻译
├── components/
│   └── LanguageSwitcher.js  # 语言切换组件
└── middleware.js          # 国际化中间件
```

## 路由规则

- 英语（默认语言）：`/about`, `/contact` 等
- 中文：`/zh/about`, `/zh/contact` 等

## 使用方法

### 1. 在组件中使用翻译

#### 客户端组件

```javascript
"use client";

import { useTranslations } from "next-intl";

const MyComponent = () => {
  const t = useTranslations("common");

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>{t("about")}</p>
    </div>
  );
};

export default MyComponent;
```

#### 服务器组件

```javascript
import { useTranslations } from "next-intl";

const MyServerComponent = () => {
  const t = useTranslations("common");

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>{t("about")}</p>
    </div>
  );
};

export default MyServerComponent;
```

### 2. 添加语言切换器

在任何布局或组件中添加语言切换器：

```javascript
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  return (
    <header>
      {/* 其他头部内容 */}
      <LanguageSwitcher />
    </header>
  );
};
```

### 3. 获取当前语言

#### 在客户端组件中

```javascript
"use client";

import { useLocale } from "next-intl";

const MyComponent = () => {
  const locale = useLocale(); // 'en' 或 'zh'

  return <div>Current locale: {locale}</div>;
};
```

#### 在服务器组件中

```javascript
import { getLocale } from "next-intl/server";

const MyServerComponent = async () => {
  const locale = await getLocale();

  return <div>Current locale: {locale}</div>;
};
```

### 4. 链接和导航

使用 Next.js 的 `Link` 组件会自动处理语言前缀：

```javascript
import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">首页</Link>
      <Link href="/about">关于</Link>
      <Link href="/contact">联系</Link>
    </nav>
  );
};
```

编程式导航：

```javascript
"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const MyComponent = () => {
  const router = useRouter();
  const locale = useLocale();

  const navigate = () => {
    // 会自动添加语言前缀
    router.push("/about");
  };

  return <button onClick={navigate}>Go to About</button>;
};
```

## 翻译文件结构

翻译文件使用嵌套的 JSON 结构：

### messages/en.json

```json
{
  "common": {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
  },
  "nav": {
    "home": "Home",
    "pages": "Pages"
  },
  "hero": {
    "title": "Welcome to Plax",
    "subtitle": "Finance & Fintech Template"
  }
}
```

### messages/zh.json

```json
{
  "common": {
    "home": "首页",
    "about": "关于",
    "contact": "联系"
  },
  "nav": {
    "home": "首页",
    "pages": "页面"
  },
  "hero": {
    "title": "欢迎来到 Plax",
    "subtitle": "金融科技模板"
  }
}
```

## 使用带参数的翻译

### 翻译文件

```json
{
  "welcome": {
    "greeting": "Hello, {name}!",
    "message": "You have {count} new messages"
  }
}
```

### 组件中使用

```javascript
const t = useTranslations('welcome');

// 简单参数
<p>{t('greeting', { name: 'John' })}</p>
// 输出: Hello, John!

// 带数字参数
<p>{t('message', { count: 5 })}</p>
// 输出: You have 5 new messages
```

## 使用富文本翻译

### 翻译文件

```json
{
  "richText": {
    "message": "Visit <link>our website</link> for more info"
  }
}
```

### 组件中使用

```javascript
import Link from "next/link";

const t = useTranslations("richText");

<p>
  {t.rich("message", {
    link: (chunks) => <Link href="/info">{chunks}</Link>,
  })}
</p>;
```

## 添加新语言

1. 在 `i18n/request.js` 中添加语言代码：

```javascript
export const locales = ["en", "zh", "es"]; // 添加西班牙语
```

2. 在 `middleware.js` 中更新匹配器：

```javascript
export const config = {
  matcher: ["/", "/(zh|en|es)/:path*"], // 添加 es
};
```

3. 创建新的翻译文件：

```
messages/es.json
```

4. 在 `LanguageSwitcher.js` 中添加新语言选项：

```javascript
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];
```

## SEO 和元数据

### 页面元数据

```javascript
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

// 生成动态元数据
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
```

在翻译文件中添加：

```json
{
  "metadata": {
    "title": "Plax - Finance & Fintech Template",
    "description": "Modern finance and fintech template"
  }
}
```

## 最佳实践

1. **命名空间组织**：将翻译按功能或页面分组

   ```javascript
   const tCommon = useTranslations("common");
   const tNav = useTranslations("nav");
   const tHero = useTranslations("hero");
   ```

2. **保持一致性**：使用相同的键名结构

   ```json
   {
     "page": {
       "title": "...",
       "description": "...",
       "cta": "..."
     }
   }
   ```

3. **避免硬编码文本**：所有用户可见的文本都应该来自翻译文件

4. **使用有意义的键名**：

   ```javascript
   // ✅ 好
   t("hero.primaryButton");

   // ❌ 不好
   t("btn1");
   ```

5. **默认值**：为翻译提供默认值
   ```javascript
   t("key", { defaultValue: "Fallback text" });
   ```

## 调试

### 查看当前语言

在浏览器控制台：

```javascript
document.documentElement.lang;
```

### 查看加载的翻译

```javascript
"use client";
import { useMessages } from "next-intl";

const DebugComponent = () => {
  const messages = useMessages();
  console.log("Loaded messages:", messages);
  return null;
};
```

## 常见问题

### Q: 页面切换语言后样式丢失？

A: 确保在 `app/[locale]/layout.js` 中正确导入了所有样式文件。

### Q: 如何处理日期和数字格式化？

A: 使用 `next-intl` 的格式化功能：

```javascript
import { useFormatter } from "next-intl";

const MyComponent = () => {
  const format = useFormatter();

  return (
    <div>
      {format.dateTime(new Date(), { dateStyle: "long" })}
      {format.number(1234.56, { style: "currency", currency: "USD" })}
    </div>
  );
};
```

### Q: 如何处理多行文本？

A: 在 JSON 中使用数组：

```json
{
  "description": ["First paragraph", "Second paragraph"]
}
```

或使用 `\n`：

```json
{
  "description": "First line\nSecond line"
}
```

## 开发命令

```bash
# 开发模式（支持所有语言）
pnpm dev

# 构建生产版本
pnpm build

# 运行生产服务器
pnpm start
```

## 相关资源

- [next-intl 文档](https://next-intl-docs.vercel.app/)
- [Next.js 国际化](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
