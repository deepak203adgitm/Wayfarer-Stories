// ╔══════════════════════════════════════════════════════════════╗
// ║  config.js — EDIT THIS FILE TO UPDATE YOUR WEBSITE          ║
// ║  This is the ONLY file you need to touch.                   ║
// ╚══════════════════════════════════════════════════════════════╝

var CONFIG = {

  // ─── PROFILE ───────────────────────────────────────────────
  // Change these when you switch jobs or update your info
  profile: {
    name: 'Deepak Sharma',
    role: 'Software Engineer',
    company: 'Ericsson',
    handle: '@coder_sorcerer · @quiet.energy',
    bio: '一期一会 — Ichigo ichie — One time, one meeting',
    aboutLine1: 'Software Engineer at Ericsson, building automation platforms and real-time dashboards.',
    aboutLine2: 'Outside work, I chase mountains, sunsets, and quiet moments. I believe in Ichigo ichie (一期一会) — treasuring each unrepeatable moment.',
    resumePDF: 'https://drive.google.com/uc?export=download&id=1PKiw8WfX4Ym3PN2cYlYJnhGnMMQe52_4',
    resumeSummary: 'Frontend-focused Software Engineer with 3+ years of experience building scalable, high-performance web applications using React and modern JavaScript. Experienced in designing modular UI architectures, developing real-time dashboards, and integrating REST APIs in distributed systems.'
  },

  // ─── SOCIAL LINKS ──────────────────────────────────────────
  // Add/remove/edit your social links here
  socials: {
    linkedin: 'https://www.linkedin.com/in/deepak-sharma-69b376172/',
    instagram: 'https://instagram.com/coder_sorcerer',
    facebook: 'https://www.facebook.com/profile.php?id=100094766882458',
    github: 'https://github.com/coder-sorcerer',
    youtube: 'https://youtube.com/playlist?list=PL2b201679MJfyEoLYXvSxzpf3Ocp9z57k'
  },

  // ─── INSTAGRAM ─────────────────────────────────────────────
  instagram: {
    username: 'coder_sorcerer',
    appId: '936619743392459'
  },

  // ─── INSTAGRAM REELS ───────────────────────────────────────
  // Add new reels: copy the shortcode from the URL
  // e.g. instagram.com/p/DXEtOjBD1PM/ → shortcode is DXEtOjBD1PM
  reels: [
    { code: 'DXEtOjBD1PM', date: 'Jun 11, 2026' },
    { code: 'DXEPVewDxNZ', date: 'Jun 11, 2026' },
    { code: 'DWjdCV6D55J', date: 'May 29, 2026' },
    { code: 'DWTkTeOD_HO', date: 'May 23, 2026' },
    { code: 'DWMRx7AD7dv', date: 'May 20, 2026' },
    { code: 'DWItCkxD8Ww', date: 'May 18, 2026' },
    { code: 'DWGoMNhDx0a', date: 'May 18, 2026' },
    { code: 'DV-7OvjjEGl', date: 'May 15, 2026' },
    { code: 'DV8TFXTDwEL', date: 'May 14, 2026' },
    { code: 'DB82uDiyWhC', date: 'Nov 4, 2024' }
  ],

  // ─── YOUTUBE VIDEOS ────────────────────────────────────────
  // Add new videos: copy the video ID from the URL
  // e.g. youtube.com/shorts/2LsgUpt9KfU → ID is 2LsgUpt9KfU
  ytVideos: [
    '2LsgUpt9KfU', 'YWhVcCUMd7A', '8JZDy8St9ws', '5K-xSTbbJCQ',
    'kE5SJuE-bcY', 'TtfiTyjiieo', 'vOWxq1q2ZDg', 'F57gAcQBKW8', 'ZWWpx5UVC2g'
  ],

  // ─── EXPERIENCE ────────────────────────────────────────────
  // Update when you change jobs. Add new entries at the top.
  experience: [
    {
      title: 'Software Engineer',
      date: 'Aug 2022 — Present',
      company: 'Ericsson',
      location: 'Gurugram, Haryana',
      bullets: [
        'Architected and led development of a centralized workflow automation platform for lab validation and performance testing using Flask',
        'Designed a scalable workflow engine supporting sequential, parallel, and distributed execution with retry and failure recovery',
        'Built a recurring scheduler for nightly and release-based performance test runs, reducing manual effort by ~60%',
        'Developed RESTful APIs for workflow orchestration, execution tracking, and analytics reporting',
        'Owned full-stack dashboard development (Flask + React) enabling real-time execution monitoring and drill-down analytics',
        'Architected and deployed a load-balanced, multi-VM production environment using Nginx and Gunicorn',
        'Implemented watchdog monitoring to auto-detect failures and restart backend services',
        'Integrated GitLab, Slack, Confluence, and JIRA for CI triggers, notifications, and automated result publishing',
        'Led production issue debugging and performance optimization, reducing downtime significantly'
      ]
    }
    // Add more jobs here:
    // { title: 'Intern', date: 'Jan 2022 — Jul 2022', company: 'XYZ', location: 'Delhi', bullets: ['...'] }
  ],

  // ─── SKILLS ────────────────────────────────────────────────
  skills: [
    { label: 'Languages', items: ['Python', 'JavaScript', 'C++14'] },
    { label: 'Backend', items: ['Flask', 'REST APIs', 'Gunicorn'] },
    { label: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Bootstrap'] },
    { label: 'Database', items: ['MongoDB', 'SQL'] },
    { label: 'DevOps & Tools', items: ['GitLab', 'GitHub', 'Nginx', 'Linux', 'Slack API', 'Confluence API'] },
    { label: 'Core', items: ['DSA', 'OOP'] }
  ],

  // ─── EDUCATION ─────────────────────────────────────────────
  education: [
    { title: 'B.Tech — Information Technology', date: 'Aug 2022', school: 'Guru Gobind Singh Indraprastha University, Delhi', icon: 'fa-university' },
    { title: 'XII — PCM', date: 'Jul 2017', school: 'Hindu Vidya Peeth, Sonipat, Haryana', icon: 'fa-school' }
  ],

  // ─── CERTIFICATIONS ────────────────────────────────────────
  certifications: [
    'Certificate of Competency — Data Structures & Algorithms',
    'Certificate of Competency — SQL, Problem Solving, Python'
  ],

  // ─── HOBBIES ───────────────────────────────────────────────
  hobbies: [
    { icon: 'fa-code', label: 'Competitive Coding' },
    { icon: 'fa-puzzle-piece', label: 'Sudoku' },
    { icon: 'fa-film', label: 'Movies' },
    { icon: 'fa-music', label: 'Music' },
    { icon: 'fa-utensils', label: 'Cooking' },
    { icon: 'fa-mountain', label: 'Travel' },
    { icon: 'fa-camera', label: 'Photography' },
    { icon: 'fa-sun', label: 'Sunsets' }
  ],

  // ─── TYPEWRITER WORDS ──────────────────────────────────────
  typewriterWords: ['Traveler', 'Explorer', 'Code Wizard', 'Mountain Lover', 'Sunset Chaser'],

  // ─── TECH BLOGS ────────────────────────────────────────────
  // Add new blog: copy the format below, increment the id
  techBlogs: [
    { id: 1, icon: 'fa-code-branch', title: 'Git Commands I Use Every Day at Work', preview: 'After years of using Git, these commands are burned into my muscle memory.', date: 'Jun 8, 2025', content: '<h2>The Basics</h2><pre>git status\ngit add -p\ngit commit -m "msg"\ngit pull --rebase</pre><h2>Stash</h2><pre>git stash\ngit stash pop</pre><h2>Interactive Rebase</h2><pre>git rebase -i HEAD~4</pre><h2>Cherry Pick</h2><pre>git cherry-pick abc123</pre><h2>Bisect</h2><pre>git bisect start\ngit bisect bad\ngit bisect good v1.2.0</pre><h2>Aliases</h2><pre>[alias]\n  st = status\n  co = checkout\n  lg = log --oneline --graph --all</pre>' },
    { id: 2, icon: 'fa-terminal', title: 'Linux Commands That Make Me Faster', preview: 'Terminal tricks from grep to tmux — the stuff that actually matters.', date: 'May 25, 2025', content: '<h2>Search</h2><pre>grep -rn "TODO" src/\ngrep -rn "function" --include="*.js" .</pre><h2>Find Files</h2><pre>find . -name "*.log" -mtime -7\nfind . -size +100M</pre><h2>Tmux</h2><pre>tmux new -s work\nCtrl+b %\nCtrl+b d</pre><h2>Quick Tricks</h2><pre>!!\nsudo !!\nctrl+r\ncd -</pre>' },
    { id: 3, icon: 'fa-bug', title: 'How I Debug — My Actual Process', preview: 'The real way I track down bugs when things go wrong in production.', date: 'May 15, 2025', content: '<h2>Don\'t Panic</h2><p>Take a breath.</p><h2>Reproduce It</h2><p>If you can\'t reproduce it, you can\'t fix it.</p><h2>Read the Error</h2><p>Most people skip it. Read it. Google it.</p><h2>Isolate</h2><pre>console.log("=== CHECKPOINT ===", variable);</pre><h2>Check What Changed</h2><pre>git log --oneline -20\ngit diff HEAD~5</pre><h2>Rubber Duck It</h2><p>Explain the problem out loud.</p>' },
    { id: 8, icon: 'fa-laptop-code', title: 'My Dev Setup in 2025', preview: 'Tools, extensions, terminal setup I use daily.', date: 'Mar 30, 2025', content: '<h2>Editor</h2><p>VS Code + vim keybindings.</p><h2>Extensions</h2><ul><li>GitLens</li><li>Error Lens</li><li>Thunder Client</li><li>Prettier + ESLint</li></ul><h2>Terminal</h2><pre>plugins=(git z docker kubectl)</pre><h2>Notes</h2><p>Obsidian. Markdown, searchable, local.</p>' }
  ],

  // ─── TRAVEL & LIFE BLOGS ───────────────────────────────────
  socialBlogs: [
    { id: 4, cat: 'travel', icon: 'fa-mountain', title: 'Why Mountains Reset My Brain', preview: 'Every time I feel stuck I head to the hills.', date: 'May 10, 2025', content: '<p>There\'s something about the mountains that resets everything.</p><p>My weeks are filled with screens and standups. The mountains don\'t care.</p><p>Every time I come back, impossible problems suddenly have obvious solutions.</p><p>Ichigo ichie — one time, one meeting.</p>' },
    { id: 5, cat: 'travel', icon: 'fa-sun', title: 'Chasing Sunsets — Not Every Day Is Perfect', preview: 'Not every day is perfect, but every sunset is.', date: 'Apr 28, 2025', content: '<p>Not every day is perfect, but every sunset is.</p><p>No notifications. No Slack. No JIRA. Just the sky doing its thing.</p><p>Keep moving. Keep looking up.</p>' },
    { id: 9, cat: 'travel', icon: 'fa-road', title: 'Unplanned Trips Are the Best Trips', preview: 'A long weekend, a full tank, zero itinerary.', date: 'Mar 15, 2025', content: '<p>The best trips are the ones where the road decides the destination.</p><p>A small village, an old man selling fruit. He smiled, I smiled. Ichigo ichie.</p><p>If you\'re waiting for the perfect time to travel, stop waiting.</p>' },
    { id: 6, cat: 'life', icon: 'fa-moon', title: 'Late Night Walks and Quiet Energy', preview: 'The night hums quietly when you stop to listen.', date: 'Apr 20, 2025', content: '<p>The night hums quietly when you stop to listen.</p><p>City lights reflected off wet roads. Cinematic.</p><p>Sometimes a quiet walk is the story worth telling.</p>' },
    { id: 7, cat: 'life', icon: 'fa-yin-yang', title: 'Ichigo Ichie — The Philosophy I Live By', preview: '一期一会 — One time, one meeting.', date: 'Apr 10, 2025', content: '<p>一期一会 — Ichigo ichie. "One time, one meeting."</p><p>Life isn\'t code. You can\'t git checkout yesterday.</p><p>一期一会. This moment — the only time it\'ll happen exactly like this.</p>' },
    { id: 10, cat: 'life', icon: 'fa-brain', title: 'Burnout Is Real — How I Deal With It', preview: 'I burned out twice. Here\'s what actually helps.', date: 'Mar 1, 2025', content: '<p>I burned out twice.</p><h2>What Helps</h2><p><strong>Travel.</strong> Real disconnect.</p><p><strong>Saying no.</strong></p><p><strong>Walking.</strong> 30 minutes after work.</p><p><strong>Boring hobbies.</strong> Cooking simple dal and rice.</p><p>Burnout isn\'t a badge of honor. Listen to it.</p>' }
  ]
};
