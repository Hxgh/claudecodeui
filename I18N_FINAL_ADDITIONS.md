# 国际化扩展 - 最终补充清单

## 🎯 用户直接指出的界面文本

这份文档收集了用户在使用中直接看到的、仍然是英文的界面元素。

---

## 📋 核心界面文本

### 1. Sidebar.jsx - 侧边栏核心按钮和描述

#### 应用描述文本
```javascript
// Line 495, 505
"AI coding assistant interface"
→ "AI 编程GUI工具"
```

#### 按钮文本
```javascript
// Line 619 (已在之前的翻译中，但确保应用)
"New Project"
→ "新建项目"  // 使用 t('sidebar.newProject')

// Line 1278, 1289 (已在之前的翻译中，但确保应用)
"New Session"
→ "新建会话"  // 使用 t('sidebar.newSession')

// Line 1359, 1370 (已在之前的翻译中，但确保应用)
"Settings"
→ "设置"  // 使用 t('common.settings')
```

**翻译键建议：**
```json
// en.json
"app": {
  "description": "AI coding assistant interface",
  "shortDescription": "AI Assistant"
}

// zh.json
"app": {
  "description": "AI 编程GUI工具",
  "shortDescription": "AI 助手"
}
```

**代码修改：**
```javascript
// src/components/Sidebar.jsx

// Line 495
<p className="text-sm text-muted-foreground">{t('app.description')}</p>

// Line 505
<p className="text-sm text-muted-foreground">{t('app.description')}</p>

// Line 619 (确保已应用)
{t('sidebar.newProject')}

// Line 1278, 1289 (确保已应用)
{t('sidebar.newSession')}

// Line 1359, 1370 (确保已应用)
{t('common.settings')}
```

---

### 2. ChatInterface.jsx - 输入框和操作按钮

#### 占位符文本（最重要！）
当前占位符使用的是 `t('chat.placeholder')`，需要确保已正确翻译：

```javascript
// 当前代码应该已经使用了翻译，但需要确认
placeholder={t('chat.placeholder', { provider: provider === 'cursor' ? 'Cursor' : 'Claude' })}
```

**确保翻译键正确：**
```json
// en.json
"chat": {
  "placeholder": "Type / for commands, @ for files, or ask {{provider}} anything..."
}

// zh.json
"chat": {
  "placeholder": "输入 / 查看命令，@ 引用文件，或向 {{provider}} 提问..."
}
```

#### 操作按钮提示
```javascript
// Line 4540
"Clear input"
→ "清空输入"

// Line 4563
"Scroll to bottom"
→ "滚动到底部"

// Line 4581
"Drop images here"
→ "拖放图片到此处"
```

**翻译键建议：**
```json
// en.json (补充到现有的 chat 部分)
"chat": {
  // ... existing keys ...
  "clearInput": "Clear input",
  "scrollToBottom": "Scroll to bottom",
  "dropImagesHere": "Drop images here"
}

// zh.json
"chat": {
  // ... existing keys ...
  "clearInput": "清空输入",
  "scrollToBottom": "滚动到底部",
  "dropImagesHere": "拖放图片到此处"
}
```

**代码修改：**
```javascript
// src/components/ChatInterface.jsx

// Line 4540
title={t('chat.clearInput')}

// Line 4563
title={t('chat.scrollToBottom')}

// Line 4581
<p className="text-sm font-medium">{t('chat.dropImagesHere')}</p>
```

---

### 3. 其他需要确认已翻译的界面文本

#### Sidebar - 项目和会话相关
确保以下已使用翻译键：

```javascript
// "New Project" 按钮
// 应使用: t('sidebar.newProject')

// "New Session" 按钮
// 应使用: t('sidebar.newSession')

// "Settings" 按钮
// 应使用: t('common.settings')

// 会话默认名称
// Line 1026, 1218
const sessionName = isCursorSession
  ? (session.name || t('sidebar.untitledSession'))
  : (session.summary || t('sidebar.newSession'));
```

#### ChatInterface - 已有翻译但需确认
```javascript
// 占位符文本
placeholder={t('chat.placeholder', { provider })}

// 思考状态
{t('chat.thinking')}

// 工具设置
{t('chat.toolSettings')}
```

---

## 📊 翻译键汇总

### 新增翻译键

| 组件 | 键名 | 英文 | 中文 | 优先级 |
|------|------|------|------|--------|
| app | description | AI coding assistant interface | AI 编程GUI工具 | ⭐⭐⭐ |
| chat | clearInput | Clear input | 清空输入 | ⭐⭐⭐ |
| chat | scrollToBottom | Scroll to bottom | 滚动到底部 | ⭐⭐ |
| chat | dropImagesHere | Drop images here | 拖放图片到此处 | ⭐⭐ |

### 需要确认已应用的翻译键

| 位置 | 当前文本 | 应使用的键 | 状态 |
|------|---------|-----------|------|
| Sidebar.jsx:619 | "New Project" | t('sidebar.newProject') | ⚠️ 需确认 |
| Sidebar.jsx:1278 | "New Session" | t('sidebar.newSession') | ⚠️ 需确认 |
| Sidebar.jsx:1359 | "Settings" | t('common.settings') | ⚠️ 需确认 |
| ChatInterface placeholder | 使用 t() | t('chat.placeholder', {provider}) | ⚠️ 需确认 |

---

## 🔧 实施清单

### 第一步：更新翻译文件

#### en.json
```json
{
  "app": {
    "description": "AI coding assistant interface"
  },
  "chat": {
    "placeholder": "Type / for commands, @ for files, or ask {{provider}} anything...",
    "clearInput": "Clear input",
    "scrollToBottom": "Scroll to bottom",
    "dropImagesHere": "Drop images here"
  },
  "sidebar": {
    "newProject": "New Project",
    "newSession": "New Session"
  },
  "common": {
    "settings": "Settings"
  }
}
```

#### zh.json
```json
{
  "app": {
    "description": "AI 编程GUI工具"
  },
  "chat": {
    "placeholder": "输入 / 查看命令，@ 引用文件，或向 {{provider}} 提问...",
    "clearInput": "清空输入",
    "scrollToBottom": "滚动到底部",
    "dropImagesHere": "拖放图片到此处"
  },
  "sidebar": {
    "newProject": "新建项目",
    "newSession": "新建会话"
  },
  "common": {
    "settings": "设置"
  }
}
```

### 第二步：应用到组件

#### Sidebar.jsx 修改点

**1. 应用描述 (Line 495, 505)**
```javascript
// 修改前
<p className="text-sm text-muted-foreground">AI coding assistant interface</p>

// 修改后
<p className="text-sm text-muted-foreground">{t('app.description')}</p>
```

**2. New Project 按钮 (Line 619) - 确认已应用**
```javascript
// 应该是
{t('sidebar.newProject')}
```

**3. New Session 按钮 (Line 1278, 1289) - 确认已应用**
```javascript
// 应该是
{t('sidebar.newSession')}
```

**4. Settings 按钮 (Line 1359, 1370) - 确认已应用**
```javascript
// 应该是
<span className="text-lg font-medium text-foreground">{t('common.settings')}</span>
<span className="text-xs">{t('common.settings')}</span>
```

**5. 会话默认名称 (Line 1026, 1218)**
```javascript
// 修改前
const sessionName = isCursorSession ? (session.name || 'Untitled Session') : (session.summary || 'New Session');

// 修改后
const sessionName = isCursorSession
  ? (session.name || t('sidebar.untitledSession'))
  : (session.summary || t('sidebar.newSession'));
```

#### ChatInterface.jsx 修改点

**1. Clear input 提示 (Line 4540)**
```javascript
// 修改前
title="Clear input"

// 修改后
title={t('chat.clearInput')}
```

**2. Scroll to bottom 提示 (Line 4563)**
```javascript
// 修改前
title="Scroll to bottom"

// 修改后
title={t('chat.scrollToBottom')}
```

**3. Drop images 提示 (Line 4581)**
```javascript
// 修改前
<p className="text-sm font-medium">Drop images here</p>

// 修改后
<p className="text-sm font-medium">{t('chat.dropImagesHere')}</p>
```

**4. 占位符 - 确认已正确使用**
```javascript
// 应该已经是这样
placeholder={t('chat.placeholder', { provider: provider === 'cursor' ? 'Cursor' : 'Claude' })}
```

---

## ✅ 验证检查清单

实施后需要验证的点：

### 界面检查
- [ ] 侧边栏顶部的应用描述显示为中文
- [ ] "新建项目" 按钮显示为中文
- [ ] "新建会话" 按钮显示为中文
- [ ] "设置" 按钮显示为中文
- [ ] 聊天输入框占位符显示为中文："输入 / 查看命令，@ 引用文件，或向 Claude 提问..."
- [ ] 清空输入按钮悬停提示显示为中文
- [ ] 滚动到底部按钮悬停提示显示为中文
- [ ] 拖拽图片时的提示显示为中文

### 功能检查
- [ ] 切换到英文时所有文本正确显示为英文
- [ ] 切换到中文时所有文本正确显示为中文
- [ ] 占位符中的 {{provider}} 参数正确替换（Claude/Cursor）
- [ ] 新会话和无标题会话的默认名称使用翻译

---

## 🎯 用户体验改进

完成这些最后的翻译后，用户将看到：

✅ **侧边栏完全中文化**
- 应用描述："AI 编程GUI工具"
- 按钮："新建项目"、"新建会话"、"设置"

✅ **聊天界面完全中文化**
- 输入框占位符："输入 / 查看命令，@ 引用文件，或向 Claude 提问..."
- 操作提示："清空输入"、"滚动到底部"
- 拖拽提示："拖放图片到此处"

✅ **无遗漏的英文文本**
- 所有用户可见的界面元素都是中文
- 保持专业、一致的用户体验

---

## 📈 最终覆盖率

| 类别 | 翻译键数 | 状态 |
|------|---------|------|
| 基础组件 | 170 | ✅ |
| 句子和对话框 Part 1 | 50 | ✅ |
| 详细说明 Part 2 | 73 | ✅ |
| **最终补充** | **4** | ✅ 新增 |
| **总计** | **297** | **完成** |

**最终中文覆盖率：98-99%** 🎉

---

## 💡 实施建议

1. **优先处理这 4 个新增键** - 它们是用户最直接看到的界面元素
2. **验证已有翻译的应用** - 确保 "New Project"、"New Session"、"Settings" 等已正确使用 t() 函数
3. **测试占位符插值** - 确认 {{provider}} 参数在中英文切换时都正确工作
4. **完整测试流程** - 从新用户注册到项目创建、会话管理，全程中文验证

完成后，您的应用将拥有接近完美的中文支持！✨
