# 🐕 小H去哪儿

> 一个基于序列帧动画的移动端网页养成游戏，在蘑菇屋的庭院中捡蘑菇、喂小狗、收集明信片。

## 📖 项目介绍

**小H去哪儿**是一款纯前端实现的网页游戏。玩家扮演蘑菇屋的新访客，帮助小H捡蘑菇、购买食物、互动玩耍，并收集小H外出探险寄回的明信片。

### 核心玩法
- 🍄 **捡蘑菇**：点击庭院中生长的蘑菇获取蘑菇币
- 🛒 **商店购物**：用蘑菇币购买食物和道具
- 🎒 **准备出发**：选择食物让小H外出探险
- 📮 **收集明信片**：小H归来时带回各地风景明信片
- 💕 **互动玩耍**：喂食、摸摸、陪玩提升亲密度
- 🏠 **昼夜切换**：白天在庭院活动，夜晚小H回屋睡觉

### 技术栈
- HTML5 + CSS3 + 原生 JavaScript
- 序列帧动画（Sprite Animation）
- LocalStorage 本地存档
- GitHub Pages 静态部署

---

## 🚀 快速开始

### 本地运行
```bash
# 方式1：直接打开
双击 index.html 用浏览器打开

# 方式2：本地服务器（推荐）
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 部署到 GitHub Pages
1. Fork 或创建新仓库
2. 上传 `index.html` + `style.css` + `script.js` + `assets/` 文件夹
3. 进入 Settings → Pages → 选择分支部署
4. 访问 `https://你的用户名.github.io/仓库名/`

---

## 📁 文件结构

```
小H去哪儿/
├── index.html              # 入口文件，包含所有页面结构
├── style.css               # 全局样式、动画、响应式适配
├── script.js               # 游戏逻辑、状态管理、事件处理
├── README.md               # 项目文档
└── assets/                 # 资源文件夹
    ├── 背景/               # 场景背景图
    │   ├── garden-day.png
    │   ├── garden-night.png
    │   ├── room-day.png
    │   ├── room-night.png
    │   └── shop-background.png
    ├── 待机/               # 角色待机动画（22帧）
    │   ├── 001.png ~ 022.png
    ├── 低头吃东西/         # 喂食动画（22帧）
    │   ├── 001.png ~ 022.png
    ├── 开心/               # 摸摸动画（25帧）
    │   ├── 001.png ~ 025.png
    ├── 向左跑/             # 向左奔跑（6帧）
    │   ├── 001.png ~ 006.png
    ├── 向右跑/             # 向右奔跑（7帧）
    │   ├── 001.png ~ 007.png
    ├── 趴下睡觉/           # 入睡动画（17帧）
    │   ├── 001.png ~ 017.png
    ├── 睡觉待机/           # 睡觉呼吸动画（10帧）
    │   ├── 001.png ~ 010.png
    ├── 玩球/               # 玩球动画（42帧）
    │   ├── 001.png ~ 042.png
    ├── 蘑菇生长/           # 蘑菇生长动画（15帧）
    │   ├── 001.png ~ 015.png
    ├── 明信片素材/          # 明信片图片
    ├── 食物/               # 商店食物图标
    ├── 道具/               # 商店道具图标
    └── 组件/               # UI组件（门、箭头等）
```

---

## ⚙️ 核心常量速查表

### 设计基准

| 常量名 | 默认值 | 作用描述 | 修改影响 |
|--------|--------|----------|----------|
| `DESIGN_WIDTH` | `430` | 设计稿基准宽度（px） | 改变整体缩放比例，影响所有元素尺寸 |
| `DESIGN_HEIGHT` | `932` | 设计稿基准高度（px） | 改变整体缩放比例，影响所有元素尺寸 |
| `--scale` | 动态计算 | CSS变量，当前屏幕缩放比例 | 由JS自动计算，一般不动 |

### 角色动画常量

| 常量名 | 默认值 | 作用描述 | 修改影响 |
|--------|--------|----------|----------|
| `XIAOH_IDLE_FRAMES` | `22` | 待机动画总帧数 | 需与 `assets/待机/` 文件夹内图片数量一致 |
| `XIAOH_IDLE_MS` | `200` | 待机动画每帧间隔（毫秒） | **值越小动画越快，值越大越慢** |
| `XIAOH_EAT_FRAMES` | `22` | 喂食动画总帧数 | 需与 `assets/低头吃东西/` 图片数量一致 |
| `XIAOH_EAT_MS` | `100` | 喂食动画每帧间隔（毫秒） | 控制吃东西动画速度 |
| `XIAOH_HAPPY_FRAMES` | `25` | 开心动画总帧数 | 需与 `assets/开心/` 图片数量一致 |
| `XIAOH_HAPPY_MS` | `90` | 开心动画每帧间隔（毫秒） | 控制摸摸后的开心动画速度 |
| `XIAOH_RUN_LEFT_FRAMES` | `6` | 向左奔跑动画帧数 | 需与 `assets/向左跑/` 图片数量一致 |
| `XIAOH_RUN_RIGHT_FRAMES` | `7` | 向右奔跑动画帧数 | 需与 `assets/向右跑/` 图片数量一致 |
| `XIAOH_RUN_MS` | `100` | 奔跑动画每帧间隔（毫秒） | 控制奔跑动画速度 |
| `XIAOH_LAYDOWN_FRAMES` | `17` | 趴下睡觉动画帧数 | 需与 `assets/趴下睡觉/` 图片数量一致 |
| `XIAOH_LAYDOWN_MS` | `150` | 趴下睡觉每帧间隔（毫秒） | 控制入睡动画速度 |
| `XIAOH_SLEEP_IDLE_FRAMES` | `10` | 睡觉待机动画帧数 | 需与 `assets/睡觉待机/` 图片数量一致 |
| `XIAOH_SLEEP_IDLE_MS` | `200` | 睡觉待机每帧间隔（毫秒） | 控制睡觉呼吸动画速度 |
| `XIAOH_PLAYBALL_FRAMES` | `42` | 玩球动画帧数 | 需与 `assets/玩球/` 图片数量一致 |
| `XIAOH_PLAYBALL_MS` | `90` | 玩球动画每帧间隔（毫秒） | 控制玩球动画速度 |

### 蘑菇系统常量

| 常量名 | 默认值 | 作用描述 | 修改影响 |
|--------|--------|----------|----------|
| `MUSHROOM_GROWTH_FRAME_COUNT` | `15` | 蘑菇生长动画帧数 | 需与 `assets/蘑菇生长/` 图片数量一致 |
| `MUSHROOM_GROWTH_FRAME_MS` | `70` | 蘑菇生长每帧间隔（毫秒） | 控制蘑菇从土中长出速度 |
| `MUSHROOM_TYPES` | 6种 | 蘑菇类型配置（大小/颜色） | 修改庭院中蘑菇的外观种类 |

### 游戏机制常量

| 常量名 | 默认值 | 作用描述 | 修改影响 |
|--------|--------|----------|----------|
| `LOADING_TIMEOUT` | `15000` | 加载界面超时时间（毫秒） | 超过此时间强制进入游戏 |
| `MIN_TOUCH_SIZE` | `44` | 最小触摸区域尺寸（px） | 小于此值的按钮/蘑菇会自动放大 |
| `MUSHROOM_SPAWN_INTERVAL` | `5000~10000` | 蘑菇生成间隔随机范围（毫秒） | 控制新蘑菇出现频率 |
| `MUSHROOM_MAX_COUNT` | `5` | 庭院中最大蘑菇数量 | 同时存在的蘑菇上限 |

---

## 🎬 动画修改指南

### 修改动画速度

所有动画速度通过修改 `_MS` 常量控制，**值越小越快，值越大越慢**。

```javascript
// 示例：让待机动画更快（从200ms改为100ms）
// 在 script.js 中找到：
const XIAOH_IDLE_MS = 200;
// 改为：
const XIAOH_IDLE_MS = 100;
```

```javascript
// 示例：让喂食动画更慢（从100ms改为150ms）
// 在 script.js 中找到：
const XIAOH_EAT_MS = 100;
// 改为：
const XIAOH_EAT_MS = 150;
```

### 增加动画帧数

如果需要更流畅的动画，可以新增图片帧并修改对应常量：

```javascript
// 步骤1：在 assets/待机/ 文件夹中添加新帧
// 例如新增 023.png、024.png

// 步骤2：修改常量
const XIAOH_IDLE_FRAMES = 24;  // 从22改为24

// 注意：文件名必须保持 001.png ~ 024.png 的连续编号格式
```

---

## 🗺️ 添加新目的地

小H可以外出探险到不同地点，带回不同明信片。

```javascript
// 步骤1：在 DESTINATIONS 中添加新地点
const DESTINATIONS = {
    field: { name: '田野', emoji: '🌾', bg: 'linear-gradient(...)' },
    // ... 其他地点 ...

    // 新增：海边
    beach: { 
        name: '海边', 
        emoji: '🏖️', 
        bg: 'linear-gradient(180deg, #87CEEB 0%, #F0E68C 100%)' 
    }
};

// 步骤2：在 POSTCARDS 中添加对应明信片
const POSTCARDS = {
    // ... 其他地点 ...

    // 新增：海边明信片
    beach: [
        { 
            text: '海浪的声音好大，我追着螃蟹跑了好久~', 
            image: 'assets/明信片素材/海边01.png', 
            name: '海边日落' 
        }
    ]
};

// 步骤3：在 NORMAL_POSTCARDS 中添加（用于随机抽取）
const NORMAL_POSTCARDS = [
    // ... 其他明信片 ...
    { 
        text: '海浪的声音好大...', 
        image: 'assets/明信片素材/海边01.png', 
        name: '海边日落', 
        location: 'beach'  // 对应DESTINATIONS的key
    }
];
```

---

## 🛒 添加新商品

商店可以出售食物和道具，影响小H的探险行为。

```javascript
// 步骤1：在 SHOP_ITEMS 中添加
SHOP_ITEMS.food.push({
    id: 'fish',           // 唯一标识符
    name: '鱼干',         // 显示名称
    emoji: '🐟',          // 图标
    price: 25,            // 蘑菇币价格
    desc: '新鲜的鱼干，小H的最爱！',  // 商店描述
    level: 2,             // 食物等级（决定可去目的地）
    image: 'assets/食物/鱼干.png'      // 商品图片
});

// 步骤2：在 SHOP_GOODS 中添加（用于购买逻辑）
const SHOP_GOODS = {
    // ... 其他商品 ...
    fish: { 
        name: '鱼干', 
        price: 25, 
        type: 'food', 
        inventoryId: 'fish', 
        desc: '描述文字...' 
    }
};

// 步骤3：在 INTERACT_TEXT.feed 中添加互动文案
INTERACT_TEXT.feed.fish = [
    '鱼干好香！是从水库钓上来的吗？心情值+3',
    '嚼嚼嚼...这个味道和上次杰哥带来的一样！心情值+3'
];

// 步骤4：在 inventory 初始值中添加
inventory: {
    // ... 其他物品 ...
    fish: 0
}
```

---

## 💾 本地存储说明

### 存档信息

| 项目 | 说明 |
|------|------|
| **存储键名** | `xiaoh_game` |
| **存储位置** | 浏览器 LocalStorage |
| **存储内容** | 蘑菇币、相册、回收站、物品栏、亲密度、日记、教程进度 |
| **存储时机** | 每次操作后自动保存（购买、收集、互动等） |

### 清除存档

```javascript
// 浏览器控制台（F12 → Console）执行：
localStorage.removeItem('xiaoh_game');
location.reload();  // 刷新页面重新开始
```

---

## 📱 响应式适配说明

### 设计基准

- **设计稿尺寸**：430px × 932px（iPhone 14 Pro Max 比例）
- **缩放方式**：`transform: scale()` 整体等比缩放
- **缩放计算**：取屏幕宽高比中较小值，确保内容完整显示

### 适配逻辑

```javascript
// 核心代码在 updateScale() 函数中
const widthScale = window.innerWidth / DESIGN_WIDTH;   // 430
const heightScale = window.innerHeight / DESIGN_HEIGHT; // 932
const scale = Math.min(widthScale, heightScale);        // 取较小值

// 应用缩放
gameContainer.style.transform = `scale(${scale})`;
```

### 大屏设备处理

当屏幕宽度大于 430px 时，使用 `#fullscreen-bg` 全屏背景层填充两侧空白，游戏内容保持居中。

---

## 🎓 教程系统说明

### 触发条件

- **首次游玩**：本地无存档时自动触发
- **已完成标记**：`gameState.tutorialCompleted = true`

### 教程步骤

| 步骤 | 标题 | 内容 | 触发条件 |
|------|------|------|----------|
| 01 | 欢迎来到蘑菇屋 | 小H自我介绍 | 自动播放对话 |
| 02 | 捡蘑菇 | 收集庭院蘑菇 | 点击任意蘑菇 |
| 03 | 蘑菇商店 | 介绍商店功能 | 点击商店按钮 |
| 04 | 和小H互动 | 喂食、摸摸 | 点击摸摸+喂食 |
| 05 | 出发探险 | 准备食物出发 | 点击探险并出发 |
| 06 | 收到明信片 | 领取奖励 | 小H归来自动触发 |
| 07 | 教程完成 | 总结提示 | 自动完成 |

### 修改教程

教程数据定义在 `TUTORIAL_DATA` 数组中，每个步骤包含：
- `dialogs`：对话内容数组（speaker + text）
- `guide`：UI指引（高亮/箭头指向特定元素）
- `trigger`：触发条件（collect_mushroom / open_shop 等）

---

## 🛠️ 开发指南

### 添加新动画的完整流程

```
1. 准备序列帧图片
   └── 放入对应文件夹，命名格式 001.png ~ 00N.png

2. 添加常量定义
   └── const XIAOH_NEW_FRAMES = N;
   └── const XIAOH_NEW_MS = 100;

3. 编写帧路径函数
   └── function xiaohNewFrameSrc(index) { ... }

4. 编写启动/停止函数
   └── function startXiaohNewAnim() { ... }
   └── function stopXiaohNewAnim() { ... }

5. 绑定到按钮或事件
   └── 在 animateXiaoh() 或对应事件监听器中调用
```

### UI调试技巧

| 需求 | 方法 |
|------|------|
| 查看元素位置 | F12 → Elements → 选中元素查看 `top/left/bottom/right` |
| 测试不同屏幕 | F12 → 切换设备工具栏 → 选择 iPhone SE / 14 Pro Max 等 |
| 检查动画帧 | Console 输入 `xiaohIdleTimer` 查看定时器状态 |
| 查看游戏状态 | Console 输入 `gameState` 查看完整状态对象 |
| 强制切换昼夜 | Console 输入 `setBackgroundByTime(false)` |

### 常见问题排查

| 问题 | 排查方法 |
|------|----------|
| 动画不播放 | 检查 `_FRAMES` 常量是否与图片数量一致 |
| 图片加载失败 | 检查 `assets/` 路径是否正确，区分大小写 |
| 按钮点不动 | 检查 `z-index` 层级，可能被其他元素覆盖 |
| 存档丢失 | 检查浏览器是否开启隐私模式/清除Cookie |
| 手机端卡顿 | 减少同时显示的蘑菇数量，降低动画帧率 |

---

## 🙏 致谢

- 灵感来源：《向往的生活》
- 序列帧动画素材：自制
- 背景图素材：AI生成/自制

---

> 🐕 **汪。** —— 小H
