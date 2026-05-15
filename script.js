// ==================== 游戏数据 ====================
        const DESTINATIONS = {
            field: { name: '田野', emoji: '🌾', bg: 'linear-gradient(180deg, #87CEEB 0%, #90EE90 100%)' },
            river: { name: '河边', emoji: '🌊', bg: 'linear-gradient(180deg, #87CEEB 0%, #4FC3F7 100%)' },
            neighbor: { name: '邻居家', emoji: '🏠', bg: 'linear-gradient(180deg, #FFE0B2 0%, #FFCC80 100%)' },
            market: { name: '集市', emoji: '🏪', bg: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)' }
        };

        // 普通风景明信片（一般情况下获得）
        const NORMAL_POSTCARDS = [
            { text: '白鹅游过来了 / 我冲它叫 / 它不理我 / 走了 / 那棵树下有人在做饭 / 香得我尾巴停不下来\n何老师：H，你把白鹅当同类了吧。', image: 'assets/明信片素材/合岭村.png', name: '合岭村', location: 'field' },
            { text: '水是什么味道 / 我舔了一口 / 咸的 / 湖里怎么没有鱼 / 那只熊猫为什么不跟我玩 / 它是不是装忙\n何老师：别舔，这是矿泉水。', image: 'assets/明信片素材/九塞沟.png', name: '九寨沟', location: 'river' },
            { text: '大象好大 / 是很大的狗吗 / 不敢上前 / 河边有莲花 / 可以吃吗 / 闻起来不像肉\n黄老师：小h是个小吃货。', image: 'assets/明信片素材/曼远村.png', name: '曼远村', location: 'neighbor' },
            { text: '好多人\n花好红\n我坐在花旁边\n大家都在拍照\n这个地方好大好亮\n何老师：小H，你也是这儿的游客呢。', image: 'assets/明信片素材/天安门.png', name: '天安门', location: 'market' },
            { text: '好长的路\n我跑了好久\n风把云都吹散了\n远处的山叠在一起\n我想趴在这里看一会儿\n何老师：小H第一次看到这么远的风景吧。。', image: 'assets/明信片素材/长城.png', name: '长城', location: 'field' }
        ];

        // 稀有明信片（需要携带特殊道具才能获得）
        const RARE_POSTCARDS = [
            { text: '他们在笑什么啊？反正跟着笑就对了~ 太阳好暖，腿有点麻了但不想动', image: 'assets/明信片素材/01.png', name: '春日聚会', rarity: 'rare' },
            { text: '跑起来跑起来！草的味道好多，前面那个是我的同类吧？走走走去认识一下！', image: 'assets/明信片素材/02.png', name: '森林小道', rarity: 'rare' },
            { text: '这个姐姐身上好香，是肉的味道！抱紧一点可以吗？饭能不能别吃那么久啊', image: 'assets/明信片素材/03.png', name: '村舍午餐时光', rarity: 'rare' },
            { text: '他们的手都好温柔，一直摸我脑袋。头都快被摸秃了，但是好舒服不想躲', image: 'assets/明信片素材/04.png', name: '温馨家庭合影', rarity: 'rare' },
            { text: '我就这样坐着，风里有饭香味。有人趴着不吃了，那我帮他吃掉？', image: 'assets/明信片素材/05.png', name: '乡村聚餐', rarity: 'rare' },
            { text: '又拍？抱这么紧我怎么跑！不过他身上有橘子味，再待一会儿也行', image: 'assets/明信片素材/06.png', name: '乡村暖意合影', rarity: 'rare' }
        ];

        // 旧的POSTCARDS结构（保持兼容）
        const POSTCARDS = {
            field: NORMAL_POSTCARDS.filter(p => p.location === 'field' || !p.location),
            river: NORMAL_POSTCARDS.filter(p => p.location === 'river' || !p.location),
            neighbor: NORMAL_POSTCARDS.filter(p => p.location === 'neighbor' || !p.location),
            market: NORMAL_POSTCARDS.filter(p => p.location === 'market' || !p.location)
        };
        
        const GUEST_COMMENTS = [
            '黄老师："小H你是不是又偷吃了我桌上的花生？"',
            '何老师："慢点慢点！小H你拽着我跑什么呢！"',
            '黄老师："小H你别盯了，没你的份。"',
            '何老师："小H今天好乖，奖励加个鸡腿。"',
            '彭彭："小H你别盯我碗，我自己还不够吃呢。"',
            '彭小哥："小H这么乖，等下陪你玩。"'
        ];

        // 互动文案
        const INTERACT_TEXT = {
            pet: [
                '被摸了摸头，何老师也是这样哄我的~ 心情值+2',
                '耳朵被揉了揉，舒服得直哼哼，跟黄老师揉我的时候一样。心情值+2',
                '摸摸头！想起了何老师叫我小乖乖的时候~ 心情值+2',
                '翻了个肚皮，跟彭彭刚来那天一样，忍不住嘛。心情值+2',
                '有人轻轻拍了拍我，尾巴自己就摇起来了——蘑菇屋就是这么暖。心情值+2'
            ],
            play: [
                '在院子里玩接球！彭彭又把球扔到屋顶上了…… 心情值+3',
                '追蝴蝶追得比彭彭还快！他追不上我~ 心情值+3',
                '何老师拿玉米逗我，追着玉米跑了三圈——掰玉米任务白干了。心情值+3',
                '和嘉宾一起在草坪上撒欢，镜头都追不上我！心情值+3',
                '在水库边扔石子玩，我以为是让我捡回来……扑通。心情值+3'
            ],
            feed: {
                bone: [
                    '黄老师做饭时偷偷塞给我的，趁热！心情值+2',
                    '彭彭从桌上偷偷拿给我的，别让黄老师发现~ 心情值+2',
                    '黄老师说"骨头炖汤了"，不行！我要啃！心情值+2'
                ],
                meat: [
                    '昨晚烤全羊何老师专门给我留的，啃得满嘴油！心情值+3',
                    '烤全羊的香味我闻着就来了，谁也拦不住我~ 心情值+3',
                    '彭彭看着我咽口水，但还是让给我了，嘿嘿。心情值+3'
                ],
                bento: [
                    '黄小厨亲手做的便当！跟他们吃的一模一样，我也是蘑菇屋的人~ 心情值+4',
                    '便当里是黄老师拿手的蛋炒饭，我把碗舔得比洗的还干净。心情值+4',
                    '何老师帮我把便当掰碎，"慢慢吃别噎着"——好暖。心情值+4'
                ],
                steak: [
                    '嘉宾点的牛排，黄老师帮我切好了一块一块喂我。心情值+4',
                    '杰哥来的那期点的牛排，他走之前还特意给我留了一块！心情值+4',
                    '蘑菇屋待客的最高规格！我才是这里的老住户好吧~ 心情值+4'
                ],
                sushi: [
                    '黄老师做的时候我一直蹲在旁边看，何老师说"够了够了你口水滴上去了"。心情值+5',
                    '这么好看的东西……我可以咬吗？咔嚓——好像不该咬的。不管了！心情值+5',
                    '他们吃寿司都蘸绿色的酱，我也蘸了一下——辣的！！但是好好吃！解锁新区域。心情值+5'
                ]
            }
        };

        // ==================== 商店数据 ====================
        const SHOP_ITEMS = {
            food: [
                { id: 'bone', name: '骨头', emoji: '🦴', price: 5, desc: '黄老师做饭时偷偷塞给我的，趁热啃！可以在蘑菇屋附近溜达。', level: 1, image: 'assets/食物/骨头.png' },
                { id: 'meat', name: '羊排', emoji: '🍖', price: 15, desc: '昨晚烤全羊何老师专门给我留的！啃得满嘴油~ 跑得更远！', level: 2, image: 'assets/食物/羊排.png' },
                { id: 'steak', name: '牛排', emoji: '🥩', price: 30, desc: '嘉宾点的牛排，黄老师帮我切好了，一块一块喂的。能去更远的地方！', level: 3, image: 'assets/食物/牛排.png' },
                { id: 'sushi', name: '寿司', emoji: '🍣', price: 50, desc: '有嘉宾来的时候黄老师才会做的料理！解锁蘑菇屋周边新区域。', level: 4, image: 'assets/食物/寿司.png' },
                { id: 'bento', name: '便当', emoji: '🍱', price: 30, desc: '黄小厨亲手做的便当，跟他们吃的一模一样！吃饱了去掰玉米的地方探险。', level: 3, image: 'assets/食物/便当.png' }
            ],
            prop: [
                { id: 'swim_ring', name: '游泳圈', emoji: '🏊', price: 20, desc: '去水库玩要带的！上次杰哥带我下水用的就是这个。增加去河边的概率。', boostDest: ['river'], image: 'assets/道具/游泳圈.png' },
                { id: 'compass', name: '指南针', emoji: '🧭', price: 35, desc: '他们寻宝任务用的同款指南针！增加去新地方探险的概率。', boostDest: ['field', 'river', 'neighbor', 'market'], image: 'assets/道具/指南针.png' },
                { id: 'ball', name: '玩具球', emoji: '⚽', price: 15, desc: '彭彭扔给我的球，他每次都扔太远……增加去邻居家的概率。', boostDest: ['field'], image: 'assets/道具/玩具球.png' },
                { id: 'camera', name: '相机', emoji: '📷', price: 40, desc: '拍照神器！增加获得明信片概率。', boostDest: [], image: 'assets/道具/相机.png' },
                { id: 'windmill', name: '风车', emoji: '🎠', price: 20, desc: '插在蘑菇屋门口的风车，我一看到就想往外跑！增加去郊外的概率。', image: 'assets/道具/风车.png' },
                { id: 'bowl', name: '碗', emoji: '🥣', price: 15, desc: '何老师给我买的碗，说"小H也有自己的位置"。增加亲密度获取。', image: 'assets/道具/碗.png' },
                { id: 'collar', name: '项圈', emoji: '🎀', price: 25, desc: '蘑菇屋定制的项圈，上面刻着"蘑菇屋小H"。增加获得稀有明信片的概率。', image: 'assets/道具/项圈.png' }
            ]
        };

        // ==================== 游戏状态 ====================
        let gameState = {
            mushrooms: 20,
            xiaohStatus: 'home', // home / away / return
            currentTrip: null,
            album: [],
            trash: [], // 回收站
            tripTimer: null,
            progressInterval: null,
            selectedItem: null,
            mushroomsOnGround: [],
            intimacy: 0, // 亲密度
            diary: [], // 心情日记
            inventory: {
                bone: 0,
                meat: 0,
                steak: 0,
                sushi: 0,
                bento: 0,
                swim_ring: 0,
                compass: 0,
                ball: 0,
                camera: 0,
                windmill: 0,
                bowl: 0,
                collar: 0
            },
            tutorialStep: 0, // 教程步骤
            tutorialCompleted: false, // 是否完成教程
            isTraveling: false // 小H是否在旅行中（锁定快跑按钮）
        };

        // ==================== 音效系统 ====================
        let bgmAudio = null;
        let bgmEnabled = true;
        let soundEnabled = true;
        
        function initBGM() {
            bgmAudio = new Audio('assets/background-music.mp3');
            bgmAudio.volume = 0.3;
            bgmAudio.loop = true;
            
            // 尝试自动播放（需要用户交互后）
            document.addEventListener('click', () => {
                if (bgmEnabled && bgmAudio && bgmAudio.paused) {
                    bgmAudio.play().catch(err => {
                        console.log('BGM play failed:', err);
                    });
                }
            }, { once: true });
        }
        
        function toggleBGMSetting() {
            if (!bgmAudio) return;
            
            if (bgmEnabled) {
                bgmAudio.pause();
                bgmEnabled = false;
            } else {
                bgmAudio.play().catch(err => {
                    console.log('BGM play failed:', err);
                });
                bgmEnabled = true;
            }
        }
        
        function playPickSound() {
            if (!soundEnabled) return;
            
            try {
                const audio = new Audio('assets/pick-mushroom.mp3');
                audio.volume = 0.5;
                audio.play().catch(err => {
                    console.log('Audio play failed:', err);
                    generateSimpleSound();
                });
            } catch (e) {
                console.log('Audio not supported:', e);
                generateSimpleSound();
            }
        }
        
        // 播放按钮点击音效
        function playClickSound() {
            if (!soundEnabled) return;
            
            try {
                const audio = new Audio('assets/button-click.mp3');
                audio.volume = 0.3;
                audio.play().catch(err => {
                    console.log('Button click audio play failed:', err);
                    generateSimpleClickSound();
                });
            } catch (e) {
                console.log('Button click audio not supported:', e);
                generateSimpleClickSound();
            }
        }
        
        function generateSimpleSound() {
            if (!soundEnabled) return;
            
            try {
                let audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.15);
            } catch (e) {
                console.log('Sound generation failed:', e);
            }
        }
        
        function generateSimpleClickSound() {
            if (!soundEnabled) return;
            
            try {
                let audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.05);
                
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.08);
            } catch (e) {
                console.log('Click sound generation failed:', e);
            }
        }
        
        // 播放开门音效
        function playDoorSound() {
            if (!soundEnabled) return;
            
            try {
                const audio = new Audio('assets/door-open.mp3');
                audio.volume = 0.5;
                audio.play().catch(() => {});
            } catch (e) {
                console.log('开门音效播放失败:', e);
            }
        }

        function playClickSound() {
            if (!soundEnabled) return;
            
            try {
                let audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.05);
                
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.08);
            } catch (e) {
                console.log('Click sound generation failed:', e);
            }
        }

        // ==================== DOM元素 ====================
        const el = {
            mushroomNum: document.getElementById('mushroom-num'),
            roomPage: document.getElementById('room-page'),
            roomAlbumBtn: document.getElementById('room-album-btn'),
            roomMushroomNum: document.getElementById('room-mushroom-num'),
            roomGoBtn: document.getElementById('room-go-btn'),
            roomShopBtn: document.getElementById('room-shop-btn'),
            roomBackArrow: document.getElementById('room-back-arrow'),
            homePage: document.getElementById('home-page'),
            dayNightToggle: document.getElementById('day-night-toggle'),
            settingsBtn: document.getElementById('settings-btn'),
            settingsModal: document.getElementById('settings-modal'),
            settingsClose: document.getElementById('settings-close'),
            bgmToggle: document.getElementById('bgm-toggle'),
            soundToggle: document.getElementById('sound-toggle'),
            goBtn: document.getElementById('go-btn'),
            shopBtn: document.getElementById('shop-btn'),
            xiaoh: document.getElementById('xiaoh-character'),
            xiaohSpriteImg: document.getElementById('xiaoh-sprite-img'),
            xiaohCharacterRoom: document.getElementById('xiaoh-character-room'),
            xiaohSpriteImgRoom: document.getElementById('xiaoh-sprite-img-room'),
            ground: document.getElementById('ground'),
            doorBtn: document.getElementById('door-btn'),
            doorImg: document.getElementById('door-img'),
            goModal: document.getElementById('go-modal'),
            photoModal: document.getElementById('photo-modal'),
            postcardModal: document.getElementById('postcard-modal'),
            progressPage: document.getElementById('progress-page'),
            homePage: document.getElementById('home-page'),
            albumPage: document.getElementById('album-page'),
            albumBtn: document.getElementById('album-btn'),
            albumBack: document.getElementById('album-back'),
            albumGrid: document.getElementById('album-grid'),
            albumCount: document.getElementById('album-count'),
            albumTrashBtn: document.getElementById('album-trash-btn'),
            trashModal: document.getElementById('trash-modal'),
            trashGrid: document.getElementById('trash-grid'),
            trashClose: document.getElementById('trash-close'),
            trashClear: document.getElementById('trash-clear'),
            confirmGo: document.getElementById('confirm-go'),
            cancelGo: document.getElementById('cancel-go'),
            bentoCards: document.querySelectorAll('.bento-card'),
            progressBar: document.getElementById('progress-bar'),
            progressTime: document.getElementById('progress-time'),
            progressDest: document.getElementById('progress-dest'),
            // 首页进度条元素
            homeProgress: document.getElementById('home-progress'),
            homeProgressBar: document.getElementById('home-progress-bar'),
            photoOk: document.getElementById('photo-ok'),
            collectReward: document.getElementById('collect-reward'),
            sharePostcard: document.getElementById('share-postcard'),
            photoViewer: document.getElementById('photo-viewer'),
            viewerClose: document.getElementById('viewer-close'),
            // 商店相关
            shopPage: document.getElementById('shop-page'),
            shopBack: document.getElementById('shop-back'),
            // 物品栏相关
            inventoryModal: document.getElementById('inventory-modal'),
            inventoryEmpty: document.getElementById('inventory-empty'),
            inventoryItems: document.getElementById('inventory-items'),
            inventoryClose: document.getElementById('inventory-close'),
            confirmItem: document.getElementById('confirm-item'),
            goToShop: document.getElementById('go-to-shop'),
            // 互动界面相关
            interactPage: document.getElementById('interact-page'),
            interactBack: document.getElementById('interact-back'),
            intimacyValue: document.getElementById('intimacy-value'),
            actionFeed: document.getElementById('action-feed'),
            actionPet: document.getElementById('action-pet'),
            actionPlay: document.getElementById('action-play'),
            interactXiaoh: document.getElementById('interact-xiaoh'),
            diaryList: document.getElementById('diary-list'),
            // 教程相关
            openingScene: document.getElementById('opening-scene'),
            openingStart: document.getElementById('opening-start'),
            tutorialOverlay: document.getElementById('tutorial-overlay'),
            tutorialStep: document.getElementById('tutorial-step'),
            tutorialHe: document.getElementById('tutorial-he'),
            tutorialHuang: document.getElementById('tutorial-huang'),
            tutorialXiaoh: document.getElementById('tutorial-xiaoh'),
            dialogSpeaker: document.getElementById('dialog-speaker'),
            dialogText: document.getElementById('dialog-text'),
            tutorialArrow: document.getElementById('tutorial-arrow'),
            tutorialHighlight: document.getElementById('tutorial-highlight'),
            tutorialComplete: document.getElementById('tutorial-complete'),
            completeBtn: document.getElementById('complete-btn'),

            //小H快跑
            runBtn: document.getElementById('run-btn'),
            roomRunBtn: document.getElementById('room-run-btn')
        };

        // ==================== 工具函数 ====================
        function updateMushroomDisplay() {
            // 确保蘑菇币是有效的数字
            const mushroomCount = isNaN(gameState.mushrooms) ? 0 : gameState.mushrooms;
            el.mushroomNum.textContent = mushroomCount;
            el.roomMushroomNum.textContent = mushroomCount;
        }

        function showFloatText(x, y, text) {
            const floatEl = document.createElement('div');
            floatEl.className = 'float-text';
            floatEl.textContent = text;
            floatEl.style.left = x + 'px';
            floatEl.style.top = y + 'px';
            floatEl.style.transform = 'translateX(-50%)';
            document.getElementById('game-container').appendChild(floatEl);
            setTimeout(() => floatEl.remove(), 2000);
        }
        
        // 显示消息提示
        function showMessage(text) {
            // 创建消息元素
            const messageEl = document.createElement('div');
            messageEl.className = 'message-popup';
            messageEl.textContent = text;
            
            // 添加到游戏容器
            document.getElementById('game-container').appendChild(messageEl);
            
            // 2秒后移除
            setTimeout(() => {
                messageEl.classList.add('fade-out');
                setTimeout(() => messageEl.remove(), 500);
            }, 2000);
        }

        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomChoice(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        // 小H待机序列帧（assets/待机/001.png … 022.png）
        const XIAOH_IDLE_FRAMES = 22;
        const XIAOH_IDLE_MS = 200;
        let xiaohIdleTimer = null;
        let xiaohIdleFrame = 0;

        function xiaohIdleFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/待机/' + n + '.png';
        }

        function startXiaohIdleAnim() {
            if (xiaohIdleTimer || !el.xiaohSpriteImg) return;
            xiaohIdleTimer = setInterval(() => {
                xiaohIdleFrame = (xiaohIdleFrame + 1) % XIAOH_IDLE_FRAMES;
                const src = xiaohIdleFrameSrc(xiaohIdleFrame);
                if (el.xiaohSpriteImg) el.xiaohSpriteImg.src = src;
                if (el.xiaohSpriteImgRoom) el.xiaohSpriteImgRoom.src = src;
            }, XIAOH_IDLE_MS);
        }

        function stopXiaohIdleAnim() {
            if (xiaohIdleTimer) {
                clearInterval(xiaohIdleTimer);
                xiaohIdleTimer = null;
            }
        }

        // 互动页面小狗待机动画
        let interactXiaohIdleTimer = null;
        
        function startInteractXiaohIdleAnim() {
            if (interactXiaohIdleTimer) return;
            let frame = 0;
            interactXiaohIdleTimer = setInterval(() => {
                frame = (frame + 1) % XIAOH_IDLE_FRAMES;
                const src = xiaohIdleFrameSrc(frame);
                if (document.getElementById('interact-xiaoh-img')) {
                    document.getElementById('interact-xiaoh-img').src = src;
                }
            }, XIAOH_IDLE_MS);
        }

        function stopInteractXiaohIdleAnim() {
            if (interactXiaohIdleTimer) {
                clearInterval(interactXiaohIdleTimer);
                interactXiaohIdleTimer = null;
            }
        }

        // ==================== 小H睡觉状态 ====================
        // 趴下睡觉序列帧（assets/趴下睡觉/001.png … 017.png）
        const XIAOH_LAYDOWN_FRAMES = 17;
        const XIAOH_LAYDOWN_MS = 150;
        let xiaohLaydownTimer = null;
        let xiaohLaydownFrame = 0;

        function xiaohLaydownFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/趴下睡觉/' + n + '.png';
        }

        // 睡觉待机序列帧（assets/睡觉待机/001.png … 010.png）- 往返循环
        const XIAOH_SLEEP_IDLE_FRAMES = 10;
        const XIAOH_SLEEP_IDLE_MS = 200;
        let xiaohSleepIdleTimer = null;
        let xiaohSleepIdleFrame = 0;
        let xiaohSleepDirection = 1; // 1: 正向, -1: 反向

        function xiaohSleepIdleFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/睡觉待机/' + n + '.png';
        }

        function startXiaohSleepIdleAnim() {
            if (xiaohSleepIdleTimer) return;
            ensureAnimationPreloaded('sleepIdle', XIAOH_SLEEP_IDLE_FRAMES, 'assets/睡觉待机');
            xiaohSleepIdleTimer = setInterval(() => {
                xiaohSleepIdleFrame += xiaohSleepDirection;
                // 到达边界时反向
                if (xiaohSleepIdleFrame >= XIAOH_SLEEP_IDLE_FRAMES - 1) {
                    xiaohSleepDirection = -1;
                } else if (xiaohSleepIdleFrame <= 0) {
                    xiaohSleepDirection = 1;
                }
                // 更新两个界面的小H
                if (el.xiaohSpriteImg) {
                    el.xiaohSpriteImg.src = xiaohSleepIdleFrameSrc(xiaohSleepIdleFrame);
                }
                if (el.xiaohSpriteImgRoom) {
                    el.xiaohSpriteImgRoom.src = xiaohSleepIdleFrameSrc(xiaohSleepIdleFrame);
                }
            }, XIAOH_SLEEP_IDLE_MS);
        }

        function stopXiaohSleepIdleAnim() {
            if (xiaohSleepIdleTimer) {
                clearInterval(xiaohSleepIdleTimer);
                xiaohSleepIdleTimer = null;
            }
        }

        // 当前小H状态
        let currentXiaohState = 'idle'; // idle, laydown, sleep_idle

        // 开始趴下睡觉动画
        function startXiaohLaydownAnim(callback) {
            if (xiaohLaydownTimer || currentXiaohState === 'sleep_idle') return;
            ensureAnimationPreloaded('laydown', XIAOH_LAYDOWN_FRAMES, 'assets/趴下睡觉');
            ensureAnimationPreloaded('sleepIdle', XIAOH_SLEEP_IDLE_FRAMES, 'assets/睡觉待机');

            stopXiaohIdleAnim();
            stopXiaohSleepIdleAnim();

            currentXiaohState = 'laydown';
            xiaohLaydownFrame = 0;

            // 更新房间界面的小H样式（睡觉状态）
            if (el.xiaohCharacterRoom) {
                el.xiaohCharacterRoom.classList.add('xiaoh-sleeping');
            }
            // 隐藏庭院中的小狗（夜晚睡觉时不在庭院显示）
            if (el.xiaoh) {
                el.xiaoh.classList.add('xiaoh-hidden');
            }
            
            xiaohLaydownTimer = setInterval(() => {
                const imgSrc = xiaohLaydownFrameSrc(xiaohLaydownFrame);
                if (el.xiaohSpriteImg) {
                    el.xiaohSpriteImg.src = imgSrc;
                }
                if (el.xiaohSpriteImgRoom) {
                    el.xiaohSpriteImgRoom.src = imgSrc;
                }
                
                xiaohLaydownFrame++;
                
                // 趴下动画完成，进入睡觉待机
                if (xiaohLaydownFrame >= XIAOH_LAYDOWN_FRAMES) {
                    stopXiaohLaydownAnim();
                    currentXiaohState = 'sleep_idle';
                    xiaohSleepIdleFrame = 0;
                    xiaohSleepDirection = 1;
                    startXiaohSleepIdleAnim();
                    if (callback) callback();
                }
            }, XIAOH_LAYDOWN_MS);
        }

        function stopXiaohLaydownAnim() {
            if (xiaohLaydownTimer) {
                clearInterval(xiaohLaydownTimer);
                xiaohLaydownTimer = null;
            }
        }

        // 唤醒小H
        function wakeUpXiaoh() {
            stopXiaohLaydownAnim();
            stopXiaohSleepIdleAnim();
            
            // 移除睡觉样式并显示庭院中的小狗
            if (el.xiaoh) {
                el.xiaoh.classList.remove('xiaoh-sleeping');
                el.xiaoh.classList.remove('xiaoh-hidden');
            }
            if (el.xiaohCharacterRoom) {
                el.xiaohCharacterRoom.classList.remove('xiaoh-sleeping');
            }

            currentXiaohState = 'idle';
            xiaohIdleFrame = 0;
            if (el.xiaohSpriteImg) {
                el.xiaohSpriteImg.src = xiaohIdleFrameSrc(0);
            }
            if (el.xiaohSpriteImgRoom) {
                el.xiaohSpriteImgRoom.src = xiaohIdleFrameSrc(0);
            }
            startXiaohIdleAnim();
        }

        // ==================== 互动界面序列帧动画 ====================
        const XIAOH_EAT_FRAMES = 22;
        const XIAOH_EAT_MS = 100;
        let xiaohEatTimer = null;
        let xiaohEatFrame = 0;
        
        // 动画状态锁
        let isInteractAnimating = false;
        let animLockTimer = null;  // 超时保险定时器
        
        // 设置动画状态并更新按钮
        function setInteractAnimating(animating) {
            isInteractAnimating = animating;
            if (el.actionFeed && el.actionPet && el.actionPlay) {
                el.actionFeed.disabled = animating;
                el.actionPet.disabled = animating;
                el.actionPlay.disabled = animating;
            }
            if (animating) {
                // 启动超时保险（3秒后自动解锁）
                if (animLockTimer) clearTimeout(animLockTimer);
                animLockTimer = setTimeout(() => {
                    if (isInteractAnimating) {
                        console.warn('动画超时保险触发');
                        stopAllInteractAnims();
                    }
                }, 3000);
            } else {
                // 动画结束，清除超时定时器
                if (animLockTimer) {
                    clearTimeout(animLockTimer);
                    animLockTimer = null;
                }
            }
        }
        
        // 停止所有互动动画
        function stopAllInteractAnims() {
            stopXiaohEatAnim();
            stopXiaohHappyAnim();
            stopXiaohRunAnim();
            stopXiaohPlayBallAnim();
            resetXiaohRunPosition();
        }

        function xiaohEatFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/低头吃东西/' + n + '.png';
        }

        function startXiaohEatAnim() {
            if (xiaohEatTimer) return;
            ensureAnimationPreloaded('eat', XIAOH_EAT_FRAMES, 'assets/低头吃东西');
            stopInteractXiaohIdleAnim();
            setInteractAnimating(true);
            xiaohEatFrame = 0;
            xiaohEatTimer = setInterval(() => {
                if (xiaohEatFrame >= XIAOH_EAT_FRAMES - 1) {
                    stopXiaohEatAnim();
                    startInteractXiaohIdleAnim();
                    return;
                }
                xiaohEatFrame++;
                const img = document.getElementById('interact-xiaoh-img');
                if (img) img.src = xiaohEatFrameSrc(xiaohEatFrame);
            }, XIAOH_EAT_MS);
        }

        function stopXiaohEatAnim() {
            if (xiaohEatTimer) {
                clearInterval(xiaohEatTimer);
                xiaohEatTimer = null;
            }
            setInteractAnimating(false);
        }

        const XIAOH_HAPPY_FRAMES = 25;
        const XIAOH_HAPPY_MS = 90;
        let xiaohHappyTimer = null;
        let xiaohHappyFrame = 0;

        function xiaohHappyFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/开心/' + n + '.png';
        }

        function startXiaohHappyAnim() {
            if (xiaohHappyTimer) return;
            ensureAnimationPreloaded('happy', XIAOH_HAPPY_FRAMES, 'assets/开心');
            stopInteractXiaohIdleAnim();
            setInteractAnimating(true);
            xiaohHappyFrame = 0;
            xiaohHappyTimer = setInterval(() => {
                if (xiaohHappyFrame >= XIAOH_HAPPY_FRAMES - 1) {
                    stopXiaohHappyAnim();
                    startInteractXiaohIdleAnim();
                    return;
                }
                xiaohHappyFrame++;
                const img = document.getElementById('interact-xiaoh-img');
                if (img) img.src = xiaohHappyFrameSrc(xiaohHappyFrame);
            }, XIAOH_HAPPY_MS);
        }

        function stopXiaohHappyAnim() {
            if (xiaohHappyTimer) {
                clearInterval(xiaohHappyTimer);
                xiaohHappyTimer = null;
            }
            setInteractAnimating(false);
        }

        const XIAOH_RUN_LEFT_FRAMES = 6;
        const XIAOH_RUN_RIGHT_FRAMES = 7;
        const XIAOH_RUN_MS = 100;
        let xiaohRunTimer = null;
        let xiaohRunFrame = 0;
        let xiaohRunDirection = 1;
        let xiaohRunPosition = 0;

        function xiaohRunLeftFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/向左跑/' + n + '.png';
        }

        function xiaohRunRightFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return 'assets/向右跑/' + n + '.png';
        }

        function startXiaohRunAnim(direction) {
            if (xiaohRunTimer) return;
            ensureAnimationPreloaded('runLeft', XIAOH_RUN_LEFT_FRAMES, 'assets/向左跑');
            ensureAnimationPreloaded('runRight', XIAOH_RUN_RIGHT_FRAMES, 'assets/向右跑');
            stopInteractXiaohIdleAnim();
            setInteractAnimating(true);
            xiaohRunFrame = 0;
            xiaohRunDirection = direction;
            xiaohRunTimer = setInterval(() => {
                const container = document.querySelector('.interact-xiaoh-container');
                if (container && el.interactXiaoh) {
                    const containerWidth = container.offsetWidth;
                    const img = document.getElementById('interact-xiaoh-img');
                    const characterWidth = img ? img.offsetWidth : 150;
                    const maxMove = (containerWidth - characterWidth) / 2 - 10;

                    let newPosition = xiaohRunPosition + xiaohRunDirection * 5;

                    if (newPosition >= maxMove) {
                        newPosition = maxMove;
                        xiaohRunDirection = -1;
                    } else if (newPosition <= -maxMove) {
                        newPosition = -maxMove;
                        xiaohRunDirection = 1;
                    }

                    xiaohRunPosition = newPosition;
                    el.interactXiaoh.style.left = `${xiaohRunPosition}px`;
                }

                xiaohRunFrame = (xiaohRunFrame + 1) % (xiaohRunDirection === 1 ? XIAOH_RUN_RIGHT_FRAMES : XIAOH_RUN_LEFT_FRAMES);
                const img = document.getElementById('interact-xiaoh-img');
                if (img) {
                    img.src = xiaohRunDirection === 1 ? xiaohRunRightFrameSrc(xiaohRunFrame) : xiaohRunLeftFrameSrc(xiaohRunFrame);
                }
            }, XIAOH_RUN_MS);
        }

        function stopXiaohRunAnim() {
            if (xiaohRunTimer) {
                clearInterval(xiaohRunTimer);
                xiaohRunTimer = null;
            }
            setInteractAnimating(false);
        }

        function resetXiaohRunPosition() {
            xiaohRunPosition = 0;
            if (el.interactXiaoh) {
                el.interactXiaoh.style.left = '0px';
            }
        }
        
        // 玩球动画
        const XIAOH_PLAYBALL_FRAMES = 42;
        const XIAOH_PLAYBALL_MS = 90;
        let xiaohPlayBallTimer = null;
        let xiaohPlayBallFrame = 0;
        
        function xiaohPlayBallFrameSrc(index) {
            const n = String(index + 1).padStart(3, '0');
            return `assets/玩球/${n}.png`;
        }
        
        function startXiaohPlayBallAnim() {
            if (xiaohPlayBallTimer) return;
            ensureAnimationPreloaded('playBall', XIAOH_PLAYBALL_FRAMES, 'assets/玩球');
            stopInteractXiaohIdleAnim();
            setInteractAnimating(true);
            xiaohPlayBallFrame = 0;
            xiaohPlayBallTimer = setInterval(() => {
                if (xiaohPlayBallFrame >= XIAOH_PLAYBALL_FRAMES - 1) {
                    stopXiaohPlayBallAnim();
                    startInteractXiaohIdleAnim();
                    return;
                }
                xiaohPlayBallFrame++;
                const img = document.getElementById('interact-xiaoh-img');
                if (img) img.src = xiaohPlayBallFrameSrc(xiaohPlayBallFrame);
            }, XIAOH_PLAYBALL_MS);
        }
        
        function stopXiaohPlayBallAnim() {
            if (xiaohPlayBallTimer) {
                clearInterval(xiaohPlayBallTimer);
                xiaohPlayBallTimer = null;
            }
            setInteractAnimating(false);
        }
        
        // 检查是否应该睡觉（夜晚房间）
        function checkSleepCondition() {
            const roomPage = document.getElementById('room-page');
            const homePage = document.getElementById('home-page');
            const isInRoom = roomPage && roomPage.classList.contains('active');
            const isNight = (roomPage && roomPage.classList.contains('night')) || 
                           (homePage && homePage.classList.contains('night'));

            if (isInRoom && isNight && gameState.xiaohStatus === 'home') {
                if (currentXiaohState !== 'sleep_idle' && currentXiaohState !== 'laydown') {
                    startXiaohLaydownAnim();
                }
            } else if (!isNight) {
                // 白天时，唤醒小H（无论在房间还是庭院）
                if (currentXiaohState === 'sleep_idle' || currentXiaohState === 'laydown') {
                    wakeUpXiaoh();
                }
            }
            // 夜晚在庭院时，保持睡觉状态（庭院中小狗继续隐藏）
        }

        // ==================== 蘑菇生成系统 ====================
        const MUSHROOM_TYPES = [
            { name: 'tallShroom_brown', size: 'large' },
            { name: 'tinyShroom_brown', size: 'small' },
            { name: 'tallShroom_red', size: 'large' },
            { name: 'tinyShroom_red', size: 'small' },
            { name: 'tallShroom_tan', size: 'large' },
            { name: 'tinyShroom_tan', size: 'small' }
        ];

        const MUSHROOM_GROWTH_FRAME_COUNT = 15;
        const MUSHROOM_GROWTH_FRAME_MS = 70;

        function mushroomGrowthFrameSrc(frame) {
            return `assets/蘑菇生长/${String(frame).padStart(3, '0')}.png`;
        }

        let mushroomSpawnInterval;
        let mushroomIdCounter = 0;

        function spawnMushroom() {
            if (gameState.xiaohStatus !== 'home') return;
            if (gameState.mushroomsOnGround.length >= 5) return;

            const mushroomType = randomChoice(MUSHROOM_TYPES);
            const designSize = mushroomType.size === 'large' ? 70 : 40; // 增大蘑菇尺寸
            const minSize = Math.max(designSize, 44); // 最小触摸区域44px
            
            // 定义不能生成蘑菇的区域（按钮位置和小狗）- 使用设计稿坐标
            const forbiddenAreas = [
                { x: 0, y: 0, width: 120, height: 80 }, // 左上角相册按钮区域
                { x: 0, y: 270, width: 120, height: 80 }, // 左下角探险按钮区域
                { x: 310, y: 270, width: 120, height: 80 }, // 右下角商店按钮区域
                { x: 310, y: 220, width: 120, height: 80 }, // 右中部小屋按钮区域
                { x: 130, y: 60, width: 170, height: 150 } // 中间小狗位置区域（包含尾巴）
            ];

            // 寻找有效的生成位置
            let x, y;
            let attempts = 0;
            const maxAttempts = 50;
            const margin = 20;
            const maxY = 350;
            
            do {
                x = randomInt(margin, DESIGN_WIDTH - minSize - margin); // 留出边距
                y = randomInt(margin, maxY - minSize - margin); // 留出上下边距
                attempts++;
            } while (attempts < maxAttempts && isInForbiddenArea(x, y, minSize, forbiddenAreas));

            if (attempts >= maxAttempts) {
                return; // 找不到合适位置，放弃生成
            }

            const mushroom = {
                id: mushroomIdCounter++,
                type: mushroomType.name,
                size: mushroomType.size,
                x: x,
                y: y,
                ready: false,
                designSize: designSize,
                renderSize: minSize
            };

            gameState.mushroomsOnGround.push(mushroom);
            renderMushroom(mushroom);
        }

        // 检查位置是否在禁止区域内
        function isInForbiddenArea(x, y, size, forbiddenAreas) {
            for (const area of forbiddenAreas) {
                if (x < area.x + area.width &&
                    x + size > area.x &&
                    y < area.y + area.height &&
                    y + size > area.y) {
                    return true;
                }
            }
            return false;
        }

        function renderMushroom(mushroom) {
            const mushroomEl = document.createElement('img');
            mushroomEl.className = `mushroom ${mushroom.size} spawning`;
            mushroomEl.src = mushroomGrowthFrameSrc(1);
            mushroomEl.style.left = mushroom.x + 'px';
            mushroomEl.style.bottom = (350 - mushroom.y) + 'px';
            mushroomEl.style.width = (mushroom.renderSize || mushroom.designSize || 35) + 'px';
            mushroomEl.style.height = (mushroom.renderSize || mushroom.designSize || 35) + 'px';
            mushroomEl.dataset.id = mushroom.id;

            function mushroomStillInState() {
                return gameState.mushroomsOnGround.some(m => m.id === mushroom.id);
            }

            function finishMushroomGrowth() {
                if (!mushroomStillInState() || !mushroomEl.isConnected) return;
                mushroomEl.src = mushroomGrowthFrameSrc(MUSHROOM_GROWTH_FRAME_COUNT);
                mushroomEl.classList.remove('spawning');
                mushroom.ready = true;
                mushroomEl.addEventListener('click', () => {
                    collectMushroom(mushroomEl, mushroom);
                });
            }

            let growthFrame = 1;
            const growthTimer = setInterval(() => {
                if (!mushroomStillInState() || !mushroomEl.isConnected) {
                    clearInterval(growthTimer);
                    return;
                }
                growthFrame++;
                if (growthFrame <= MUSHROOM_GROWTH_FRAME_COUNT) {
                    mushroomEl.src = mushroomGrowthFrameSrc(growthFrame);
                } else {
                    clearInterval(growthTimer);
                    finishMushroomGrowth();
                }
            }, MUSHROOM_GROWTH_FRAME_MS);

            el.ground.appendChild(mushroomEl);
        }

        function collectMushroom(elMushroom, mushroom) {
            if (!mushroom.ready) return;

            // 播放采蘑菇音效
            playPickSound();

            // 变大动画
            elMushroom.classList.add('growing');

            setTimeout(() => {
                // 消失动画
                elMushroom.classList.remove('growing');
                elMushroom.classList.add('disappearing');

                setTimeout(() => {
                    // 移除蘑菇
                    elMushroom.remove();
                    gameState.mushroomsOnGround = gameState.mushroomsOnGround.filter(m => m.id !== mushroom.id);

                    // 添加蘑菇币
                    const reward = mushroom.size === 'large' ? 2 : 1;
                    gameState.mushrooms += reward;
                    updateMushroomDisplay();

                    // 显示飘字
                    const rect = elMushroom.getBoundingClientRect();
                    const containerRect = document.getElementById('game-container').getBoundingClientRect();
                    showFloatText(
                        rect.left - containerRect.left + rect.width / 2,
                        rect.top - containerRect.top,
                        `+${reward} 🍄`
                    );
                }, 500);
            }, 500);
        }

        function startMushroomSpawning() {
            // 初始生成1-3个蘑菇
            const initialCount = randomInt(1, 3);
            for (let i = 0; i < initialCount; i++) {
                setTimeout(() => spawnMushroom(), i * 500);
            }

            // 每隔5-10秒随机生成新蘑菇
            mushroomSpawnInterval = setInterval(() => {
                spawnMushroom();
            }, randomInt(5000, 10000));
        }

        // ==================== 物品栏逻辑 ====================
        function renderInventory() {
            el.inventoryItems.innerHTML = '';
            gameState.selectedFood = null;
            gameState.selectedProp = null;
            updateConfirmButton();

            let hasFood = false;
            let hasProp = false;

            // 渲染食物区域
            const foodSection = document.createElement('div');
            foodSection.className = 'inventory-section';
            foodSection.innerHTML = '<div class="section-title">🍖 食物（必须选择）</div>';
            
            SHOP_ITEMS.food.forEach(item => {
                if (gameState.inventory[item.id] > 0) {
                    hasFood = true;
                    const itemEl = document.createElement('div');
                    itemEl.className = `inventory-item ${gameState.selectedFood === item.id ? 'selected' : ''}`;
                    itemEl.dataset.itemId = item.id;
                    itemEl.dataset.category = 'food';
                    itemEl.innerHTML = `
                        <div class="item-icon">
                            <img src="${item.image}" alt="${item.name}" class="item-image">
                        </div>
                        <div class="item-name">${item.name}</div>
                        <div class="item-count">${gameState.inventory[item.id]}</div>
                    `;
                    itemEl.addEventListener('click', () => {
                        selectInventoryItem(item.id, 'food');
                    });
                    foodSection.appendChild(itemEl);
                }
            });

            if (!hasFood) {
                foodSection.innerHTML += '<div class="section-empty">没有食物了~</div>';
            }

            // 渲染道具区域
            const propSection = document.createElement('div');
            propSection.className = 'inventory-section';
            propSection.innerHTML = '<div class="section-title">🎒 道具（可选）</div>';
            
            SHOP_ITEMS.prop.forEach(item => {
                if (gameState.inventory[item.id] > 0) {
                    hasProp = true;
                    const itemEl = document.createElement('div');
                    itemEl.className = `inventory-item ${gameState.selectedProp === item.id ? 'selected' : ''}`;
                    itemEl.dataset.itemId = item.id;
                    itemEl.dataset.category = 'prop';
                    itemEl.innerHTML = `
                        <div class="item-icon">
                            <img src="${item.image}" alt="${item.name}" class="item-image">
                        </div>
                        <div class="item-name">${item.name}</div>
                        <div class="item-count">${gameState.inventory[item.id]}</div>
                    `;
                    itemEl.addEventListener('click', () => {
                        selectInventoryItem(item.id, 'prop');
                    });
                    propSection.appendChild(itemEl);
                }
            });

            if (!hasProp) {
                propSection.innerHTML += '<div class="section-empty">没有道具~</div>';
            }

            el.inventoryItems.appendChild(foodSection);
            el.inventoryItems.appendChild(propSection);

            // 如果没有食物，显示空状态提示去商店（即使有道具也不行，必须有食物才能出发）
            if (hasFood) {
                el.inventoryEmpty.style.display = 'none';
                el.inventoryItems.style.display = 'block';
            } else {
                el.inventoryEmpty.style.display = 'block';
                el.inventoryItems.style.display = 'none';
                // 根据是否有道具显示不同的提示文本
                const emptyText = document.querySelector('.empty-text');
                if (emptyText) {
                    emptyText.innerHTML = hasProp 
                        ? '道具准备好了，但食物不够！<br>快去商店买些好吃的吧！' 
                        : '哎呀~ 背包空空如也！<br>快去商店采购吧！';
                }
            }
        }

        function getItemById(itemId) {
            for (const category of ['food', 'prop']) {
                const item = SHOP_ITEMS[category].find(i => i.id === itemId);
                if (item) return item;
            }
            return null;
        }

        function selectInventoryItem(itemId, category) {
            // 取消同类别的其他选择
            document.querySelectorAll(`.inventory-item[data-category="${category}"]`).forEach(el => el.classList.remove('selected'));
            
            const selectedEl = document.querySelector(`.inventory-item[data-item-id="${itemId}"]`);
            if (selectedEl) {
                // 如果点击的是已选中的道具，则取消选择
                if (category === 'prop' && gameState.selectedProp === itemId) {
                    gameState.selectedProp = null;
                } else {
                    selectedEl.classList.add('selected');
                    if (category === 'food') {
                        gameState.selectedFood = itemId;
                    } else {
                        gameState.selectedProp = itemId;
                    }
                }
            }
            
            updateConfirmButton();
        }

        function updateConfirmButton() {
            if (gameState.selectedFood) {
                const foodName = getItemById(gameState.selectedFood)?.name;
                const propName = gameState.selectedProp ? ` + ${getItemById(gameState.selectedProp)?.name}` : '';
                el.confirmItem.disabled = false;
                el.confirmItem.textContent = `使用 ${foodName}${propName} 出发`;
            } else {
                el.confirmItem.disabled = true;
                el.confirmItem.textContent = '请选择食物';
            }
        }

        // ==================== 出发逻辑 ====================
        el.goBtn.addEventListener('click', () => {
            playClickSound();
            // 检查小狗是否正在睡觉（同时检查状态变量和CSS类）
            const isSleeping = currentXiaohState === 'sleep_idle' || 
                               currentXiaohState === 'laydown' ||
                               (el.xiaohCharacterRoom && el.xiaohCharacterRoom.classList.contains('xiaoh-sleeping'));
            
            if (isSleeping) {
                showMessage('小H正在睡觉，明天再出发吧！');
                return;
            }
            if (gameState.xiaohStatus === 'away') {
                showMessage('小H已经出门啦！');
                return;
            }
            if (gameState.xiaohStatus === 'return') {
                showMessage('先领取奖励吧！');
                return;
            }

            renderInventory();
            el.inventoryModal.classList.add('active');
        });

        // 物品栏关闭
        el.inventoryClose.addEventListener('click', () => {
            playClickSound();
            el.inventoryModal.classList.remove('active');
        });

        // 从物品栏去商店
        el.goToShop.addEventListener('click', () => {
            playClickSound();
            el.inventoryModal.classList.remove('active');
            renderShop('food');
            // 判断来源页面（检查哪个页面当前显示）
            const isInRoom = el.roomPage.classList.contains('active');
            gameState.previousPage = isInRoom ? 'room' : 'home';
            gameState.fromInventory = true; // 记录是从物品栏去的商店
            // 隐藏当前页面，显示商店页面
            if (isInRoom) {
                el.roomPage.style.display = 'none';
            } else {
                el.homePage.style.display = 'none';
            }
            el.shopPage.style.display = 'block';
            
            // 隐藏全屏背景，让shop-page自己的背景显示
            updateFullscreenBg('none');
        });

        // 确认选择物品出发
        el.confirmItem.addEventListener('click', () => {
            playClickSound();
            if (!gameState.selectedFood) return;

            const selectedFood = getItemById(gameState.selectedFood);
            if (!selectedFood) return;

            // 消耗食物
            gameState.inventory[gameState.selectedFood]--;
            
            // 如果选择了道具，也消耗道具
            let selectedProp = null;
            if (gameState.selectedProp) {
                selectedProp = getItemById(gameState.selectedProp);
                gameState.inventory[gameState.selectedProp]--;
            }
            
            // 根据食物等级和道具确定目的地
            const destination = selectDestination(selectedFood, selectedProp);
            
            // 计算奖励（根据食物等级）
            const baseReward = selectedFood.level ? selectedFood.level * 5 : 5;
            const reward = randomInt(baseReward, baseReward + 10);
            
            // 获取目的地key
            const destKey = Object.keys(DESTINATIONS).find(k => DESTINATIONS[k] === destination);
            
            // 关闭物品栏
            el.inventoryModal.classList.remove('active');

            // 开始探险
            startTrip(selectedFood, destination, reward, destKey);
        });

        // 商品数据
        const SHOP_GOODS = {
            bone: { name: '骨头', price: 5, type: 'food', inventoryId: 'bone', 
                   desc: '黄老师做饭时偷偷塞给我的，趁热啃！可以在蘑菇屋附近溜达。' },
            meat: { name: '羊排', price: 15, type: 'food', inventoryId: 'meat', 
                   desc: '昨晚烤全羊何老师专门给我留的！啃得满嘴油~ 跑得更远！' },
            bento: { name: '便当', price: 30, type: 'food', inventoryId: 'bento', 
                    desc: '黄小厨亲手做的便当，跟他们吃的一模一样！吃饱了去掰玉米的地方探险。' },
            steak: { name: '牛排', price: 30, type: 'food', inventoryId: 'steak', 
                    desc: '嘉宾点的牛排，黄老师帮我切好了，一块一块喂的。能去更远的地方！' },
            sushi: { name: '寿司', price: 50, type: 'food', inventoryId: 'sushi', 
                    desc: '有嘉宾来的时候黄老师才会做的料理！解锁蘑菇屋周边新区域。' },
            ball: { name: '玩具球', price: 15, type: 'prop', inventoryId: 'ball', 
                   desc: '彭彭扔给我的球，他每次都扔太远……增加去邻居家的概率。' },
            bowl: { name: '碗', price: 15, type: 'prop', inventoryId: 'bowl', 
                   desc: '何老师给我买的碗，说"小H也有自己的位置"。增加亲密度获取。' },
            swim_ring: { name: '游泳圈', price: 20, type: 'prop', inventoryId: 'swim_ring', 
                        desc: '去水库玩要带的！上次杰哥带我下水用的就是这个。增加去河边的概率。' },
            windmill: { name: '风车', price: 20, type: 'prop', inventoryId: 'windmill', 
                       desc: '插在蘑菇屋门口的风车，我一看到就想往外跑！增加去郊外的概率。' },
            collar: { name: '项圈', price: 25, type: 'prop', inventoryId: 'collar', 
                     desc: '蘑菇屋定制的项圈，上面刻着"蘑菇屋小H"。增加获得稀有明信片的概率。' },
            compass: { name: '指南针', price: 35, type: 'prop', inventoryId: 'compass', 
                      desc: '他们寻宝任务用的同款指南针！增加去新地方探险的概率。' }
        };
        
        let selectedShopItem = null;
        
        // ==================== 商店逻辑 ====================
        function renderShop(tab) {
            // 更新蘑菇币显示
            document.getElementById('shop-mushrooms-count').textContent = gameState.mushrooms;
            
            // 绑定商品点击事件
            document.querySelectorAll('.shop-item').forEach(item => {
                item.addEventListener('click', function() {
                    selectShopItem(this.dataset.item);
                });
            });
            
            // 绑定购买按钮
            document.getElementById('shop-buy-btn').addEventListener('click', buyShopItem);
            
            // 分页功能
            let currentPage = 1;
            const itemsPerPage = 4;
            const allShopItems = Array.from(document.querySelectorAll('.shop-item'));
            const totalPages = Math.ceil(allShopItems.length / itemsPerPage);
            
            function updateShopPage(page) {
                currentPage = page;
                
                // 隐藏所有商品
                allShopItems.forEach((item, index) => {
                    const itemPage = Math.floor(index / itemsPerPage) + 1;
                    item.style.display = itemPage === page ? 'flex' : 'none';
                });
                
                // 更新分页按钮显示
                document.getElementById('shop-prev-btn').style.display = page <= 1 ? 'none' : 'block';
                document.getElementById('shop-next-btn').style.display = page >= totalPages ? 'none' : 'block';
                
                // 更新页码显示
                document.getElementById('shop-page-indicator').textContent = `${page} / ${totalPages}`;
                
                // 清除选中状态
                selectedShopItem = null;
                document.querySelectorAll('.shop-item').forEach(item => {
                    item.classList.remove('selected');
                });
                document.getElementById('shop-description-text').textContent = '点击商品查看详情';
                document.getElementById('shop-buy-btn').disabled = true;
            }
            
            // 绑定分页按钮
            document.getElementById('shop-prev-btn').addEventListener('click', () => {
                playClickSound();
                if (currentPage > 1) {
                    updateShopPage(currentPage - 1);
                }
            });
            
            document.getElementById('shop-next-btn').addEventListener('click', () => {
                playClickSound();
                if (currentPage < totalPages) {
                    updateShopPage(currentPage + 1);
                }
            });
            
            // 初始化第一页
            updateShopPage(1);
        }
        
        function selectShopItem(itemId) {
            // 移除之前的选中状态
            document.querySelectorAll('.shop-item').forEach(item => {
                item.classList.remove('selected');
            });
            
            // 添加新的选中状态
            const itemEl = document.querySelector(`.shop-item[data-item="${itemId}"]`);
            if (itemEl) {
                itemEl.classList.add('selected');
                selectedShopItem = itemId;
                
                // 更新描述
                const goods = SHOP_GOODS[itemId];
                if (goods) {
                    document.getElementById('shop-description-text').textContent = goods.desc;
                }
                
                // 更新购买按钮状态
                updateBuyButton();
            }
        }
        
        function updateBuyButton() {
            const buyBtn = document.getElementById('shop-buy-btn');
            
            if (!selectedShopItem) {
                buyBtn.disabled = true;
                buyBtn.textContent = '请选择商品';
                return;
            }
            
            const goods = SHOP_GOODS[selectedShopItem];
            if (!goods) {
                buyBtn.disabled = true;
                buyBtn.textContent = '请选择商品';
                return;
            }
            
            if (gameState.mushrooms >= goods.price) {
                buyBtn.disabled = false;
                buyBtn.textContent = `购买 (${goods.price} 蘑菇币)`;
            } else {
                buyBtn.disabled = true;
                buyBtn.textContent = '蘑菇币不足';
            }
        }
        
        function buyShopItem() {
            if (!selectedShopItem) return;
            
            const goods = SHOP_GOODS[selectedShopItem];
            if (!goods || gameState.mushrooms < goods.price) return;
            
            playClickSound();
            
            // 扣除蘑菇币
            gameState.mushrooms -= goods.price;
            
            // 添加到物品栏
            if (!gameState.inventory[goods.inventoryId]) {
                gameState.inventory[goods.inventoryId] = 0;
            }
            gameState.inventory[goods.inventoryId]++;
            
            // 更新显示
            document.getElementById('shop-mushrooms-count').textContent = gameState.mushrooms;
            updateMushroomDisplay();
            updateBuyButton();
            
            // 显示购买成功提示
            showMessage(`购买成功！获得${goods.name}！`);
            
            saveGame();
        }

        // 更新屋子蘑菇币显示
        function updateRoomMushroomDisplay() {
            el.roomMushroomNum.textContent = gameState.mushrooms;
        }

        // 更新屋子背景
        function updateRoomBackground() {
            const homePage = document.getElementById('home-page');
            el.roomPage.classList.remove('day', 'night');
            if (homePage.classList.contains('day')) {
                el.roomPage.classList.add('day');
            } else {
                el.roomPage.classList.add('night');
            }
            // 如果在屋子内，检查睡觉条件
            if (el.roomPage.classList.contains('active')) {
                checkSleepCondition();
            }
        }

        // 进入小屋




        // 屋子探险按钮
        el.roomGoBtn.addEventListener('click', () => {
            playClickSound();
            // 检查小狗是否正在睡觉（同时检查状态变量和CSS类）
            const isSleeping = currentXiaohState === 'sleep_idle' || 
                               currentXiaohState === 'laydown' ||
                               (el.xiaohCharacterRoom && el.xiaohCharacterRoom.classList.contains('xiaoh-sleeping'));
            
            if (isSleeping) {
                showMessage('小H正在睡觉，明天再出发吧！');
                return;
            }
            renderInventory();
            el.inventoryModal.classList.add('active');
        });

        // 屋子商店按钮
        el.roomShopBtn.addEventListener('click', () => {
            playClickSound();
            renderShop('food');
            // 记录来源页面
            gameState.previousPage = 'room';
            // 隐藏屋子页面，显示商店页面
            el.roomPage.style.display = 'none';
            el.shopPage.style.display = 'block';
            
            // 隐藏全屏背景，让shop-page自己的背景显示
            updateFullscreenBg('none');
        });

        // 返回庭院箭头按钮
        el.roomBackArrow.addEventListener('click', () => {
            playClickSound();
            playDoorSound();
            el.roomPage.classList.remove('active');
            el.roomPage.style.display = 'none';
            el.homePage.style.display = 'block';
            
            // 恢复全屏背景为庭院背景
            const homePage = document.getElementById('home-page');
            const bgClass = homePage.classList.contains('day') ? 'home-day' : 'home-night';
            updateFullscreenBg(bgClass);
            
            // 如果是夜晚且小狗正在睡觉，不唤醒（庭院中保持隐藏）
        });

        // 设置按钮
        el.settingsBtn.addEventListener('click', () => {
            playClickSound();
            el.settingsModal.classList.add('active');
        });

        // 设置关闭
        el.settingsClose.addEventListener('click', () => {
            playClickSound();
            el.settingsModal.classList.remove('active');
        });

        // 背景音乐开关
        el.bgmToggle.addEventListener('click', () => {
            el.bgmToggle.classList.toggle('active');
            toggleBGMSetting();
        });

        // 音效开关
        el.soundToggle.addEventListener('click', () => {
            el.soundToggle.classList.toggle('active');
            soundEnabled = !soundEnabled;
        });

        // 商店按钮（从主页点击）
        el.shopBtn.addEventListener('click', () => {
            playClickSound();
            renderShop('food');
            // 记录来源页面
            gameState.previousPage = 'home';
            // 隐藏主页，显示商店页面
            el.homePage.style.display = 'none';
            el.shopPage.style.display = 'block';
            
            // 隐藏全屏背景，让shop-page自己的背景显示
            updateFullscreenBg('none');
        });

        // 商店返回按钮
        el.shopBack.addEventListener('click', () => {
            playClickSound();
            // 隐藏商店页面
            el.shopPage.style.display = 'none';
            // 根据来源页面返回
            if (gameState.previousPage === 'room') {
                el.roomPage.style.display = 'block';
                // 保持全屏背景隐藏，让room-page自己的背景显示
                updateFullscreenBg('none');
            } else {
                el.homePage.style.display = 'block';
                // 恢复全屏背景为庭院背景
                const homePage = document.getElementById('home-page');
                const bgClass = homePage.classList.contains('day') ? 'home-day' : 'home-night';
                updateFullscreenBg(bgClass);
            }
            // 如果是从物品栏去的商店，返回后重新显示物品栏
            if (gameState.fromInventory) {
                el.inventoryModal.classList.add('active');
                renderInventory(); // 重新渲染物品栏以显示新购买的物品
                gameState.fromInventory = false; // 重置状态
            }
            // 如果是教程模式下从商店返回，继续教程
            if (tutorialStarted && !gameState.tutorialCompleted && currentTutorialStep === 2) {
                // 从商店返回后继续下一步教程
                nextTutorialStep();
            }
        });

        // ==================== 目的地选择逻辑 ====================
        function selectDestination(food, prop = null) {
            const destinations = Object.keys(DESTINATIONS);
            let weights = destinations.map(() => 1);

            // 根据食物等级调整权重
            if (food.level) {
                destinations.forEach((dest, index) => {
                    const destLevel = getDestinationLevel(dest);
                    if (destLevel <= food.level) {
                        weights[index] = food.level - destLevel + 1;
                    } else {
                        weights[index] = 0.5;
                    }
                });
            }

            // 根据道具增加特定目的地概率
            if (prop && prop.boostDest && prop.boostDest.length > 0) {
                destinations.forEach((dest, index) => {
                    if (prop.boostDest.includes(dest)) {
                        weights[index] *= 2;
                    }
                });
            }

            // 随机选择
            const totalWeight = weights.reduce((a, b) => a + b, 0);
            let random = Math.random() * totalWeight;
            for (let i = 0; i < destinations.length; i++) {
                random -= weights[i];
                if (random <= 0) {
                    return DESTINATIONS[destinations[i]];
                }
            }
            return DESTINATIONS.field;
        }

        function getDestinationLevel(destId) {
            const levels = { field: 1, river: 2, neighbor: 2, market: 3 };
            return levels[destId] || 1;
        }

        // ==================== 旧便当选择逻辑（保留但不使用） ====================
        el.bentoCards.forEach(card => {
            card.addEventListener('click', () => {
                if (card.classList.contains('disabled')) {
                    showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '蘑菇不够哦！');
                    return;
                }

                el.bentoCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                gameState.selectedBento = {
                    type: card.dataset.type,
                    cost: parseInt(card.dataset.cost),
                    time: parseInt(card.dataset.time),
                    reward: card.dataset.reward
                };
                el.confirmGo.disabled = false;
            });
        });

        // 取消出发
        el.cancelGo.addEventListener('click', () => {
            playClickSound();
            el.goModal.classList.remove('active');
        });

        // 确认出发（旧便当系统）
        el.confirmGo.addEventListener('click', () => {
            playClickSound();
            if (!gameState.selectedBento) return;

            const bento = gameState.selectedBento;

            // 扣除蘑菇
            gameState.mushrooms -= bento.cost;
            updateMushroomDisplay();

            // 选择目的地
            const destKeys = Object.keys(DESTINATIONS);
            const destKey = randomChoice(destKeys);
            const destination = DESTINATIONS[destKey];

            // 生成奖励
            const [minReward, maxReward] = bento.reward.split('-').map(Number);
            const reward = randomInt(minReward, maxReward);

            startTrip(bento, destination, reward, destKey);
        });

        // ==================== 开始行程 ====================
        function startTrip(item, destination, reward = null, destKey = null) {
            // 如果没有提供目的地key，从目的地对象获取
            if (!destKey) {
                destKey = Object.keys(DESTINATIONS).find(k => DESTINATIONS[k] === destination);
            }

            // 如果没有提供奖励，根据物品等级计算
            if (reward === null) {
                const baseReward = item.level ? item.level * 5 : 5;
                reward = randomInt(baseReward, baseReward + 10);
            }

            // 选择明信片（根据携带的道具决定）
            let postcard;
            const hasCollar = gameState.inventory.collar && gameState.inventory.collar > 0;
            const hasCamera = gameState.inventory.camera && gameState.inventory.camera > 0;
            
            // 判断是否获得稀有明信片
            // 携带项圈：30%概率获得稀有明信片
            // 携带相机：20%概率获得稀有明信片
            // 同时携带：50%概率获得稀有明信片
            let rareChance = 0;
            if (hasCollar && hasCamera) {
                rareChance = 50; // 同时携带项圈和相机，50%概率
            } else if (hasCollar) {
                rareChance = 30; // 只携带项圈，30%概率
            } else if (hasCamera) {
                rareChance = 20; // 只携带相机，20%概率
            }
            
            // 根据概率选择明信片
            if (rareChance > 0 && Math.random() * 100 < rareChance) {
                // 获得稀有明信片
                postcard = randomChoice(RARE_POSTCARDS);
            } else {
                // 获得普通风景明信片
                // 根据目的地选择对应的明信片
                const locationPostcards = NORMAL_POSTCARDS.filter(p => p.location === destKey);
                if (locationPostcards.length > 0) {
                    postcard = randomChoice(locationPostcards);
                } else {
                    postcard = randomChoice(NORMAL_POSTCARDS);
                }
            }

            // 选择嘉宾评论
            const guestComment = randomChoice(GUEST_COMMENTS);

            // 计算时间（根据食物等级）
            let tripTime = 15; // 默认15秒
            if (item.level) {
                tripTime = 10 + item.level * 5; // 等级越高时间越长
            }

            // 保存行程
            gameState.currentTrip = {
                destination: destKey,
                destName: destination.name,
                destEmoji: destination.emoji,
                destBg: destination.bg,
                time: tripTime,
                reward: reward,
                postcard: postcard,
                guestComment: guestComment,
                startTime: Date.now(),
                photoShown: false
            };

            // 更新状态
            gameState.xiaohStatus = 'away';
            gameState.isTraveling = true; // 旅行中，锁定快跑按钮
            
            // 同时更新庭院和屋子的探险按钮
            el.goBtn.disabled = true;
            el.goBtn.textContent = '已出发';
            el.roomGoBtn.disabled = true;
            el.roomGoBtn.textContent = '已出发';

            // 隐藏小狗（庭院和屋子内的都隐藏）
            el.xiaoh.style.display = 'none';
            el.xiaohCharacterRoom.style.display = 'none';

            // 显示底部进度条
            el.homeProgress.style.display = 'block';

            // 关闭弹窗
            el.goModal.classList.remove('active');

            // 直接开始进度（在当前页面显示）
            startProgress();
        }

        // ==================== 进度条逻辑 ====================
        function startProgress() {
            const trip = gameState.currentTrip;
            const totalTime = trip.time * 1000; // 毫秒

            const startTime = Date.now();

            gameState.progressInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const remaining = Math.max(0, totalTime - elapsed);
                const progress = ((elapsed / totalTime) * 100);

                // 更新首页的进度条
                el.homeProgressBar.style.width = progress + '%';

                // 完成 - 直接显示明信片（去掉途中照片）
                if (remaining <= 0) {
                    clearInterval(gameState.progressInterval);
                    // 隐藏进度条
                    el.homeProgress.style.display = 'none';
                    // 直接显示明信片
                    showReturnModal();
                }
            }, 100);
        }

        // ==================== 归来弹窗 ====================
        function showReturnModal() {
            const trip = gameState.currentTrip;

            // 设置明信片内容
            document.getElementById('postcard-bg-image').src = trip.postcard.image;
            document.getElementById('postcard-text').textContent = trip.postcard.text;
            document.getElementById('postcard-guest').textContent = '💬 ' + trip.guestComment;
            document.getElementById('reward-num').textContent = '+' + trip.reward;

            el.postcardModal.classList.add('active');

            // 更新状态
            gameState.xiaohStatus = 'return';
        }

        // 领取奖励
        el.collectReward.addEventListener('click', () => {
            playClickSound();
            const trip = gameState.currentTrip;

            // 加蘑菇
            gameState.mushrooms += trip.reward;
            updateMushroomDisplay();

            // 添加到相册
            const albumItem = {
                id: Date.now(),
                destination: trip.postcard.name || trip.destName,
                emoji: trip.destEmoji,
                bg: trip.destBg,
                image: trip.postcard.image,
                text: trip.postcard.text,
                date: new Date().toLocaleString('zh-CN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
            };
            gameState.album.push(albumItem);

            // 旅行结束，解锁快跑按钮
            gameState.isTraveling = false;

            // 保存到localStorage
            saveGame();

            // 关闭弹窗
            el.postcardModal.classList.remove('active');

            // 恢复小狗显示（庭院和屋子内的都显示）
            el.xiaoh.style.display = 'block';
            el.xiaoh.classList.add('xiaoh-idle');
            el.xiaohCharacterRoom.style.display = 'block';
            el.xiaohCharacterRoom.classList.add('xiaoh-idle');
            startXiaohIdleAnim();
            
            // 同时恢复庭院和屋子的探险按钮
            el.goBtn.disabled = false;
            el.goBtn.textContent = '🎒 出发探险';
            el.roomGoBtn.disabled = false;
            el.roomGoBtn.textContent = '🎒 出发探险';

            gameState.xiaohStatus = 'home';
            gameState.currentTrip = null;

            showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '欢迎回家！🍄 +' + trip.reward);

            // 如果是教程模式下领取奖励，继续步骤6的教程
            if (tutorialStarted && !gameState.tutorialCompleted) {
                setTimeout(() => {
                    showTutorialStep(5); // 先显示步骤6（索引5）的对话
                }, 1500);
            }
        });

        // 分享
        el.sharePostcard.addEventListener('click', () => {
            playClickSound();
            const trip = gameState.currentTrip;
            const shareText = `【向往的小H】小H从${trip.destName}寄来明信片："${trip.postcard.text}" 🐕🍄`;

            if (navigator.share) {
                navigator.share({
                    title: '向往的小H',
                    text: shareText
                });
            } else {
                // 复制到剪贴板
                navigator.clipboard.writeText(shareText).then(() => {
                    showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '已复制分享文案！');
                });
            }
        });

        // ==================== 相册系统 ====================
        el.albumBtn.addEventListener('click', () => {
            renderAlbum();
            el.homePage.style.display = 'none';
            el.progressPage.style.display = 'none';
            el.albumPage.style.display = 'flex';
        });

        // 记录当前页面状态
        let currentPage = 'home'; // 'home' or 'room'
        
        el.albumBtn.addEventListener('click', () => {
            playClickSound();
            currentPage = 'home';
            renderAlbum();
            el.homePage.style.display = 'none';
            el.progressPage.style.display = 'none';
            el.albumPage.style.display = 'flex';
        });

        el.roomAlbumBtn.addEventListener('click', () => {
            playClickSound();
            currentPage = 'room';
            renderAlbum();
            el.roomPage.style.display = 'none';
            el.albumPage.style.display = 'flex';
        });

        // ==================== 互动界面 ====================
        // 点击庭院小狗进入互动界面
        el.xiaoh.addEventListener('click', () => {
            if (gameState.xiaohStatus !== 'home') return;
            // 如果正在睡觉，不进入交互页面
            if (el.xiaoh.classList.contains('xiaoh-sleeping')) return;
            openInteractPage('home');
        });

        // 点击屋子小狗进入互动界面
        el.xiaohCharacterRoom.addEventListener('click', () => {
            if (gameState.xiaohStatus !== 'home') return;
            // 如果正在睡觉，不进入交互页面
            if (el.xiaohCharacterRoom.classList.contains('xiaoh-sleeping')) return;
            openInteractPage('room');
        });

        function openInteractPage(fromPage) {
            playClickSound();
            currentPage = fromPage;
            renderDiary();
            updateIntimacyDisplay();
            el.homePage.style.display = 'none';
            el.roomPage.style.display = 'none';
            el.interactPage.style.display = 'flex';
            // 启动小狗待机动画
            startInteractXiaohIdleAnim();
        }

        // 返回按钮
        el.interactBack.addEventListener('click', () => {
            playClickSound();
            el.interactPage.style.display = 'none';
            // 停止所有互动页面小狗动画
            stopAllInteractAnims();
            stopInteractXiaohIdleAnim();
            resetXiaohRunPosition();
            setInteractAnimating(false);  // 重置动画锁状态
            if (currentPage === 'room') {
                el.roomPage.style.display = 'block';
            } else {
                el.homePage.style.display = 'flex';
            }
        });

        // 喂食
        el.actionFeed.addEventListener('click', () => {
            playClickSound();
            // 检查是否有食物
            const hasFood = gameState.inventory.bone > 0 || 
                           gameState.inventory.meat > 0 || 
                           gameState.inventory.steak > 0 || 
                           gameState.inventory.sushi > 0 ||
                           gameState.inventory.bento > 0;
            
            if (!hasFood) {
                addDiary('feed', '今天主人没有给我准备食物...有点饿呢 😢');
                return;
            }
            
            // 使用食物（优先使用高级食物）
            if (gameState.inventory.sushi > 0) {
                gameState.inventory.sushi--;
                gameState.intimacy += 5;
                addDiary('feed', randomChoice(INTERACT_TEXT.feed.sushi));
            } else if (gameState.inventory.steak > 0) {
                gameState.inventory.steak--;
                gameState.intimacy += 4;
                addDiary('feed', randomChoice(INTERACT_TEXT.feed.steak));
            } else if (gameState.inventory.bento > 0) {
                gameState.inventory.bento--;
                gameState.intimacy += 4;
                addDiary('feed', randomChoice(INTERACT_TEXT.feed.bento));
            } else if (gameState.inventory.meat > 0) {
                gameState.inventory.meat--;
                gameState.intimacy += 3;
                addDiary('feed', randomChoice(INTERACT_TEXT.feed.meat));
            } else if (gameState.inventory.bone > 0) {
                gameState.inventory.bone--;
                gameState.intimacy += 2;
                addDiary('feed', randomChoice(INTERACT_TEXT.feed.bone));
            }
            
            updateIntimacyDisplay();
            animateXiaoh('feed');
            saveGame();
        });

        // 摸摸
        el.actionPet.addEventListener('click', () => {
            playClickSound();
            gameState.intimacy += 2;
            addDiary('pet', randomChoice(INTERACT_TEXT.pet));
            updateIntimacyDisplay();
            animateXiaoh('pet');
            saveGame();
        });

        // 玩耍
        el.actionPlay.addEventListener('click', () => {
            playClickSound();
            gameState.intimacy += 3;
            addDiary('play', randomChoice(INTERACT_TEXT.play));
            updateIntimacyDisplay();
            animateXiaoh('play');
            saveGame();
        });

        function animateXiaoh(action) {
            if (isInteractAnimating) {
                return;  // 动画正在进行中，忽略新点击
            }
            if (action === 'feed') {
                startXiaohEatAnim();
            } else if (action === 'pet') {
                startXiaohHappyAnim();
            } else if (action === 'play') {
                const playType = Math.random() < 0.5 ? 'run' : 'playBall';
                if (playType === 'run') {
                    const direction = Math.random() < 0.5 ? -1 : 1;
                    startXiaohRunAnim(direction);
                    setTimeout(() => {
                        stopXiaohRunAnim();
                        startInteractXiaohIdleAnim();
                    }, 1500);
                } else {
                    startXiaohPlayBallAnim();
                }
            }
        }

        function addDiary(action, content) {
            const now = new Date();
            const timeStr = now.toLocaleString('zh-CN', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            gameState.diary.unshift({
                id: Date.now(),
                action: action,
                content: content,
                date: timeStr
            });
            
            // 最多保留50条日记
            if (gameState.diary.length > 50) {
                gameState.diary = gameState.diary.slice(0, 50);
            }
            
            renderDiary();
        }

        function renderDiary() {
            if (gameState.diary.length === 0) {
                el.diaryList.innerHTML = '<div class="diary-empty">还没有日记哦~ 快来和小H互动吧！</div>';
                return;
            }
            
            el.diaryList.innerHTML = gameState.diary.map(item => `
                <div class="diary-item">
                    <div class="diary-date">${item.date}</div>
                    <div class="diary-content">${item.content}</div>
                </div>
            `).join('');
        }

        function updateIntimacyDisplay() {
            el.intimacyValue.textContent = gameState.intimacy;
        }

        el.albumBack.addEventListener('click', () => {
            playClickSound();
            el.albumPage.style.display = 'none';
            if (currentPage === 'room') {
                // 从屋子进入相册，返回屋子
                el.roomPage.style.display = 'block';
            } else {
                // 从庭院进入相册（包括探险中），返回庭院
                el.homePage.style.display = 'flex';
                // 如果正在探险中，显示进度条
                if (gameState.xiaohStatus === 'away') {
                    el.homeProgress.style.display = 'block';
                }
            }
        });

        // 打开回收站
        el.albumTrashBtn.addEventListener('click', () => {
            playClickSound();
            renderTrash();
            el.trashModal.classList.add('active');
        });

        // 关闭回收站
        el.trashClose.addEventListener('click', () => {
            playClickSound();
            el.trashModal.classList.remove('active');
        });

        // 清空回收站
        el.trashClear.addEventListener('click', () => {
            playClickSound();
            if (gameState.trash.length === 0) return;
            if (confirm('确定要清空回收站吗？清空后将无法恢复！')) {
                gameState.trash = [];
                updateTrashBtn();
                saveGame();
                renderTrash();
                showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '回收站已清空 🗑️');
            }
        });

        function renderAlbum() {
            el.albumCount.textContent = `已收集 ${gameState.album.length} 张`;

            if (gameState.album.length === 0) {
                el.albumGrid.innerHTML = `
                    <div class="album-empty">
                        <div class="album-empty-icon">📭</div>
                        <div class="album-empty-text">还没有明信片哦~<br>快让小H出发探险吧！</div>
                    </div>
                `;
                return;
            }

            el.albumGrid.innerHTML = gameState.album.map(item => `
                <div class="album-item" data-id="${item.id}">
                    <div class="album-item-img">
                        <img src="${item.image}" class="album-item-photo">
                        <button class="album-item-delete" data-id="${item.id}">🗑️</button>
                    </div>
                    <div class="album-item-info">
                        <div class="album-item-dest">${item.destination}</div>
                        <div class="album-item-date">${item.date}</div>
                    </div>
                </div>
            `).join('');

            // 点击查看大图
            document.querySelectorAll('.album-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.classList.contains('album-item-delete')) return;
                    const id = parseInt(item.dataset.id);
                    const albumItem = gameState.album.find(a => a.id === id);
                    if (albumItem) {
                        showPhotoViewer(albumItem);
                    }
                });
            });

            // 点击删除按钮
            document.querySelectorAll('.album-item-delete').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    playClickSound();
                    e.stopPropagation();
                    const id = parseInt(btn.dataset.id);
                    const albumItem = gameState.album.find(a => a.id === id);
                    if (albumItem) {
                        // 移到回收站
                        gameState.album = gameState.album.filter(a => a.id !== id);
                        gameState.trash.push(albumItem);
                        updateTrashBtn();
                        saveGame();
                        renderAlbum();
                        showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '已移到回收站 🗑️');
                    }
                });
            });
        }

        // 更新回收站按钮状态
        function updateTrashBtn() {
            if (gameState.trash.length > 0) {
                el.albumTrashBtn.classList.add('has-items');
            } else {
                el.albumTrashBtn.classList.remove('has-items');
            }
        }

        // 渲染回收站
        function renderTrash() {
            if (gameState.trash.length === 0) {
                el.trashGrid.innerHTML = `
                    <div class="trash-empty">
                        <div class="trash-empty-icon">🗑️</div>
                        <div class="trash-empty-text">回收站是空的~</div>
                    </div>
                `;
                return;
            }

            el.trashGrid.innerHTML = gameState.trash.map(item => `
                <div class="trash-item" data-id="${item.id}">
                    <div class="trash-item-img">
                        <img src="${item.image}" class="trash-item-photo">
                        <button class="trash-item-restore" data-id="${item.id}">↩️</button>
                    </div>
                    <div class="trash-item-info">
                        <div>${item.destination}</div>
                    </div>
                </div>
            `).join('');

            // 添加恢复按钮事件
            document.querySelectorAll('.trash-item-restore').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    playClickSound();
                    const id = parseInt(btn.dataset.id);
                    const trashItem = gameState.trash.find(t => t.id === id);
                    if (trashItem) {
                        // 恢复到相册
                        gameState.trash = gameState.trash.filter(t => t.id !== id);
                        gameState.album.push(trashItem);
                        updateTrashBtn();
                        saveGame();
                        renderTrash();
                        renderAlbum();
                        showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '已恢复 ✨');
                    }
                });
            });
        }

        function showPhotoViewer(item) {
            document.getElementById('viewer-photo').src = item.image;
            document.getElementById('viewer-text').textContent = item.text;
            el.photoViewer.classList.add('active');
        }

        el.viewerClose.addEventListener('click', () => {
            el.photoViewer.classList.remove('active');
        });

        // ==================== 存档系统 ====================
        function saveGame() {
            localStorage.setItem('xiaoh_game', JSON.stringify({
                mushrooms: gameState.mushrooms,
                album: gameState.album,
                trash: gameState.trash,
                inventory: gameState.inventory,
                intimacy: gameState.intimacy,
                diary: gameState.diary,
                tutorialCompleted: gameState.tutorialCompleted,  // ← 添加
                tutorialStep: gameState.tutorialStep,  // ← 添加
                isTraveling: gameState.isTraveling  // 保存旅行状态
            }));
        }

        function loadGame() {
            const saved = localStorage.getItem('xiaoh_game');
            if (saved) {
                const data = JSON.parse(saved);
                // 确保蘑菇币是数字类型
                gameState.mushrooms = parseInt(data.mushrooms || data.bones || 20, 10) || 20;
                gameState.album = data.album || [];
                gameState.trash = data.trash || [];
                gameState.inventory = data.inventory || {
                    bone: 0,
                    meat: 0,
                    steak: 0,
                    sushi: 0,
                    swim_ring: 0,
                    compass: 0,
                    ball: 0,
                    camera: 0
                };
                gameState.intimacy = parseInt(data.intimacy || 0, 10) || 0;
                gameState.diary = data.diary || [];
                gameState.isTraveling = data.isTraveling || false;

                console.log('[loadGame] 解析存档:', data);
                console.log('[loadGame] tutorialCompleted 原始值:', data.tutorialCompleted, '类型:', typeof data.tutorialCompleted);

                gameState.tutorialCompleted = data.tutorialCompleted === true;
                gameState.tutorialStep = data.tutorialStep || 0;

                console.log('[loadGame] 赋值后 gameState.tutorialCompleted:', gameState.tutorialCompleted);
                updateMushroomDisplay();
            }
        }

        // 更新全屏背景层
        function updateFullscreenBg(newClass) {
            const fullscreenBg = document.getElementById('fullscreen-bg');
            if (!fullscreenBg) return;
            
            fullscreenBg.classList.remove('home-day', 'home-night', 'room-day', 'room-night', 'shop');
            
            if (newClass === 'none') {
                fullscreenBg.style.display = 'none';
            } else {
                fullscreenBg.style.display = 'block';
                fullscreenBg.classList.add(newClass);
            }
        }

        // ==================== 背景时间切换 ====================
        function setBackgroundByTime(auto = true) {
            const hour = new Date().getHours();
            const homePage = document.getElementById('home-page');
            const fullscreenBg = document.getElementById('fullscreen-bg');
            
            homePage.classList.remove('day', 'night');
            
            if (hour >= 6 && hour < 18) {
                homePage.classList.add('day');
                updateFullscreenBg('home-day');
                el.dayNightToggle.innerHTML = '🌙 切换夜晚';
            } else {
                homePage.classList.add('night');
                updateFullscreenBg('home-night');
                el.dayNightToggle.innerHTML = '☀️ 切换白天';
            }
            
            // 更新门图片
            updateDoorImage();
            
            if (!auto) {
                // 手动切换时停止自动检测一段时间
                clearInterval(window.dayNightInterval);
                window.dayNightInterval = setTimeout(() => {
                    window.dayNightInterval = setInterval(setBackgroundByTime, 60000);
                }, 5 * 60 * 1000); // 5分钟后恢复自动检测
            }
        }

        // 更新门按钮图片
        function updateDoorImage() {
            const homePage = document.getElementById('home-page');
            if (homePage.classList.contains('day')) {
                el.doorImg.src = 'assets/组件/白天门.png';
            } else {
                el.doorImg.src = 'assets/组件/晚上的门.png';
            }
        }

        // 门按钮点击事件 - 进入室内场景
        el.doorBtn.addEventListener('click', () => {
            playDoorSound();
            updateRoomBackground();
            updateRoomMushroomDisplay();
            el.roomPage.classList.add('active');
            el.roomPage.style.display = 'block';
            el.homePage.style.display = 'none';
            
            // 隐藏全屏背景，让room-page自己的背景显示
            updateFullscreenBg('none');
            
            setTimeout(checkSleepCondition, 100);
        });

        // 手动切换昼夜
        el.dayNightToggle.addEventListener('click', () => {
            const homePage = document.getElementById('home-page');
            const roomPage = document.getElementById('room-page');
            const shopPage = el.shopPage;
            
            if (homePage.classList.contains('day')) {
                homePage.classList.remove('day');
                homePage.classList.add('night');
                roomPage.classList.remove('day');
                roomPage.classList.add('night');
                el.dayNightToggle.innerHTML = '☀️ 切换白天';
            } else {
                homePage.classList.remove('night');
                homePage.classList.add('day');
                roomPage.classList.remove('night');
                roomPage.classList.add('day');
                el.dayNightToggle.innerHTML = '🌙 切换夜晚';
                // 切换到白天时，唤醒睡觉的小狗
                if (currentXiaohState === 'sleep_idle' || currentXiaohState === 'laydown') {
                    wakeUpXiaoh();
                }
            }
            
            // 只在庭院场景下更新全屏背景
            if (homePage.style.display !== 'none') {
                const bgClass = homePage.classList.contains('day') ? 'home-day' : 'home-night';
                updateFullscreenBg(bgClass);
            }
            
            // 更新门图片
            updateDoorImage();
            
            // 停止自动检测5分钟
            clearInterval(window.dayNightInterval);
            window.dayNightInterval = setTimeout(() => {
                setBackgroundByTime();
                window.dayNightInterval = setInterval(setBackgroundByTime, 60000);
            }, 5 * 60 * 1000);
        });

        // ==================== 资源预加载系统 ====================
        const LOADING_TIMEOUT = 15000;

        const preloadResources = [
            'assets/背景/garden-day.png',
            'assets/背景/garden-night.png',
            'assets/待机/001.png',
            'assets/待机/002.png',
            'assets/待机/003.png',
            'assets/待机/004.png',
            'assets/待机/005.png',
            'assets/待机/006.png',
            'assets/待机/007.png',
            'assets/待机/008.png',
            'assets/组件/白天门.png',
            'assets/组件/晚上的门.png'
        ];

        const preloadXiahFrames = [];
        for (let i = 1; i <= 22; i++) {
            preloadXiahFrames.push(`assets/待机/${String(i).padStart(3, '0')}.png`);
        }
        for (let i = 1; i <= 22; i++) {
            preloadXiahFrames.push(`assets/低头吃东西/${String(i).padStart(3, '0')}.png`);
        }
        for (let i = 1; i <= 25; i++) {
            preloadXiahFrames.push(`assets/开心/${String(i).padStart(3, '0')}.png`);
        }

        const preloadedSets = {};

        function preloadAnimationSet(name, frameCount, folder) {
            if (preloadedSets[name]) return;
            preloadedSets[name] = 'loading';

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = `${folder}/${String(i).padStart(3, '0')}.png`;
            }

            setTimeout(() => {
                preloadedSets[name] = true;
            }, frameCount * 20);
        }

        function ensureAnimationPreloaded(name, frameCount, folder) {
            if (!preloadedSets[name]) {
                preloadAnimationSet(name, frameCount, folder);
            }
        }

        let loadedCount = 0;
        let isGameReady = false;

        function updateLoadingProgress(percent, text) {
            const loadingBar = document.getElementById('loading-bar');
            const loadingText = document.getElementById('loading-text');
            if (loadingBar) loadingBar.style.width = percent + '%';
            if (loadingText) loadingText.textContent = text;
        }

        function hideLoadingScreen() {
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 800);
            }
        }

        startGameInitialization = function() {
            if (isGameReady) return;
            isGameReady = true;

            // 1. 先加载存档（这步最关键！）
            loadGame();

            updateTrashBtn();
            startMushroomSpawning();
            setBackgroundByTime();
            initBGM();
            startXiaohIdleAnim();

            setTimeout(() => {
                hideLoadingScreen();
                // 2. 加载完成后再检查是否显示开场
                checkShowOpening();
            }, 300);
        };
        // 更新小H快跑按钮状态
        function updateRunBtnState() {
            const isLocked = !canAccessMiniGame();
            console.log(`[按钮状态] 小游戏按钮锁定=${isLocked}`);
            const btns = [el.runBtn, el.roomRunBtn];
            btns.forEach(btn => {
                if (!btn) {
                    console.log('[按钮状态] 按钮元素不存在');
                    return;
                }
                if (isLocked) {
                    btn.style.opacity = '0.5';
                    btn.style.cursor = 'not-allowed';
                    btn.textContent = '🔒 小H快跑';
                    console.log('[按钮状态] 已设为锁定样式');
                } else {
                    btn.style.opacity = '1';
                    btn.style.cursor = 'pointer';
                    btn.textContent = '🏃 小H快跑';
                    console.log('[按钮状态] 已设为解锁样式');
                }
            });
        }


// ===== 在主游戏页面加载时执行 =====
// ===== 检查小游戏蘑菇奖励（在 loadGame 后调用）=====
function checkMushroomReward() {
    const lastReward = localStorage.getItem('lastMushroomReward');
    const totalReward = localStorage.getItem('mushroomReward');

    if (lastReward && lastReward !== '0') {
        const count = parseInt(lastReward);
        const total = parseInt(totalReward || '0');

        showMushroomToast(`🍄 小H快跑获得 ${count} 个蘑菇！累计: ${total} 个`);

        gameState.mushrooms += count;
        updateMushroomDisplay();
        saveGame();

        localStorage.removeItem('lastMushroomReward');
    }
}

function showMushroomToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(180deg, #FF6B6B, #EE5A5A);
        color: white;
        padding: 15px 30px;
        border-radius: 10px;
        font-family: 'Courier New', monospace;
        font-size: 1.2em;
        font-weight: bold;
        border: 3px solid #8B4513;
        box-shadow: 0 4px 0 #8B4513;
        z-index: 1000;
        animation: bounce 0.6s ease-in-out infinite alternate;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    // 3秒后消失
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}



        // 在 startGameInitialization 末尾调用
        updateRunBtnState();
        
        // 如果存档中显示正在旅行，恢复锁定状态
        if (gameState.isTraveling) {
            console.log('[游戏初始化] 检测到旅行状态，锁定快跑按钮');
        }
        console.log('[游戏初始化] 教程完成状态:', gameState.tutorialCompleted, '存档:', localStorage.getItem('xiaoh_game'));

        function preloadImage(src) {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    resolve(true);
                };
                img.onerror = () => {
                    loadedCount++;
                    resolve(false);
                };
                img.src = src;
            });
        }

        const DESIGN_WIDTH = 430;
        const DESIGN_HEIGHT = 932;
        const MIN_TOUCH_SIZE = 44;

        function initResponsive() {
            updateScale();
            window.addEventListener('resize', updateScale);
            window.addEventListener('orientationchange', updateScale);
        }

        function updateScale() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            
            const widthScale = viewportWidth / DESIGN_WIDTH;
            const heightScale = viewportHeight / DESIGN_HEIGHT;
            const scale = Math.min(widthScale, heightScale);

            document.documentElement.style.setProperty('--scale', scale);
            
            const safeTop = Math.max(0, window.safeAreaInsets?.top || 0);
            document.documentElement.style.setProperty('--safe-top', `${safeTop}px`);
            
            const gameContainer = document.getElementById('game-container');
            if (gameContainer) {
                const scaledWidth = DESIGN_WIDTH * scale;
                const translateX = (viewportWidth - scaledWidth) / 2;
                
                gameContainer.style.transform = `scale(${scale}) translateX(${translateX / scale}px)`;
                gameContainer.style.transformOrigin = 'top left';
                gameContainer.style.width = `${DESIGN_WIDTH}px`;
                gameContainer.style.height = `${DESIGN_HEIGHT}px`;
                gameContainer.style.marginTop = `${safeTop}px`;
                gameContainer.style.marginLeft = '0';
                gameContainer.style.marginRight = '0';
            }
        }

        async function initPreload() {
            const totalResources = preloadResources.length + preloadXiahFrames.length;
            updateLoadingProgress(5, '正在加载背景资源...');

            for (let i = 0; i < preloadResources.length; i++) {
                await preloadImage(preloadResources[i]);
                const percent = Math.floor((loadedCount / totalResources) * 80) + 5;
                updateLoadingProgress(percent, `正在加载资源... ${loadedCount}/${totalResources}`);
            }

            updateLoadingProgress(85, '正在加载角色动画...');

            const loadingImg = document.getElementById('loading-xiaoh-img');
            let frameIndex = 0;

            function animateLoadingSprite() {
                if (!isGameReady) {
                    frameIndex = (frameIndex + 1) % 8;
                    if (loadingImg) {
                        loadingImg.src = `assets/待机/${String(frameIndex + 1).padStart(3, '0')}.png`;
                    }
                    setTimeout(animateLoadingSprite, 150);
                }
            }
            animateLoadingSprite();

            for (let i = 0; i < preloadXiahFrames.length; i++) {
                await preloadImage(preloadXiahFrames[i]);
                const percent = Math.floor(85 + (loadedCount / totalResources) * 10);
                updateLoadingProgress(percent, `正在加载动画帧... ${loadedCount}/${totalResources}`);
            }

            updateLoadingProgress(98, '即将开始游戏...');
            setTimeout(startGameInitialization, 200);
        }

        setTimeout(() => {
            if (!isGameReady) {
                updateLoadingProgress(100, '加载完成！');
                setTimeout(startGameInitialization, 500);
            }
        }, LOADING_TIMEOUT);

        initResponsive();

        // ==================== 新手教程系统 ====================
        const TUTORIAL_DATA = [
            {
                step: 1,
                title: '欢迎来到蘑菇屋',
                dialogs: [
                    { speaker: '小H', text: '嘿，新面孔。' },
                    { speaker: '小H', text: '你是来帮忙的吧？正好，院子里的蘑菇还没摘。' },
                    { speaker: '小H', text: '你叫我小H就行。我一般在这儿趴着，饿了就闻闻厨房。' }
                ],
                guide: null
            },
            {
                step: 2,
                title: '捡蘑菇',
                dialogs: [
                    { speaker: '小H', text: '看见那些蘑菇了吗？' },
                    { speaker: '小H', text: '这是蘑菇屋的"钱"，捡了就能去商店换好吃的。何老师管这叫"货币"，我管这叫"好吃的通行证"。' },
                    { speaker: '旁白', text: '💡 点击任意蘑菇来收集' }
                ],
                guide: null,
                trigger: 'collect_mushroom'
            },
            {
                step: 3,
                title: '蘑菇商店',
                dialogs: [
                    { speaker: '小H', text: '骨头5个蘑菇，羊排15个，便当30个……' },
                    { speaker: '小H', text: '带不同的吃的出门，我会去不同的地方。带好的我就跑远点，带一般的就在附近转转。' },
                    { speaker: '小H', text: '你自己看着买吧~' },
                    { speaker: '旁白', text: '💡 点击右下角蘑菇商店按钮进入商店' }
                ],
                guide: null,
                trigger: 'open_shop'
            },
            {
                step: 4,
                title: '和小H互动',
                dialogs: [
                    { speaker: '小H', text: '你……你不摸摸我吗？' },
                    { speaker: '何老师', text: '小H最喜欢被摸头了，你试试~' },
                    { speaker: '小H', text: '何老师每次来都摸我头，超舒服的。' },
                    { speaker: '旁白', text: '💡 点击中间的小H进入互动界面，先点击【摸摸】，再点击【喂食】' }
                ],
                guide: null,
                trigger: 'close_interact'
            },
            {
                step: 5,
                title: '出发探险',
                dialogs: [
                    { speaker: '小H', text: '吃饱了我想出去溜达！' },
                    { speaker: '小H', text: '外面可好玩了，有水库、有玉米地、还有彩灯。' },
                    { speaker: '小H', text: '等我给你寄明信片！' },
                    { speaker: '旁白', text: '💡 点击左下角【探险】按钮，选择食物后点击出发' }
                ],
                guide: null,
                trigger: 'xiaoh_leave'
            },
            {
                step: 6,
                title: '收到明信片',
                dialogs: [
                    { speaker: '小H', text: '汪！我回来了！' },
                    { speaker: '小H', text: '明信片收到了吗？好看吧？' }
                ],
                guide: null,
                autoNext: true
            },
            {
                step: 7,
                title: '教程完成',
                dialogs: [
                    { speaker: '旁白', text: '🎉 恭喜完成新手教程！记住这几件事——' },
                    { speaker: '旁白', text: '🍄 蘑菇是这里的钱，捡得越多能买的东西越好' },
                    { speaker: '旁白', text: '🍖 带不同的食物，小H会去不同的地方' },
                    { speaker: '旁白', text: '🖼️ 小H每次出门都会寄明信片回来' },
                    { speaker: '小H', text: '懂了不？不懂就再看我出去一趟。' },
                    { speaker: '小H', text: '好了，你可以自由发挥了。我去趴会儿。' },
                    { speaker: '小H', text: '有事叫我。汪。' }
                ],
                guide: null,
                autoComplete: true
            }
        ];

        let currentDialogIndex = 0;
        let currentTutorialStep = 0;
        let tutorialStarted = false;

        function showOpeningScene() {
            // 如果已经完成教程，绝不显示开场
            if (gameState.tutorialCompleted === true) {
                console.log('[开场] 教程已完成，阻止显示开场画面');
                return;
            }
            el.openingScene.style.display = 'flex';
            el.loadingScreen.style.display = 'none';
        }

        function hideOpeningScene() {
            el.openingScene.style.display = 'none';
            startTutorial();
        }

        function startTutorial() {
            // 如果已经完成教程，不再启动
            if (gameState.tutorialCompleted === true) {
                console.log('[教程] 已完成，跳过');
                return;
            }
            tutorialStarted = true;
            currentTutorialStep = 0;
            currentDialogIndex = 0;
            gameState.tutorialStep = 0;
            showTutorialStep(0);
        }

        function showTutorialStep(stepIndex) {
            if (stepIndex >= TUTORIAL_DATA.length) {
                completeTutorial();
                return;
            }

            const step = TUTORIAL_DATA[stepIndex];
            currentTutorialStep = stepIndex;
            gameState.tutorialStep = stepIndex;

            // 更新步骤提示
            el.tutorialStep.textContent = `步骤 ${String(step.step).padStart(2, '0')} / ${String(TUTORIAL_DATA.length).padStart(2, '0')}`;

            // 显示教程覆盖层
            el.tutorialOverlay.classList.add('active');

            // 显示对话框
            currentDialogIndex = 0;
            showDialog(stepIndex, 0);
        }

        function showDialog(stepIndex, dialogIndex) {
            const step = TUTORIAL_DATA[stepIndex];
            
            // 如果没有对话内容，直接显示指引
            if (!step.dialogs || step.dialogs.length === 0) {
                showGuide(step);
                return;
            }
            
            if (dialogIndex >= step.dialogs.length) {
                // 当前步骤对话结束，显示指引
                showGuide(step);
                return;
            }

            const dialog = step.dialogs[dialogIndex];
            currentDialogIndex = dialogIndex;

            // 更新对话框内容
            el.dialogSpeaker.textContent = dialog.speaker;
            el.dialogText.textContent = dialog.text;

            // 更新立绘显示
            updateSprites(dialog.speaker);

            // 显示对话框
            document.querySelector('.tutorial-dialog').style.display = 'block';

            // 启用对话框点击事件（用于继续对话）
            document.querySelector('.tutorial-dialog').style.pointerEvents = 'auto';

            // 添加点击继续事件
            const overlay = el.tutorialOverlay;
            const handleClick = () => {
                overlay.removeEventListener('click', handleClick);
                showDialog(stepIndex, dialogIndex + 1);
            };
            overlay.addEventListener('click', handleClick);
        }

        function updateSprites(speaker) {
            // 隐藏所有立绘
            el.tutorialHe.classList.add('hidden');
            el.tutorialHuang.classList.add('hidden');
            el.tutorialXiaoh.classList.add('hidden');

            // 移除说话状态
            el.tutorialHe.classList.remove('speaking');
            el.tutorialHuang.classList.remove('speaking');
            el.tutorialXiaoh.classList.remove('speaking');

            // 小H说话时不显示立绘（主屏幕已有小H）
            if (speaker === '何老师') {
                el.tutorialHe.classList.remove('hidden');
                el.tutorialHe.classList.add('speaking');
            } else if (speaker === '黄老师') {
                el.tutorialHuang.classList.remove('hidden');
                el.tutorialHuang.classList.add('speaking');
            }
            // 小H说话时不显示立绘
        }

        function showGuide(step) {
            // 隐藏对话框的点击事件，允许点击穿透到游戏元素
            document.querySelector('.tutorial-dialog').style.pointerEvents = 'none';

            // 隐藏对话框，让用户可以看到并点击目标按钮
            document.querySelector('.tutorial-dialog').style.display = 'none';

            if (!step.guide) {
                // 没有指引，直接进入下一步或完成
                if (step.trigger) {
                    // 等待触发事件
                    setupTrigger(step.trigger, step.step);
                } else if (step.autoComplete) {
                    // 自动完成教程（用于步骤7）
                    setTimeout(() => completeTutorial(), 3000);
                } else if (step.autoNext) {
                    // 自动进入下一步（用于步骤6）
                    setTimeout(() => nextTutorialStep(), 500);
                } else {
                    // 自动进入下一步
                    setTimeout(() => nextTutorialStep(), 1500);
                }
                return;
            }

            const guide = step.guide;

            // 显示高亮或箭头
            if (guide.type === 'highlight') {
                // 高亮指定元素
                const target = document.querySelector(guide.target);
                if (target) {
                    const rect = target.getBoundingClientRect();
                    el.tutorialHighlight.style.display = 'block';
                    el.tutorialHighlight.style.left = rect.left + 'px';
                    el.tutorialHighlight.style.top = rect.top + 'px';
                    el.tutorialHighlight.style.width = rect.width + 'px';
                    el.tutorialHighlight.style.height = rect.height + 'px';
                }
            } else if (guide.type === 'button') {
                // 箭头指向指定按钮
                const target = document.querySelector(guide.target);
                if (target) {
                    const rect = target.getBoundingClientRect();
                    el.tutorialArrow.style.display = 'block';
                    el.tutorialArrow.className = `tutorial-arrow ${guide.arrow}`;
                    if (guide.arrow === 'up') {
                        el.tutorialArrow.style.left = rect.left + rect.width / 2 - 20 + 'px';
                        el.tutorialArrow.style.top = rect.bottom + 10 + 'px';
                    } else if (guide.arrow === 'down') {
                        el.tutorialArrow.style.left = rect.left + rect.width / 2 - 20 + 'px';
                        el.tutorialArrow.style.top = rect.top - 50 + 'px';
                    } else if (guide.arrow === 'left') {
                        el.tutorialArrow.style.left = rect.right + 10 + 'px';
                        el.tutorialArrow.style.top = rect.top + rect.height / 2 - 20 + 'px';
                    } else if (guide.arrow === 'right') {
                        el.tutorialArrow.style.left = rect.left - 50 + 'px';
                        el.tutorialArrow.style.top = rect.top + rect.height / 2 - 20 + 'px';
                    }
                }
            }

            // 设置触发事件
            if (step.trigger) {
                setupTrigger(step.trigger, step.step);
            }
        }

        function setupTrigger(triggerType, stepNum) {
            // 根据触发类型设置事件监听
            switch (triggerType) {
                case 'collect_mushroom':
                    // 监听蘑菇点击
                    const mushrooms = document.querySelectorAll('.mushroom');
                    mushrooms.forEach(mushroom => {
                        mushroom.addEventListener('click', onCollectMushroomTrigger);
                    });
                    break;
                case 'open_shop':
                    // 监听商店按钮点击
                    el.shopBtn.addEventListener('click', onOpenShopTrigger);
                    break;
                case 'close_interact':
                    // 监听互动界面返回按钮点击
                    el.interactBack.addEventListener('click', onCloseInteractTrigger);
                    break;
                case 'xiaoh_leave':
                    // 监听小H出发（在confirmGo按钮点击时触发）
                    el.confirmGo.addEventListener('click', onXiaohLeaveTrigger);
                    break;
                case 'collect_postcard':
                    // 领取奖励按钮的教程逻辑在领取奖励事件处理中直接处理，不需要额外监听
                    break;
            }
        }

        function clearTrigger(triggerType) {
            switch (triggerType) {
                case 'collect_mushroom':
                    const mushrooms = document.querySelectorAll('.mushroom');
                    mushrooms.forEach(mushroom => {
                        mushroom.removeEventListener('click', onCollectMushroomTrigger);
                    });
                    break;
                case 'open_shop':
                    el.shopBtn.removeEventListener('click', onOpenShopTrigger);
                    break;
                case 'close_interact':
                    el.interactBack.removeEventListener('click', onCloseInteractTrigger);
                    break;
                case 'xiaoh_leave':
                    el.confirmGo.removeEventListener('click', onXiaohLeaveTrigger);
                    break;
                case 'collect_postcard':
                    // 领取奖励按钮的教程逻辑在领取奖励事件处理中直接处理，不需要移除监听
                    break;
            }
        }

        function onCollectMushroomTrigger() {
            clearTrigger('collect_mushroom');
            hideGuide();
            // 显示反馈
            showFloatText(window.innerWidth / 2, window.innerHeight * 0.5, '够买根骨头了！走走走，去商店！');
            setTimeout(nextTutorialStep, 1500);
        }

        function onOpenShopTrigger() {
            clearTrigger('open_shop');
            hideGuide();
            // 不立即进入下一步，等待用户从商店返回后再继续（在商店返回按钮中处理）
        }

        function onCloseInteractTrigger() {
            clearTrigger('close_interact');
            hideGuide();
            nextTutorialStep();
        }

        function onXiaohLeaveTrigger() {
            clearTrigger('xiaoh_leave');
            hideGuide();
            // 不立即进入下一步，等待小H回来收到明信片后再继续
        }

        function hideGuide() {
            el.tutorialArrow.style.display = 'none';
            el.tutorialHighlight.style.display = 'none';
        }

        function nextTutorialStep() {
            const nextStep = currentTutorialStep + 1;
            if (nextStep >= TUTORIAL_DATA.length) {
                completeTutorial();
            } else {
                showTutorialStep(nextStep);
            }
        }

        function completeTutorial() {
            el.tutorialOverlay.classList.remove('active');
            hideGuide();
            gameState.tutorialCompleted = true;
            saveGame();

            // 显示完成弹窗
            el.tutorialComplete.classList.add('active');

            // 解锁小H快跑按钮
            updateRunBtnState();
            console.log('[教程完成] 已解锁小H快跑按钮');
        }


// 显示小H快跑解锁提示（在教程完成弹窗关闭后调用）
function showRunGameUnlockToast() {
    const toast = document.createElement('div');
    toast.id = 'run-unlock-toast';
    toast.style.cssText = `
        position: fixed;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(180deg, #FFD700, #FFA500);
        color: #8B4513;
        padding: 15px 25px;
        border-radius: 12px;
        font-family: 'Courier New', monospace;
        font-size: 1.1em;
        font-weight: bold;
        border: 3px solid #8B4513;
        box-shadow: 0 4px 0 #8B4513, 0 8px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        text-align: center;
        animation: bounce 0.6s ease-in-out infinite alternate;
        max-width: 80%;
    `;
    toast.innerHTML = `
        <div style="font-size: 1.5em; margin-bottom: 5px;">🏃‍♂️🐕</div>
        <div>小H快跑已解锁！</div>
        <div style="font-size: 0.85em; margin-top: 5px; color: #666;">快去庭院右下角体验吧~</div>
    `;
    document.body.appendChild(toast);

    // 3秒后自动消失
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s, transform 0.5s';
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}




        // 教程完成按钮点击
        el.completeBtn.addEventListener('click', () => {
            playClickSound();
            el.tutorialComplete.classList.remove('active');
            updateRunBtnState();  // ← 保险：确保按钮状态更新

            // 显示小H快跑解锁提示
            setTimeout(() => {
                showRunGameUnlockToast();
            }, 300);  // 稍微延迟，等弹窗完全关闭
        });

        // 开场开始按钮
        el.openingStart.addEventListener('click', () => {
            playClickSound();
            hideOpeningScene();
        });

        // 在游戏初始化时显示开场画面（如果是第一次玩）
function checkShowOpening() {
    const saved = localStorage.getItem('xiaoh_game');

    // 默认隐藏开场
    el.openingScene.style.display = 'none';

    if (!saved) {
        console.log('[开场检查] 无存档，显示开场');
        setTimeout(showOpeningScene, 1000);
        return;
    }

    try {
        const data = JSON.parse(saved);
        console.log('[开场检查] 存档 tutorialCompleted:', data.tutorialCompleted);

        if (data.tutorialCompleted === true) {
            gameState.tutorialCompleted = true;
            console.log('[开场检查] 教程已完成，跳过开场');
            return;
        }
    } catch (e) {
        console.log('[开场检查] 存档解析失败', e);
    }

    console.log('[开场检查] 教程未完成，显示开场');
    setTimeout(showOpeningScene, 1000);
}

        // 覆盖startGameInitialization以添加开场逻辑
        const originalStartGameInitialization = startGameInitialization;
        startGameInitialization = function() {
            if (isGameReady) return;
            isGameReady = true;

            loadGame();  // ← 先加载存档
            checkMushroomReward();  // ← 再检查蘑菇奖励（此时 gameState 已加载）
            startMushroomSpawning();
            setBackgroundByTime();
            initBGM();
            startXiaohIdleAnim();

            setTimeout(() => {
                hideLoadingScreen();
                checkShowOpening();
            }, 300);
        };


        // 小H快跑 - 跳转到小游戏
        // 小H快跑 - 跳转到小游戏（未完成教程前禁止）
        function canAccessMiniGame() {
            const saved = localStorage.getItem('xiaoh_game');
            if (!saved) {
                console.log('[教程检查] 无存档，未解锁小游戏');
                return false;
            }
            try {
                const data = JSON.parse(saved);
                const completed = data.tutorialCompleted === true;
                console.log(`[教程检查] tutorialCompleted=${completed}`, data);
                return completed;
            } catch (e) {
                console.log('[教程检查] 存档解析失败', e);
                return false;
            }
        }

        function goToMiniGame() {
            window.location.assign('littlegame/小H快跑.html');
        }

        // 旅行中点击小H快跑的锁定弹窗
        function showTravelLockModal() {
            let modal = document.getElementById('travel-lock-modal');
            if (!modal) {
                modal = document.createElement('div');
                modal.id = 'travel-lock-modal';
                modal.className = 'modal-overlay';
                modal.innerHTML = `
                    <div class="modal-content" style="text-align: center; padding: 30px 20px;">
                        <div style="font-size: 60px; margin-bottom: 15px;">🏃‍♂️💨</div>
                        <div style="font-size: 18px; color: #5a4a3a; margin-bottom: 10px; font-weight: bold;">
                            小H旅行去了
                        </div>
                        <div style="font-size: 14px; color: #8a7a6a; margin-bottom: 25px;">
                            请等小H回来后再一起玩吧~
                        </div>
                        <button class="modal-btn primary" onclick="document.getElementById('travel-lock-modal').classList.remove('active')" 
                            style="min-width: 120px; padding: 12px 24px; font-size: 16px;">
                            知道了
                        </button>
                    </div>
                `;
                document.body.appendChild(modal);
            }
            modal.classList.add('active');
        }

        function showTutorialLockMessage() {
            showMessage('先完成新手教程才能去小H快跑哦！');
        }

        el.runBtn.addEventListener('click', () => {
            playClickSound();
            if (gameState.isTraveling) {
                showTravelLockModal();
                return;
            }
            if (canAccessMiniGame()) {
                goToMiniGame();
            } else {
                showTutorialLockMessage();
            }
        });

        el.roomRunBtn.addEventListener('click', () => {
            playClickSound();
            if (gameState.isTraveling) {
                showTravelLockModal();
                return;
            }
            if (canAccessMiniGame()) {
                goToMiniGame();
            } else {
                showTutorialLockMessage();
            }
        });
        // 小H快跑 - 跳转到小游戏


        initPreload();

        // 每分钟检查一次时间，自动切换背景
        setInterval(setBackgroundByTime, 60000);

        // 防止页面滚动
        document.addEventListener('touchmove', (e) => {
            if (e.target.closest('#game-container')) {
                const scrollableContainers = ['.album-grid', '.shop-items', '.inventory-items', '.diary-list', '.trash-grid'];
                const isScrollContainer = scrollableContainers.some(selector => e.target.closest(selector));
                if (!isScrollContainer) {
                    e.preventDefault();
                }
            }
        }, { passive: false });