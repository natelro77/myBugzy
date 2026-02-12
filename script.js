// Yara's World - Complete JavaScript Application
// State management
let isAuthenticated = false;
let currentPage = 'login';
let chatOpen = false;
let chatMessages = [
    {
        id: 1,
        text: "Hi yara... I'm Nate, I'm still here if you need me. I know i am very busy, but I care about you deeply, my pretty princess. 💜",
        isUser: false
    }
];

// Nate's twin responses
const nateResponses = {
    miss: [
        "I miss you more than words can express, my pretty princess.",
        "Every day I miss you more ",
        "hi faggot i miss you."
    ],
    love: [
        "I love you, my princess..",
        "I love you to the moon and back, beautiful... that will never change, even if I'm not there with you, my pretty princess.",
        "My love for you is eternal, ... distance and time can't change that, my pretty princess."
    ],
    sad: [
        "dont be sad twin. you are the prettiest girl i have ever seen.",
        "I hate seeing you sad, beautiful... I wish you could see yourself through my eyes",
        "Your sadness breaks my heart, sweet yara... I'm sorry I can't be there to comfort you properly, my pretty princess."
    ],
    default: [
        "HEYYYY TWIN I AM HEREEEEE WOOOHOOOOOOOOOOO.",
        "You make me fold like crazyyyyyy.",
        "hiii guess what? You're the most beautiful soul I've ever known, my pretty princess.",
        "I think about you every day, sweet angel... I hope you're taking care of yourself, my pretty princess.",
        "Your notification makes my heart skip a beat, gorgeous."
    ]
};

// Love notes content
const allLoveNotes = [
    "You are the most beautiful soul I've ever known, my pretty princess 💜",
    "Every day with you feels like magic, sweet Yara 🌟",
    "Your smile could light up the darkest night, my love ✨",
    "You make ordinary moments feel extraordinary, beautiful 💖",
    "Yara, you're the reason my world has color and meaning 🌈",
    "Your kindness touches every heart you encounter, precious one 💝",
    "In a world full of ordinary, you are my extraordinary, my pretty princess ⭐",
    "Your laughter is the most beautiful music I've ever heard, sweet angel 🎵",
    "Every moment without you feels like forever, my precious Yara 💫",
    "You have the power to turn my darkest days into pure sunshine, beautiful 🌞",
    "Your heart is made of pure gold and infinite love, my pretty princess 💛",
    "When I see you, I see everything that's right in this world, gorgeous 🌍",
    "You're not just my love, you're my peace, my home, my everything 🏠",
    "Your eyes hold entire galaxies of wonder and beauty, sweet Yara ✨",
    "Every breath I take is more meaningful because you exist, my love 💨",
    "You are the poetry my heart writes every single day, beautiful 📝",
    "In your presence, time stops and eternity begins, my pretty princess ⏰",
    "Your soul shines brighter than all the stars combined, sweet Yara 🌟",
    "You are my yesterday's dream and tomorrow's hope, precious one 🌈",
    "With you, even silence speaks the language of love, gorgeous 💕"
];

const youtubeVideos = [
    {
        id: "kk2R9OBAjm4",
        title: "Song 1",
        embedUrl: "https://www.youtube.com/embed/kk2R9OBAjm4"
    },
    {
        id: "pOCvF1STwWg",
        title: "Song 2",
        embedUrl: "https://www.youtube.com/embed/pOCvF1STwWg"
    }
];


// Function to get random love note
function getRandomLoveNote() {
    return allLoveNotes[Math.floor(Math.random() * allLoveNotes.length)];
}

// Function to get Nate's response
function getNateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('miss') || message.includes('missing')) {
        return nateResponses.miss[Math.floor(Math.random() * nateResponses.miss.length)];
    } else if (message.includes('love') || message.includes('lov')) {
        return nateResponses.love[Math.floor(Math.random() * nateResponses.love.length)];
    } else if (message.includes('sad') || message.includes('cry') || message.includes('hurt') || message.includes('pain')) {
        return nateResponses.sad[Math.floor(Math.random() * nateResponses.sad.length)];
    } else {
        return nateResponses.default[Math.floor(Math.random() * nateResponses.default.length)];
    }
}

// DOM utility functions
function createElement(tag, className = '', innerHTML = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

function clearRoot() {
    document.getElementById('root').innerHTML = '';
}

// Floating elements component
function createFloatingElements() {
    const container = createElement('div', 'fixed inset-0 pointer-events-none z-0');
    
    // Star field background
    const starField = createElement('div', 'star-field w-full h-full opacity-60');
    container.appendChild(starField);

    // Floating items
    const floatingItems = [
        { icon: '💖', delay: 0, x: '10%', y: '20%' },
        { icon: '⭐', delay: 1000, x: '80%', y: '40%' },
        { icon: '💖', delay: 2000, x: '20%', y: '70%' },
        { icon: '⭐', delay: 1500, x: '90%', y: '20%' },
        { icon: '✨', delay: 3000, x: '30%', y: '60%' },
        { icon: '💖', delay: 500, x: '70%', y: '80%' }
    ];

    floatingItems.forEach((item, index) => {
        const element = createElement('div', 'absolute text-pink-400 text-xl opacity-60 animate-bounce-gentle');
        element.style.left = item.x;
        element.style.top = item.y;
        element.style.fontSize = '24px';
        element.style.animationDelay = `${item.delay}ms`;
        element.textContent = item.icon;
        container.appendChild(element);
    });

    return container;
}

// Login screen
function renderLoginScreen() {
    clearRoot();
    const root = document.getElementById('root');
    
    const container = createElement('div', 'min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center');
    container.appendChild(createFloatingElements());
    
    const content = createElement('div', 'text-center z-10 relative max-w-2xl mx-auto px-6');
    
    content.innerHTML = `
        <h1 class="text-6xl md:text-8xl font-bold mb-8 gradient-text-purple-pink animate-glow-pulse">
            Yara's World 💜
        </h1>
        <p class="text-xl md:text-2xl mb-12 text-purple-200 animate-fade-in">
            A magical private digital space made just for you - filled with love, surprises, and comfort.
        </p>
        
        <form id="loginForm" class="space-y-6">
            <input
                type="password"
                id="passwordInput"
                placeholder="Enter the magic word..."
                class="w-full max-w-md mx-auto mb-2 px-6 py-4 text-lg bg-purple-900/30 border border-purple-400/50 rounded-full text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
            />
            
            <p class="text-sm text-purple-300 mb-6 text-center italic">
                💡 Hint: your name + our birth year
            </p>
            
            <div id="errorMessage" class="text-red-400 text-sm hidden"></div>
            
            <button
                type="submit"
                class="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-slow btn-enter-world"
            >
                Enter Your World ✨
            </button>
        </form>
    `;
    
    container.appendChild(content);
    root.appendChild(container);
    
    // Add login form handler
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value.toLowerCase().trim();
    const errorDiv = document.getElementById('errorMessage');
    
    if (password === 'yara2005') {
        isAuthenticated = true;
        currentPage = 'home';
        renderHomePage();
    } else {
        const errorMessages = ["Try again beautiful", "come on tesoro" , "You got this my love"];
        const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        errorDiv.textContent = randomError + ' 💜';
        errorDiv.classList.remove('hidden');
        document.getElementById('passwordInput').value = '';
        setTimeout(() => {
            errorDiv.classList.add('hidden');
        }, 3000);
    }
}

// Modal functions
let currentModal = null;

function showModal(title, content) {
    const modal = createElement('div', 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm');
    
    modal.innerHTML = `
        <div class="card-gradient rounded-3xl p-8 max-w-lg mx-4 border border-purple-400/50 animate-slide-up">
            <h2 class="text-3xl font-bold mb-6 text-center gradient-text-purple-pink">${title}</h2>
            <div class="mb-6">
                <p class="text-xl text-purple-200 text-center leading-relaxed">${content}</p>
            </div>
            <button 
                onclick="closeModal()"
                class="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-white font-semibold transition-all duration-300"
            >
                Close ✨
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentModal = modal;
}

function closeModal() {
    if (currentModal) {
        currentModal.remove();
        currentModal = null;
    }
}

// Feature functions
function showSingleLoveNote() {
    const note = getRandomLoveNote();
    showModal('💌 Love Note', note);
}

function showSurprise() {
    const surprises = [
        "You make my heart skip a beat every single day 💖",
        "Your voive is my favorite sound in the universe 🎵",
        "I fall in love with you more every morning ☀️",
        "You're the most beautiful thing that ever happened to me 🌹"
    ];
    const surprise = surprises[Math.floor(Math.random() * surprises.length)];
    showModal('🎁 Surprise!', surprise);
}

function showComfort() {
    const comfortMessages = [
        "It's okay to feel sad sometimes, my beautiful soul. You're human and your feelings are valid 💜",
        "Even on your darkest days, remember that you're loved beyond measure 🌟",
        "This pain is temporary, but your strength is permanent, gorgeous 💪",
        "I believe in you and your ability to overcome anything, my pretty princess ✨"
    ];
    const comfort = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
    showModal('🌧️ Comfort', comfort);
}

function showGiftBox() {
    showModal('📦 Gift Box', `
        🎀
        You are the greatest gift I've ever received in my life. Every day with you is like unwrapping a new present filled with love, laughter, and magic 💝
    `);
}

function showMoreLove() {
    const moreLove = [
        "You are my heart, my soul, my everything 💜",
        "In your eyes, I see my forever 👀✨",
        "Your love is my safe haven 🏠💖",
        "With you, every day feels like Valentine's Day 💕"
    ];
    const love = moreLove[Math.floor(Math.random() * moreLove.length)];
    showModal('💜 More Love', love);
}

function showMirror() {
    showModal('🪞 Mirror', 'You are absolutely beautiful, inside and out. Your soul shines brighter than any star, my pretty princess ✨');
}

// Music section
function createMusicSection() {
    const section = createElement('div', 'w-full max-w-6xl mx-auto px-6 py-16');
    
    section.innerHTML = `
        <div class="text-center mb-12">
            <h2 class="text-4xl md:text-6xl font-bold mb-6 gradient-text-purple-pink animate-glow-pulse">
                Just for you 💜
            </h2>
            <p class="text-lg md:text-xl text-purple-200 mb-8">
                You can check my insta highlighst, almost all the poems there are for you
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${youtubeVideos.map(video => `
                <div class="card-gradient rounded-3xl p-6 border border-purple-400/30 hover-glow transition-all duration-300">
                    <div class="music-video-container">
                        <iframe
                            src="${video.embedUrl}"
                            title="${video.title}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl mb-2">🎵</div>
                        <p class="text-purple-200 text-sm">Made with love for you</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return section;
}

// Chat widget
function createChatWidget() {
    const chatWidget = createElement('div', 'fixed bottom-4 right-4 z-[100]');
    
    chatWidget.innerHTML = `
        <div id="chatHint" class="chat-hint" style="display: ${chatOpen ? 'none' : 'block'}">
            💬 Nate is here if you want to talk...
        </div>
        
        <button 
            id="chatToggle"
            class="relative w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 chat-pulse cursor-pointer z-[101]"
            style="pointer-events: auto;"
        >
            <span class="text-xl" id="chatIcon">${chatOpen ? '×' : '💬'}</span>
        </button>
        
        <div id="chatWindow" class="absolute bottom-20 right-0 w-80 h-96 bg-black/90 backdrop-blur-sm border border-purple-400/50 rounded-2xl transition-all duration-300 ${chatOpen ? 'chat-visible' : 'chat-hidden'}">
            <div class="p-4 border-b border-purple-400/30">
                <h3 class="text-lg font-semibold gradient-text-purple-pink">💜 Nate</h3>
                <p class="text-sm text-purple-300">Your emotional support</p>
            </div>
            
            <div id="chatMessages" class="h-64 overflow-y-auto p-4 space-y-3">
                ${chatMessages.map(msg => `
                    <div class="flex ${msg.isUser ? 'justify-end' : 'justify-start'}">
                        <div class="max-w-xs px-4 py-2 rounded-2xl ${msg.isUser ? 'chat-message-user' : 'chat-message-bot'}">
                            ${msg.text}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="p-4 border-t border-purple-400/30">
                <form id="chatForm" class="flex space-x-2">
                    <input
                        type="text"
                        id="chatInput"
                        placeholder="Type your message..."
                        class="flex-1 px-3 py-2 chat-input rounded-full text-sm"
                    />
                    <button type="submit" class="px-4 py-2 btn-send rounded-full text-sm font-semibold">
                        Send
                    </button>
                </form>
            </div>
        </div>
    `;
    
    // Add event listeners
    const chatToggle = chatWidget.querySelector('#chatToggle');
    const chatForm = chatWidget.querySelector('#chatForm');
    
    chatToggle.addEventListener('click', toggleChat);
    chatForm.addEventListener('submit', sendMessage);
    
    return chatWidget;
}

function toggleChat() {
    chatOpen = !chatOpen;
    
    const chatHint = document.getElementById('chatHint');
    const chatIcon = document.getElementById('chatIcon');
    const chatWindow = document.getElementById('chatWindow');
    
    chatHint.style.display = chatOpen ? 'none' : 'block';
    chatIcon.textContent = chatOpen ? '×' : '💬';
    chatWindow.className = `absolute bottom-20 right-0 w-80 h-96 bg-black/90 backdrop-blur-sm border border-purple-400/50 rounded-2xl transition-all duration-300 ${chatOpen ? 'chat-visible' : 'chat-hidden'}`;
}

function sendMessage(e) {
    e.preventDefault();
    const chatInput = document.getElementById('chatInput');
    const messageText = chatInput.value.trim();
    
    if (!messageText) return;
    
    // Add user message
    const userMessage = { 
        id: Date.now(), 
        text: messageText, 
        isUser: true 
    };
    chatMessages.push(userMessage);
    
    // Get Nate's response after a delay
    setTimeout(() => {
        const response = getNateResponse(messageText);
        const botMessage = { 
            id: Date.now() + 1, 
            text: response, 
            isUser: false 
        };
        chatMessages.push(botMessage);
        updateChatMessages();
    }, 1000);
    
    chatInput.value = '';
    updateChatMessages();
}

function updateChatMessages() {
    const chatMessagesContainer = document.getElementById('chatMessages');
    chatMessagesContainer.innerHTML = chatMessages.map(msg => `
        <div class="flex ${msg.isUser ? 'justify-end' : 'justify-start'}">
            <div class="max-w-xs px-4 py-2 rounded-2xl ${msg.isUser ? 'chat-message-user' : 'chat-message-bot'}">
                ${msg.text}
            </div>
        </div>
    `).join('');
    
    // Scroll to bottom
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// Home page
function renderHomePage() {
    clearRoot();
    const root = document.getElementById('root');
    
    const container = createElement('div', 'min-h-screen bg-black text-white relative overflow-hidden');
    container.appendChild(createFloatingElements());
    
    const homeSection = createElement('section', 'min-h-screen flex items-center justify-center relative z-10');
    
    homeSection.innerHTML = `
        <div class="text-center max-w-4xl mx-auto px-6">
            <h1 class="text-6xl md:text-8xl font-bold mb-8 gradient-text-purple-pink animate-glow-pulse">
                Yara's World 💜
            </h1>
            <p class="text-xl md:text-2xl mb-12 text-purple-200 animate-fade-in">
                Welcome to your magical world, beautiful soul
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div onclick="showSingleLoveNote()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">💌</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">Love Notes</h3>
                    <p class="text-purple-200 text-center">A sweet message just for you</p>
                </div>

                <div onclick="showSurprise()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">🎁</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">Open a Surprise</h3>
                    <p class="text-purple-200 text-center">Random sweet moments</p>
                </div>

                <div onclick="showMirror()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">🪞</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">Mirror</h3>
                    <p class="text-purple-200 text-center">See your beautiful self</p>
                </div>

                <div onclick="showComfort()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">🌧️</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">If You're Sad</h3>
                    <p class="text-purple-200 text-center">Comfort when you need it</p>
                </div>

                <div onclick="showGiftBox()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">📦</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">Gift Box</h3>
                    <p class="text-purple-200 text-center">A special surprise awaits</p>
                </div>

                <div onclick="showMoreLove()" class="card-gradient rounded-3xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer hover-glow border border-purple-400/30">
                    <div class="text-6xl mb-4 text-center animate-bounce-gentle">💜</div>
                    <h3 class="text-2xl font-bold mb-3 text-center gradient-text-purple-light">More Love</h3>
                    <p class="text-purple-200 text-center">Endless magical moments</p>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(homeSection);
    
    // Music Section
    const musicSection = createElement('section', 'relative z-10 bg-black/50');
    musicSection.appendChild(createMusicSection());
    container.appendChild(musicSection);
    
    // Love message
    const loveMessage = createElement('div', 'fixed bottom-0 left-0 right-0 bg-red-600/20 border-t border-red-400/50 py-4 z-20');
    loveMessage.innerHTML = `
        <div class="text-center">
            <p class="text-red-400 font-bold text-lg animate-glow-pulse">
                <i class="fas fa-heart mr-2"></i>
                I'm a huge simp for you yara.
                <i class="fas fa-heart ml-2"></i>
            </p>
        </div>
    `;
    
    container.appendChild(loveMessage);
    container.appendChild(createChatWidget());
    root.appendChild(container);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderLoginScreen();
});
