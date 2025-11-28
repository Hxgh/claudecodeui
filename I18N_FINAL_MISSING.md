# 国际化最终补充 - 遗漏的界面文本

## 🎯 用户直接指出的遗漏文本

这些是用户在界面上看到的英文文本，需要立即翻译。

---

## 📋 关键遗漏文本清单

### 1. Sidebar.jsx - 侧边栏核心文本

#### "AI coding assistant interface"
```javascript
// Line 495, 505
<p className="text-sm text-muted-foreground">AI coding assistant interface</p>

// 翻译
→ "AI 编程GUI工具"
```

#### "New Project" (按钮文本)
```javascript
// Line 619
New Project

// 翻译
→ "新建项目"  // 已在翻译键中，需要应用
```

#### "New Session" (按钮和默认名称)
```javascript
// Line 1026, 1218, 1278, 1289
'New Session'

// 翻译
→ "新建会话"  // 已在翻译键中，需要应用
```

#### "Settings" (设置按钮)
```javascript
// Line 1359, 1370
<span className="text-lg font-medium text-foreground">Settings</span>
<span className="text-xs">Settings</span>

// 翻译
→ "设置"  // 已在翻译键中，需要应用
```

---

### 2. ChatInterface.jsx - 聊天界面输入提示

#### 输入框占位符 (已翻译但未应用)
```javascript
// 当前已有翻译键：
"chat.placeholder": "Type / for commands, @ for files, or ask {{provider}} anything..."
// 中文：
"输入 / 查看命令，@ 引用文件，或向 {{provider}} 提问..."

// 需要确认是否已应用
```

#### "Drop images here"
```javascript
// Line 4581
<p className="text-sm font-medium">Drop images here</p>

// 翻译
→ "拖放图片到此处"
```

#### "Clear input"
```javascript
// Line 4540
title="Clear input"

// 翻译
→ "清空输入"  // 已在翻译键中
```

#### "Scroll to bottom"
```javascript
// Line 4563
title="Scroll to bottom"

// 翻译
→ "滚动到底部"  // 已在翻译键中
```

#### Permission Mode 文本
```javascript
// Line 4467-4470
{permissionMode === 'default' && 'Default Mode'}
{permissionMode === 'acceptEdits' && 'Accept Edits'}
{permissionMode === 'bypassPermissions' && 'Bypass Permissions'}
{permissionMode === 'plan' && 'Plan Mode'}

// 翻译
→ "默认模式"
→ "接受编辑"
→ "绕过权限"
→ "计划模式"
```

#### "Implementation Plan"
```javascript
// Line 1060
<span className="font-medium">Implementation Plan</span>

// 翻译
→ "实施计划"
```

---

### 3. QuickSettingsPanel.jsx - 快速设置面板

#### "Quick Settings"
```javascript
// Line 83
Quick Settings

// 翻译
→ "快速设置"
```

#### "Appearance Settings"
```javascript
// Line 89
{/* Appearance Settings */}

// 翻译
→ "外观设置"
```

#### "Tool Display Settings"
```javascript
// Line 104
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tool Display</h4>

// 翻译
→ "工具显示"
```

#### "Default Mode" (Whisper)
```javascript
// Line 205
Default Mode

// 翻译
→ "默认模式"
```

---

## 🔧 完整翻译键方案

### 需要添加到翻译文件的新键

```json
// en.json
{
  "sidebar": {
    // ... existing keys ...
    "aiCodingAssistant": "AI coding assistant interface",
    "newProject": "New Project",
    "newSession": "New Session",
    "settings": "Settings"
  },
  "chat": {
    // ... existing keys ...
    "dropImagesHere": "Drop images here",
    "clearInput": "Clear input",
    "scrollToBottom": "Scroll to bottom",
    "permissionModes": {
      "default": "Default Mode",
      "acceptEdits": "Accept Edits",
      "bypassPermissions": "Bypass Permissions",
      "plan": "Plan Mode"
    },
    "implementationPlan": "Implementation Plan"
  },
  "quickSettings": {
    "title": "Quick Settings",
    "appearance": "Appearance Settings",
    "toolDisplay": "Tool Display",
    "defaultMode": "Default Mode"
  }
}

// zh.json
{
  "sidebar": {
    // ... existing keys ...
    "aiCodingAssistant": "AI 编程GUI工具",
    "newProject": "新建项目",
    "newSession": "新建会话",
    "settings": "设置"
  },
  "chat": {
    // ... existing keys ...
    "dropImagesHere": "拖放图片到此处",
    "clearInput": "清空输入",
    "scrollToBottom": "滚动到底部",
    "permissionModes": {
      "default": "默认模式",
      "acceptEdits": "接受编辑",
      "bypassPermissions": "绕过权限",
      "plan": "计划模式"
    },
    "implementationPlan": "实施计划"
  },
  "quickSettings": {
    "title": "快速设置",
    "appearance": "外观设置",
    "toolDisplay": "工具显示",
    "defaultMode": "默认模式"
  }
}
```

---

## 📝 代码修改位置

### Sidebar.jsx

```javascript
// Line 495, 505
// 修改前
<p className="text-sm text-muted-foreground">AI coding assistant interface</p>

// 修改后
<p className="text-sm text-muted-foreground">{t('sidebar.aiCodingAssistant')}</p>

// Line 619
// 修改前
New Project

// 修改后
{t('sidebar.newProject')}

// Line 1026, 1218, 1278, 1289
// 修改前
'New Session'

// 修改后
t('sidebar.newSession')

// Line 1359
// 修改前
<span className="text-lg font-medium text-foreground">Settings</span>

// 修改后
<span className="text-lg font-medium text-foreground">{t('sidebar.settings')}</span>

// Line 1370
// 修改前
<span className="text-xs">Settings</span>

// 修改后
<span className="text-xs">{t('sidebar.settings')}</span>
```

### ChatInterface.jsx

```javascript
// Line 4581
// 修改前
<p className="text-sm font-medium">Drop images here</p>

// 修改后
<p className="text-sm font-medium">{t('chat.dropImagesHere')}</p>

// Line 4540
// 修改前
title="Clear input"

// 修改后
title={t('chat.clearInput')}

// Line 4563
// 修改前
title="Scroll to bottom"

// 修改后
title={t('chat.scrollToBottom')}

// Line 4467-4470
// 修改前
{permissionMode === 'default' && 'Default Mode'}
{permissionMode === 'acceptEdits' && 'Accept Edits'}
{permissionMode === 'bypassPermissions' && 'Bypass Permissions'}
{permissionMode === 'plan' && 'Plan Mode'}

// 修改后
{permissionMode === 'default' && t('chat.permissionModes.default')}
{permissionMode === 'acceptEdits' && t('chat.permissionModes.acceptEdits')}
{permissionMode === 'bypassPermissions' && t('chat.permissionModes.bypassPermissions')}
{permissionMode === 'plan' && t('chat.permissionModes.plan')}

// Line 1060
// 修改前
<span className="font-medium">Implementation Plan</span>

// 修改后
<span className="font-medium">{t('chat.implementationPlan')}</span>
```

### QuickSettingsPanel.jsx

```javascript
// Line 83
// 修改前
Quick Settings

// 修改后
{t('quickSettings.title')}

// Line 89 (注释改为实际文本标题)
// 如果有实际标题元素，改为：
{t('quickSettings.appearance')}

// Line 104
// 修改前
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tool Display</h4>

// 修改后
<h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">{t('quickSettings.toolDisplay')}</h4>

// Line 205
// 修改前
Default Mode

// 修改后
{t('quickSettings.defaultMode')}
```

---

## 🎯 优先级：最高 ⭐⭐⭐

这些都是用户**直接在界面上看到的英文**，需要**立即翻译**：

1. ✅ **Sidebar 核心按钮** - "New Project", "New Session", "Settings"
2. ✅ **AI coding assistant interface** - 应用描述文本
3. ✅ **Permission Mode 文本** - "Default Mode", "Accept Edits" 等
4. ✅ **拖放提示** - "Drop images here"
5. ✅ **Quick Settings** - 快速设置面板标题

---

## 📊 影响评估

### 用户可见性
- **Sidebar**: 每次使用都会看到
- **Permission Mode**: 频繁切换时看到
- **Drop images**: 拖放图片时看到
- **Quick Settings**: 调整设置时看到

### 翻译后效果
✅ 侧边栏完全中文化
✅ 所有按钮都显示中文
✅ 权限模式切换显示中文
✅ 设置面板完全中文化

---

## 🔍 检查清单

### 已在翻译键中但未应用
- [ ] `sidebar.newProject` - 需要应用
- [ ] `sidebar.newSession` - 需要应用
- [ ] `chat.clearInput` - 需要检查
- [ ] `chat.scrollToBottom` - 需要检查
- [ ] `chat.placeholder` - 需要检查

### 需要新增的翻译键
- [ ] `sidebar.aiCodingAssistant`
- [ ] `sidebar.settings`
- [ ] `chat.dropImagesHere`
- [ ] `chat.permissionModes.*`
- [ ] `chat.implementationPlan`
- [ ] `quickSettings.*`

---

## ✨ 完成后的用户体验

用户切换到中文后将看到：

### 侧边栏
- ✨ "AI 编程GUI工具"
- ✨ "新建项目" 按钮
- ✨ "新建会话" 按钮
- ✨ "设置" 按钮

### 聊天界面
- ✨ "输入 / 查看命令，@ 引用文件，或向 Claude 提问..."
- ✨ "拖放图片到此处"
- ✨ "默认模式" / "接受编辑" / "绕过权限" / "计划模式"
- ✨ "实施计划"

### 快速设置
- ✨ "快速设置"
- ✨ "外观设置"
- ✨ "工具显示"

**这些是用户最常看到的界面元素，完成翻译后将显著提升中文用户体验！** 🎉

---

## 📈 最终统计

### 本次新增
- **新翻译键**: 13 个
- **修改文件**: 3 个组件
- **修改位置**: 约 15 处

### 累计总数
- **总翻译键**: ~306 个
- **覆盖组件**: 30+ 个
- **预计覆盖率**: **98%** ✨
