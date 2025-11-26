# 国际化补充发现 - Additional UI Texts

## 📋 QuickSettingsPanel.jsx - 完整翻译清单

### 界面文本 (Lines 62-180)

#### aria-label 属性
```javascript
// Line 62
aria-label={localIsOpen ? 'Close settings panel' : 'Open settings panel'}

// 翻译
→ 关闭设置面板 / 打开设置面板
```

#### 主标题和分组标题
```javascript
// Line 83
Quick Settings

// Line 91
Appearance

// Line 96
Dark Mode

// Line 104
Tool Display

// Line 109
Auto-expand tools

// Line 122
Show raw parameters

// Line 135
Show thinking

// Line 147
View Options

// Line 152
Auto-scroll to bottom

// Line 165
Input Settings

// Line 170
Send by Ctrl+Enter

// Line 179-181
When enabled, pressing Ctrl+Enter will send the message instead of just Enter.
This is useful for IME users to avoid accidental sends.
```

#### Whisper Dictation (隐藏功能)
```javascript
// Line 186
Whisper Dictation

// Line 205
Default Mode

// Line 208
Direct transcription of your speech

// Line 229
Prompt Enhancement

// Line 232
Transform rough ideas into clear, detailed AI prompts

// Line 253
Vibe Mode

// Line 256
Format ideas as clear agent instructions with details
```

### 翻译键方案

```json
// en.json
{
  "quickSettings": {
    "title": "Quick Settings",
    "ariaLabel": {
      "open": "Open settings panel",
      "close": "Close settings panel"
    },
    "sections": {
      "appearance": "Appearance",
      "toolDisplay": "Tool Display",
      "viewOptions": "View Options",
      "inputSettings": "Input Settings",
      "whisperDictation": "Whisper Dictation"
    },
    "appearance": {
      "darkMode": "Dark Mode"
    },
    "toolDisplay": {
      "autoExpandTools": "Auto-expand tools",
      "showRawParameters": "Show raw parameters",
      "showThinking": "Show thinking"
    },
    "viewOptions": {
      "autoScrollToBottom": "Auto-scroll to bottom"
    },
    "inputSettings": {
      "sendByCtrlEnter": "Send by Ctrl+Enter",
      "sendByCtrlEnterDesc": "When enabled, pressing Ctrl+Enter will send the message instead of just Enter. This is useful for IME users to avoid accidental sends."
    },
    "whisper": {
      "defaultMode": "Default Mode",
      "defaultModeDesc": "Direct transcription of your speech",
      "promptEnhancement": "Prompt Enhancement",
      "promptEnhancementDesc": "Transform rough ideas into clear, detailed AI prompts",
      "vibeMode": "Vibe Mode",
      "vibeModeDesc": "Format ideas as clear agent instructions with details"
    }
  }
}

// zh.json
{
  "quickSettings": {
    "title": "快速设置",
    "ariaLabel": {
      "open": "打开设置面板",
      "close": "关闭设置面板"
    },
    "sections": {
      "appearance": "外观",
      "toolDisplay": "工具显示",
      "viewOptions": "视图选项",
      "inputSettings": "输入设置",
      "whisperDictation": "语音输入"
    },
    "appearance": {
      "darkMode": "深色模式"
    },
    "toolDisplay": {
      "autoExpandTools": "自动展开工具",
      "showRawParameters": "显示原始参数",
      "showThinking": "显示思考过程"
    },
    "viewOptions": {
      "autoScrollToBottom": "自动滚动到底部"
    },
    "inputSettings": {
      "sendByCtrlEnter": "Ctrl+Enter 发送",
      "sendByCtrlEnterDesc": "启用后，按 Ctrl+Enter 发送消息而非单独按 Enter。这对使用输入法的用户很有用，可避免误发送。"
    },
    "whisper": {
      "defaultMode": "默认模式",
      "defaultModeDesc": "直接转录您的语音",
      "promptEnhancement": "提示词增强",
      "promptEnhancementDesc": "将粗略想法转化为清晰详细的 AI 提示词",
      "vibeMode": "灵感模式",
      "vibeModeDesc": "将想法格式化为清晰的智能体指令"
    }
  }
}
```

---

## 📋 CodeEditor.jsx - 编辑器界面文本

### 工具栏和按钮文本

```javascript
// Line 128
${chunkCount > 0 ? `${currentIndex + 1}/${chunkCount}` : '0'} changes

// Line 129
title="Previous change"

// Line 134
title="Next change"

// Line 149
title="${showDiff ? 'Hide diff highlighting' : 'Show diff highlighting'}"

// Line 162
title="Editor Settings"

// Line 172
title="${isExpanded ? 'Collapse editor' : 'Expand editor to full width'}"

// Line 466
Loading {file.name}...

// Line 577
Showing changes

// Line 589
title="Download file"

// Line 608
Saved!

// Line 613
Save / Saving...

// Line 622
title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}

// Line 631
title="Close"

// Line 694
Press Ctrl+S to save • Esc to close
```

### 翻译键方案

```json
// en.json
{
  "codeEditor": {
    "loading": "Loading {{fileName}}...",
    "changes": "{{count}} changes",
    "changeCounter": "{{current}}/{{total}}",
    "showingChanges": "Showing changes",
    "buttons": {
      "previousChange": "Previous change",
      "nextChange": "Next change",
      "hideDiff": "Hide diff highlighting",
      "showDiff": "Show diff highlighting",
      "editorSettings": "Editor Settings",
      "expandEditor": "Expand editor to full width",
      "collapseEditor": "Collapse editor",
      "downloadFile": "Download file",
      "saved": "Saved!",
      "save": "Save",
      "saving": "Saving...",
      "fullscreen": "Fullscreen",
      "exitFullscreen": "Exit fullscreen",
      "close": "Close"
    },
    "footer": {
      "lines": "Lines: {{count}}",
      "characters": "Characters: {{count}}",
      "shortcuts": "Press Ctrl+S to save • Esc to close"
    }
  }
}

// zh.json
{
  "codeEditor": {
    "loading": "加载中 {{fileName}}...",
    "changes": "{{count}} 处更改",
    "changeCounter": "{{current}}/{{total}}",
    "showingChanges": "显示更改",
    "buttons": {
      "previousChange": "上一处更改",
      "nextChange": "下一处更改",
      "hideDiff": "隐藏差异高亮",
      "showDiff": "显示差异高亮",
      "editorSettings": "编辑器设置",
      "expandEditor": "展开编辑器至全宽",
      "collapseEditor": "收起编辑器",
      "downloadFile": "下载文件",
      "saved": "已保存！",
      "save": "保存",
      "saving": "保存中...",
      "fullscreen": "全屏",
      "exitFullscreen": "退出全屏",
      "close": "关闭"
    },
    "footer": {
      "lines": "行数：{{count}}",
      "characters": "字符数：{{count}}",
      "shortcuts": "按 Ctrl+S 保存 • Esc 关闭"
    }
  }
}
```

---

## 📋 PRDEditor.jsx - PRD 编辑器界面文本

### 界面文本

```javascript
// Line 512
Loading PRD...

// Line 551
placeholder="Enter PRD filename"

// Line 559
title="Click to edit filename"

// Line 570
📋 PRD

// Line 574
✨ New

// Line 582
Product Requirements Document

// Line 597
title={previewMode ? 'Switch to edit mode' : 'Preview markdown'}

// Line 611
title={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}

// Line 619
title="Toggle theme"

// Line 627
title="Download PRD"

// Line 640
title="Generate tasks from PRD content"

// Line 643
Generate Tasks

// Line 662
Saved!

// Line 667
Save PRD / Saving...

// Line 675
title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}

// Line 683
title="Close"

// Line 733
Lines: {content.split('\n').length}

// Line 734
Characters: {content.length}

// Line 735
Words: {content.split(/\s+/).filter(word => word.length > 0).length}

// Line 736
Format: Markdown

// Line 740
Press Ctrl+S to save • Esc to close

// Line 755
Generate Tasks from PRD

// Line 775
💡 Pro Tip: Ask Claude Code Directly!

// Line 777-779
You can simply ask Claude Code in the chat to parse your PRD and generate tasks.
The AI assistant will automatically save your PRD and create detailed tasks with implementation details.

// Line 784
💬 Example:

// Line 790
<strong>This will:</strong> Save your PRD, analyze its content, and generate structured tasks with subtasks, dependencies, and implementation details.

// Line 798
For more examples and advanced usage patterns:

// Line 806
View TaskMaster Documentation →

// Line 817
Got it, I'll ask Claude Code directly

// Line 836
File Already Exists

// Line 840-842
A PRD file named "..." already exists.
Do you want to overwrite it with the current content?

// Line 849
Cancel

// Line 860
Overwrite
```

### 翻译键方案

```json
// en.json
{
  "prdEditor": {
    "loading": "Loading PRD...",
    "filenamePlaceholder": "Enter PRD filename",
    "editFilename": "Click to edit filename",
    "badges": {
      "prd": "PRD",
      "new": "New"
    },
    "subtitle": "Product Requirements Document",
    "buttons": {
      "previewMode": "Preview markdown",
      "editMode": "Switch to edit mode",
      "enableWordWrap": "Enable word wrap",
      "disableWordWrap": "Disable word wrap",
      "toggleTheme": "Toggle theme",
      "downloadPrd": "Download PRD",
      "generateTasks": "Generate tasks from PRD content",
      "generateTasksShort": "Generate Tasks",
      "savePrd": "Save PRD",
      "saving": "Saving...",
      "saved": "Saved!",
      "fullscreen": "Fullscreen",
      "exitFullscreen": "Exit fullscreen",
      "close": "Close"
    },
    "footer": {
      "lines": "Lines: {{count}}",
      "characters": "Characters: {{count}}",
      "words": "Words: {{count}}",
      "format": "Format: Markdown",
      "shortcuts": "Press Ctrl+S to save • Esc to close"
    },
    "generateModal": {
      "title": "Generate Tasks from PRD",
      "proTipTitle": "💡 Pro Tip: Ask Claude Code Directly!",
      "proTipDesc": "You can simply ask Claude Code in the chat to parse your PRD and generate tasks. The AI assistant will automatically save your PRD and create detailed tasks with implementation details.",
      "exampleLabel": "💬 Example:",
      "exampleText": "I've just initialized a new project with Claude Task Master. I have a PRD at .taskmaster/docs/{{fileName}}. Can you help me parse it and set up the initial tasks?",
      "willDo": "<strong>This will:</strong> Save your PRD, analyze its content, and generate structured tasks with subtasks, dependencies, and implementation details.",
      "learnMore": "For more examples and advanced usage patterns:",
      "viewDocs": "View TaskMaster Documentation →",
      "gotIt": "Got it, I'll ask Claude Code directly"
    },
    "overwriteModal": {
      "title": "File Already Exists",
      "message": "A PRD file named \"{{fileName}}\" already exists. Do you want to overwrite it with the current content?",
      "cancel": "Cancel",
      "overwrite": "Overwrite"
    }
  }
}

// zh.json
{
  "prdEditor": {
    "loading": "加载 PRD 中...",
    "filenamePlaceholder": "输入 PRD 文件名",
    "editFilename": "点击编辑文件名",
    "badges": {
      "prd": "PRD",
      "new": "新建"
    },
    "subtitle": "产品需求文档",
    "buttons": {
      "previewMode": "预览 Markdown",
      "editMode": "切换到编辑模式",
      "enableWordWrap": "启用自动换行",
      "disableWordWrap": "禁用自动换行",
      "toggleTheme": "切换主题",
      "downloadPrd": "下载 PRD",
      "generateTasks": "从 PRD 内容生成任务",
      "generateTasksShort": "生成任务",
      "savePrd": "保存 PRD",
      "saving": "保存中...",
      "saved": "已保存！",
      "fullscreen": "全屏",
      "exitFullscreen": "退出全屏",
      "close": "关闭"
    },
    "footer": {
      "lines": "行数：{{count}}",
      "characters": "字符数：{{count}}",
      "words": "字数：{{count}}",
      "format": "格式：Markdown",
      "shortcuts": "按 Ctrl+S 保存 • Esc 关闭"
    },
    "generateModal": {
      "title": "从 PRD 生成任务",
      "proTipTitle": "💡 专业提示：直接询问 Claude Code！",
      "proTipDesc": "您可以直接在聊天中询问 Claude Code 来解析您的 PRD 并生成任务。AI 助手会自动保存您的 PRD，并创建包含实施细节的详细任务。",
      "exampleLabel": "💬 示例：",
      "exampleText": "我刚刚用 Claude Task Master 初始化了一个新项目。我在 .taskmaster/docs/{{fileName}} 有一个 PRD。你能帮我解析它并设置初始任务吗？",
      "willDo": "<strong>这将会：</strong>保存您的 PRD，分析其内容，并生成包含子任务、依赖关系和实施细节的结构化任务。",
      "learnMore": "更多示例和高级用法：",
      "viewDocs": "查看 TaskMaster 文档 →",
      "gotIt": "知道了，我会直接询问 Claude Code"
    },
    "overwriteModal": {
      "title": "文件已存在",
      "message": "名为 \"{{fileName}}\" 的 PRD 文件已存在。您想要用当前内容覆盖它吗？",
      "cancel": "取消",
      "overwrite": "覆盖"
    }
  }
}
```

---

## 🎯 优先级总结

### 🔴 最高优先级（用户已明确指出）
1. ✅ Sidebar: "New Project", "New Session", "Settings", "AI coding assistant interface"
2. ✅ ChatInterface: Permission modes, "Drop images here"
3. ✅ QuickSettingsPanel: 所有设置项标签

### 🟡 高优先级（频繁使用的界面）
1. ✅ CodeEditor: 工具栏按钮、快捷键提示
2. ✅ PRDEditor: 所有按钮和模态框文本

### 🟢 中优先级（辅助功能）
1. ⚪ Whisper Dictation 设置（当前隐藏）
2. ⚪ 编辑器设置面板

---

## 📊 统计信息

### 本次新增
- **QuickSettingsPanel**: 20 个翻译键
- **CodeEditor**: 18 个翻译键
- **PRDEditor**: 32 个翻译键
- **总计**: 70 个新翻译键

### 累计总数（更新）
- **之前文档**: 318 个翻译键
- **本次新增**: 70 个翻译键
- **最终总数**: **388 个翻译键**
- **预计覆盖率**: **99%+** ✨

---

## ✅ 完整实施检查清单

### 翻译文件更新
- [ ] 添加 QuickSettingsPanel 翻译键到 en.json 和 zh.json
- [ ] 添加 CodeEditor 翻译键到 en.json 和 zh.json
- [ ] 添加 PRDEditor 翻译键到 en.json 和 zh.json

### 组件修改
- [ ] QuickSettingsPanel.jsx - 应用所有翻译
- [ ] CodeEditor.jsx - 应用所有翻译
- [ ] PRDEditor.jsx - 应用所有翻译

### 测试验证
- [ ] 验证所有按钮和标签显示中文
- [ ] 验证所有 tooltip 显示中文
- [ ] 验证所有模态框文本显示中文
- [ ] 验证编辑器快捷键提示显示中文

---

## 🎉 最终效果

完成所有翻译后，用户将在中文模式下看到：

### QuickSettings 面板
- ✨ "快速设置"
- ✨ "外观" / "深色模式"
- ✨ "工具显示" / "自动展开工具" / "显示原始参数" / "显示思考过程"
- ✨ "视图选项" / "自动滚动到底部"
- ✨ "输入设置" / "Ctrl+Enter 发送"

### 代码编辑器
- ✨ "加载中..."
- ✨ "X 处更改" / "上一处更改" / "下一处更改"
- ✨ "显示/隐藏差异高亮"
- ✨ "按 Ctrl+S 保存 • Esc 关闭"

### PRD 编辑器
- ✨ "产品需求文档"
- ✨ "生成任务"
- ✨ "从 PRD 生成任务" 模态框
- ✨ "文件已存在" 覆盖确认

**这将实现接近 100% 的中文界面覆盖！** 🎊
