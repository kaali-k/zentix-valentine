const nameData = {
    A: ["Algorithm", "AI", "Admin", "Atomic", "API", "Ambitious", "Alpha"],
    B: ["Binary", "Byte", "Beta", "Bug-Free", "Blockchain", "Bandwidth"],
    C: ["Cyber", "Cloud", "Crypto", "Compiler", "Cache", "Circuit", "Code"],
    D: ["Digital", "Data", "Debug", "Drone", "Dynamic", "Dev", "Docker"],
    E: ["Encryption", "Ethernet", "Error", "Electric", "Echo", "Engine"],
    F: ["Firewall", "Fiber", "Function", "Flash", "Frame", "Frontend"],
    G: ["Gigabyte", "Glitch", "GPU", "Gateway", "Global", "Git"],
    H: ["Hacker", "Hash", "HTML", "Host", "Hyper", "Hardware"],
    I: ["Input", "IP", "Interface", "Infinite", "IoT", "Iconic"],
    J: ["Java", "JSON", "Jitter", "Joystick", "Kernel"],
    K: ["Kernel", "Keyboard", "Key", "Kubernetes", "Kilobyte"],
    L: ["Logic", "Link", "Login", "Loop", "Linux", "Latency"],
    M: ["Macro", "Meta", "Mouse", "Memory", "Mainframe", "Modem"],
    N: ["Nano", "Neural", "Network", "Node", "Null", "Neon"],
    O: ["Offline", "Online", "Output", "OS", "Object", "Octal"],
    P: ["Pixel", "Protocol", "Python", "Ping", "Patch", "Processor"],
    Q: ["Quantum", "Query", "Queue", "Quad", "Quality"],
    R: ["Router", "RAM", "Root", "React", "Robot", "Retro"],
    S: ["Server", "Script", "System", "Syntax", "Stack", "Socket", "SQL"],
    T: ["Techy", "Token", "Terminal", "Tera", "Thread", "Type"],
    U: ["User", "URL", "Unix", "Ultra", "Upload", "USB"],
    V: ["Virtual", "Vector", "Variable", "VPN", "Version", "Video"],
    W: ["Web", "Wifi", "Widget", "Wire", "Windows", "Wave"],
    X: ["XML", "Xenon", "Xerox", "X-Ray"],
    Y: ["Yottabyte", "Yellow", "Yield", "Yummy"],
    Z: ["Zentix", "Zip", "Zone", "Zero", "Zoom"]
};

// Suffixes when looking for a Girl (Boy -> Girl)
const femaleSuffixes = {
    1: "Doni",
    2: "Sudu_Ammi",
    3: "Chuti_Manika",
    4: "Patiya",
    5: "Raththarane",
    6: "Kumarihami",
    7: "Sudu_Kella",
    8: "Hansi",
    9: "Main_Queen",
    10: "Dola",
    11: "Manika_Pro",
    12: "Angel"
};

// Suffixes when looking for a Boy (Girl -> Boy)
const maleSuffixes = {
    1: "Sudu_Mahattaya",
    2: "Koluwa",
    3: "Sudda",
    4: "Wadda_Max",
    5: "Manika",
    6: "Pana",
    7: "Raja",
    8: "Bose",
    9: "Ali_Patiyo",
    10: "Handsome_Dev",
    11: "Beast_Mode",
    12: "Romeo_Bug"
};

// Sri Lankan + Tech Context Coupons
const couponData = [
    { title: "One Free Ice Cream Outing", desc: "No matter how angry you are, this card demands an immediate ice cream treat! 🍦", icon: "🍦" },
    { title: "Skip the Argument", desc: "Use this card to instantly win or end a 'Waliya'. Peace restored! 🕊️", icon: "🛑" },
    { title: "Kottu Night Request", desc: "Too lazy to cook? This card summons a Cheese Kottu instantly. 🧀", icon: "🥘" },
    { title: "30 Mins Extra Gaming", desc: "Uninterrupted gaming time. No nagging allowed! System override active. 🎮", icon: "🕹️" },
    { title: "Zero Late Replies", desc: "One full day of instant replies. No 'Seen' zoning allowed! ⚡", icon: "💬" },
    { title: "Social Media Post", desc: "Mandatory dedicated post with a cute caption. Public display of affection detected. 📸", icon: "📱" },
    { title: "Movie Date Choice", desc: "You pick the movie, I buy the popcorn. No vetos allowed! 🍿", icon: "🎬" },
    { title: "Unlimited Compliments", desc: "1 Hour of non-stop compliments. 'Oya hari lassanai' loop activated. 💖", icon: "🥰" },
    { title: "No Questions Gift", desc: "Redeem for one small surprise gift. Mystery logic enabled. 🎁", icon: "🛍️" },
    { title: "Public Hand-Hold", desc: "Walking down Galle Face holding hands. Fear modules disabled. 🌊", icon: "🤝" }
];
