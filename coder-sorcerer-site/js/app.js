const IG_USERNAME = 'coder_sorcerer';
const IG_APP_ID = '936619743392459';

const App = {
  profilePic: '',

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

  blogs: [
    {
      id: 1, cat: 'tech', icon: 'fa-code-branch',
      title: 'Git Commands I Use Every Day at Work',
      preview: 'After years of using Git at Ericsson, these commands are burned into my muscle memory. From stash to rebase to bisect.',
      content: `<h2>The Basics That Never Get Old</h2>
<p>I use these literally every single day at Ericsson. If you're starting out, master these first.</p>
<pre>git status
git add -p          # stage hunks interactively, not blindly
git commit -m "msg"
git pull --rebase   # cleaner than merge</pre>

<h2>Stash — Your Best Friend</h2>
<p>Someone pings you to review their MR while you're mid-feature? Stash it.</p>
<pre>git stash
git checkout their-branch
# review, come back
git checkout my-branch
git stash pop</pre>

<h2>Interactive Rebase — Clean Your History</h2>
<p>Before pushing, I always clean up my commits. Nobody wants to see "fix typo" 5 times.</p>
<pre>git rebase -i HEAD~4</pre>
<p>Then squash, reword, reorder. Your reviewers will thank you.</p>

<h2>Cherry Pick — Lifesaver</h2>
<p>Committed to wrong branch? Happens to everyone.</p>
<pre>git cherry-pick abc123
git checkout wrong-branch
git reset HEAD~1</pre>

<h2>Bisect — Find the Bug</h2>
<p>Something broke but you don't know which commit? Binary search through history.</p>
<pre>git bisect start
git bisect bad          # current is broken
git bisect good v1.2.0  # this was fine
# git checks out middle commit, you test, mark good/bad</pre>

<h2>My .gitconfig Aliases</h2>
<pre>[alias]
  st = status
  co = checkout
  br = branch
  lg = log --oneline --graph --all
  unstage = reset HEAD --</pre>
<p>Small things that save hours over months.</p>`,
      date: 'Jun 8, 2025'
    },
    {
      id: 2, cat: 'tech', icon: 'fa-terminal',
      title: 'Linux Commands That Make Me Faster',
      preview: 'Terminal tricks I picked up over the years. From grep to awk to tmux — the stuff that actually matters.',
      content: `<h2>Search Like a Pro</h2>
<pre>grep -rn "TODO" src/          # recursive search with line numbers
grep -rn "function" --include="*.js" .  # only in JS files</pre>

<h2>Find Files Fast</h2>
<pre>find . -name "*.log" -mtime -7    # logs modified in last 7 days
find . -size +100M                  # files bigger than 100MB</pre>

<h2>Process Management</h2>
<pre>ps aux | grep node     # find node processes
kill -9 $(lsof -t -i:3000)  # kill whatever is on port 3000</pre>

<h2>Tmux — Multiple Sessions</h2>
<p>I always have tmux running. Split panes, detach, reattach. Never lose your work.</p>
<pre>tmux new -s work
Ctrl+b %     # split vertical
Ctrl+b "     # split horizontal
Ctrl+b d     # detach
tmux attach -t work</pre>

<h2>Quick Tricks</h2>
<pre>!!              # repeat last command
sudo !!         # repeat last command with sudo
ctrl+r          # reverse search history
cd -            # go to previous directory
watch -n 2 "df -h"  # monitor disk every 2 sec</pre>

<p>These aren't fancy. They're just fast. And fast compounds over time.</p>`,
      date: 'May 25, 2025'
    },
    {
      id: 3, cat: 'tech', icon: 'fa-bug',
      title: 'How I Debug — My Actual Process',
      preview: 'Not the textbook way. The real way I track down bugs at work when things go wrong in production.',
      content: `<h2>Step 1: Don't Panic</h2>
<p>Seriously. The worst debugging happens when you're stressed and start changing random things. Take a breath.</p>

<h2>Step 2: Reproduce It</h2>
<p>If you can't reproduce it, you can't fix it. Get the exact steps, the exact input, the exact environment.</p>

<h2>Step 3: Read the Error</h2>
<p>Sounds obvious but most people skip the actual error message and start guessing. Read it. Google it. Check Stack Overflow.</p>

<h2>Step 4: Isolate</h2>
<p>Comment out code. Add console.logs (yes, really). Use binary search — disable half the code, see if bug persists, narrow down.</p>
<pre>console.log('=== CHECKPOINT 1 ===', variable);
// I'm not ashamed. It works.</pre>

<h2>Step 5: Check What Changed</h2>
<pre>git log --oneline -20
git diff HEAD~5</pre>
<p>90% of bugs come from recent changes. Check the diff.</p>

<h2>Step 6: Rubber Duck It</h2>
<p>Explain the problem out loud. To a colleague, to yourself, to a rubber duck. The act of explaining often reveals the answer.</p>

<h2>Step 7: Fix and Verify</h2>
<p>Fix the bug. Then verify it's actually fixed. Then check you didn't break something else. Then write a test so it never comes back.</p>

<p>Debugging isn't glamorous. But it's where you actually learn how things work.</p>`,
      date: 'May 15, 2025'
    },
    {
      id: 4, cat: 'travel', icon: 'fa-mountain',
      title: 'Why Mountains Reset My Brain',
      preview: 'Every time I feel stuck — in code or in life — I head to the hills. Here\'s why it works every single time.',
      content: `<p>There's something about the mountains that resets everything.</p>
<p>As an SDE-2 at Ericsson, my weeks are filled with screens, standups, and sprint reviews. The mountains don't care about any of that. They just exist — massive, silent, humbling.</p>
<p>I woke up early that morning. The kind of early where the sky hasn't decided what color it wants to be. The air was sharp and cold — the kind that makes you feel alive in a way no amount of coffee can.</p>
<p>The trail was quiet. Just me, my thoughts, and footsteps on gravel. Every turn revealed something new — a valley draped in mist, a stream cutting through rocks, wildflowers growing where they had no business growing.</p>
<p>I've noticed a pattern: every time I come back from the mountains, the code problems that seemed impossible suddenly have obvious solutions. It's like my brain needed the space to rearrange itself.</p>
<p>Ichigo ichie — one time, one meeting. I could come back to the same spot a hundred times and never see this exact light, this exact cloud, this exact feeling.</p>
<p>If you're feeling stuck — take the trip. The code will wait. The mountains won't always look like this.</p>`,
      date: 'May 10, 2025'
    },
    {
      id: 5, cat: 'travel', icon: 'fa-sun',
      title: 'Chasing Sunsets — Not Every Day Is Perfect',
      preview: 'Not every day is perfect, but every sunset is. A short story about slowing down and looking up.',
      content: `<p>Not every day is perfect, but every sunset is.</p>
<p>I've been chasing sunsets for as long as I can remember. There's a moment right before the sun dips below the horizon where everything turns golden. The sky looks like someone spilled watercolors — orange bleeding into pink, pink fading into purple.</p>
<p>This particular evening was one of those rare ones where everything aligned. The clouds were just right, the light was warm, and I had nowhere to be.</p>
<p>I stood there for maybe twenty minutes, watching the colors shift. Each second was different from the last. That's the thing about sunsets — they're the ultimate reminder that nothing stays the same, and that's okay.</p>
<p>I filmed a short reel because I wanted to remember this. But honestly, the camera never captures the warmth on your skin or the way the world goes quiet for just a moment.</p>
<p>Keep moving. Keep looking up. The best sunsets are the ones you almost missed.</p>`,
      date: 'Apr 28, 2025'
    },
    {
      id: 6, cat: 'life', icon: 'fa-moon',
      title: 'Late Night Walks and Quiet Energy',
      preview: 'The night hums quietly when you stop to listen. On finding calm in the chaos of city life.',
      content: `<p>The night hums quietly when you stop to listen.</p>
<p>There's a different energy to cities after dark. The rush hour chaos fades, the streets empty out, and what's left is this gentle hum — distant traffic, flickering lights, occasional laughter from a late-night chai stall.</p>
<p>I'd been coding all day, stuck on a problem that refused to be solved. So I did what I always do when my brain needs a reset — I walked.</p>
<p>The city lights reflected off wet roads. It had rained earlier, creating this mirror effect that made everything look cinematic. Sometimes the most beautiful frames aren't in the mountains — they're right outside your apartment.</p>
<p>There's a calm energy to these hours. The world feels like it's on pause, and you're one of the few people who noticed.</p>
<p>I think we underestimate the beauty of ordinary nights. Not every moment needs to be an adventure. Sometimes a quiet walk under city lights is exactly the story worth telling.</p>`,
      date: 'Apr 20, 2025'
    },
    {
      id: 7, cat: 'life', icon: 'fa-yin-yang',
      title: 'Ichigo Ichie — The Philosophy I Live By',
      preview: '一期一会 — One time, one meeting. How a Japanese concept changed the way I see every single day.',
      content: `<p>一期一会 — Ichigo ichie.</p>
<p>It roughly translates to "one time, one meeting." The idea that every encounter, every moment, is a once-in-a-lifetime experience. Even if you meet the same person tomorrow, it won't be the same meeting.</p>
<p>I first came across this concept a couple of years ago and it hit different. As a developer, I'm trained to think in loops — repeatable processes, automated tests, CI/CD pipelines. Everything is designed to be reproducible.</p>
<p>But life isn't code. You can't git checkout yesterday. You can't rerun last Tuesday's sunset. That conversation with a stranger at a mountain chai stall? That exact version of it is gone forever.</p>
<p>Since adopting this mindset, I've noticed I'm more present. I put my phone down more often. I actually taste my food instead of eating while scrolling. I look at people when they talk instead of thinking about my next reply.</p>
<p>That's why I travel. That's why I capture reels. Not for likes — but because each moment deserves to be acknowledged before it passes.</p>
<p>一期一会. This moment, right now, reading this — it's the only time it'll happen exactly like this.</p>`,
      date: 'Apr 10, 2025'
    },
    {
      id: 8, cat: 'tech', icon: 'fa-laptop-code',
      title: 'My Dev Setup in 2025',
      preview: 'The tools, extensions, and terminal setup I use daily as an SDE-2. Nothing fancy, just what works.',
      content: `<h2>Editor</h2>
<p>VS Code. I've tried Neovim, went back. VS Code with vim keybindings gives me the best of both worlds.</p>

<h2>Must-Have Extensions</h2>
<ul>
<li>GitLens — see who wrote what and when</li>
<li>Error Lens — inline error highlighting</li>
<li>Thunder Client — API testing without leaving the editor</li>
<li>Todo Tree — find all TODOs across the project</li>
<li>Prettier + ESLint — auto-format on save</li>
</ul>

<h2>Terminal</h2>
<p>Zsh with Oh My Zsh. Plugins I actually use:</p>
<pre>plugins=(git z docker kubectl aliases)</pre>
<p>The 'z' plugin alone saves me hours. Type 'z project' and it jumps to the most visited matching directory.</p>

<h2>Git GUI</h2>
<p>Lazygit in terminal. Faster than any GUI app. Stage hunks, interactive rebase, all with keyboard shortcuts.</p>

<h2>Browser</h2>
<p>Firefox Developer Edition for work. Chrome for testing. React DevTools and Redux DevTools installed on both.</p>

<h2>Notes</h2>
<p>Obsidian for everything. Meeting notes, debugging logs, learning notes. All in markdown, all searchable, all local.</p>

<p>The best setup is the one you stop thinking about. These tools just work and get out of my way.</p>`,
      date: 'Mar 30, 2025'
    },
    {
      id: 9, cat: 'travel', icon: 'fa-road',
      title: 'Unplanned Trips Are the Best Trips',
      preview: 'A long weekend, a full tank, zero itinerary. How the road decided the destination.',
      content: `<p>The best trips are the ones where the road decides the destination.</p>
<p>I had a long weekend, a full tank, and zero itinerary. That's it. No hotel bookings, no Google Maps route planned, no "top 10 places to visit" list.</p>
<p>I drove through winding roads where every turn felt like unwrapping a gift. Valleys appeared out of nowhere, waterfalls showed up uninvited, and the sky kept changing its mood like an indecisive designer.</p>
<p>I stopped at a small village where an old man was selling fresh fruit. We couldn't speak the same language, but he smiled, I smiled, and that was enough. Ichigo ichie.</p>
<p>Found a random homestay run by a family who cooked the best dal chawal I've ever had. No Zomato rating, no Instagram page. Just good food and genuine warmth.</p>
<p>The reel I posted captures maybe 30 seconds of a 3-day trip. But those 30 seconds hold the essence — the wind, the road, the freedom.</p>
<p>If you're waiting for the perfect time to travel, stop waiting. The perfect time is the next long weekend.</p>`,
      date: 'Mar 15, 2025'
    },
    {
      id: 10, cat: 'life', icon: 'fa-brain',
      title: 'Burnout Is Real — How I Deal With It',
      preview: 'I burned out twice in my career. Here\'s what I learned and what actually helps me recover.',
      content: `<p>I burned out twice. Both times I didn't see it coming until I was already deep in it.</p>
<p>The first time was early in my career. Working late every night, saying yes to everything, thinking that's what "growth" looks like. One day I just couldn't open my laptop. Not wouldn't — couldn't.</p>
<p>The second time was subtler. I was performing fine at work but felt nothing. No excitement about new features, no satisfaction from shipping. Just going through the motions.</p>

<h2>What Actually Helps</h2>
<p><strong>Travel.</strong> Not a vacation where you're still checking Slack. A real disconnect. Mountains, no signal, no laptop. Even 3 days makes a difference.</p>
<p><strong>Saying no.</strong> This was the hardest one. But every yes to something unimportant is a no to something that matters — including your own rest.</p>
<p><strong>Moving your body.</strong> I don't mean gym motivation culture. Just walk. A 30-minute walk after work changes everything.</p>
<p><strong>Boring hobbies.</strong> I started cooking. Not Instagram-worthy cooking. Just simple dal and rice. The act of making something with your hands that isn't code is therapeutic.</p>
<p><strong>Talking about it.</strong> Not posting about it. Actually talking to someone. A friend, a mentor, anyone who'll listen without trying to fix you.</p>
<p>Burnout isn't a badge of honor. It's a signal that something needs to change. Listen to it.</p>`,
      date: 'Mar 1, 2025'
    }
  ],

  async init() {
    this.setupTheme();
    this.setupNav();
    this.setupParticles();
    this.setupTypewriter();
    this.setupBackToTop();
    await this.fetchProfilePic();
    this.renderReels();
    this.renderBlogs();
    this.setupFilters();
  },

  async fetchProfilePic() {
    try {
      const res = await fetch(
        `https://www.instagram.com/api/v1/users/web_profile_info/?username=${IG_USERNAME}`,
        { headers: { 'X-IG-App-ID': IG_APP_ID } }
      );
      const data = await res.json();
      if (!data.data) return;
      const pic = data.data.user.profile_pic_url_hd;
      if (pic) document.querySelector('.hero-avatar img').src = pic;
    } catch (e) {
      // fallback avatar already in HTML
    }
  },

  renderReels() {
    document.getElementById('reelsScroll').innerHTML = this.reels.map(r => `
      <div class="reel-embed-card">
        <iframe src="https://www.instagram.com/p/${r.code}/embed" loading="lazy" allowtransparency="true" allowfullscreen="true" scrolling="no"></iframe>
        <div class="reel-card-footer">
          <span>${r.date}</span>
          <a href="https://www.instagram.com/p/${r.code}/" target="_blank"><i class="fab fa-instagram"></i> Open</a>
        </div>
      </div>
    `).join('');
  },

  renderBlogs(filter) {
    filter = filter || 'all';
    const filtered = filter === 'all' ? this.blogs : this.blogs.filter(b => b.cat === filter);
    document.getElementById('blogGrid').innerHTML = filtered.map((b, i) => `
      <div class="blog-card" style="animation-delay:${i * 0.06}s" onclick="App.openBlog(${b.id})">
        <div class="blog-icon-cover ${b.cat}"><i class="fas ${b.icon}"></i></div>
        <div class="blog-body">
          <div style="display:flex;justify-content:space-between;align-items:start;gap:8px;margin-bottom:6px">
            <h3 style="margin:0">${b.title}</h3>
            <span class="blog-cat ${b.cat}">${b.cat}</span>
          </div>
          <p>${b.preview}</p>
          <div class="blog-meta">
            <span><i class="far fa-calendar"></i> ${b.date}</span>
            <span class="read-more">Read <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      </div>
    `).join('');
  },

  openBlog(id) {
    const b = this.blogs.find(x => x.id === id);
    if (!b) return;
    document.getElementById('blogModalBody').innerHTML = `
      <h1>${b.title}</h1>
      <div class="blog-modal-meta">
        <span><i class="far fa-calendar"></i> ${b.date}</span>
        <span class="blog-cat ${b.cat}" style="display:inline-block">${b.cat}</span>
      </div>
      <div class="blog-modal-body">${b.content}</div>
    `;
    const modal = document.getElementById('blogModal');
    modal.classList.add('active');
    document.getElementById('closeBlogModal').onclick = () => modal.classList.remove('active');
    modal.onclick = e => { if (e.target === modal) modal.classList.remove('active'); };
  },

  setupFilters() {
    document.querySelectorAll('#blogFilters .filter-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('#blogFilters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderBlogs(btn.dataset.filter);
      };
    });
  },

  setupTheme() {
    const saved = localStorage.getItem('cs_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('themeToggle');
    btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.onclick = () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cs_theme', next);
      btn.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    };
  },

  setupNav() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.onclick = () => navLinks.classList.toggle('open');
    navLinks.querySelectorAll('a').forEach(a => a.onclick = () => navLinks.classList.remove('open'));
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
      for (const id of ['about', 'resume', 'blog', 'reels', 'home']) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          navLinks.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
          break;
        }
      }
    });
  },

  setupParticles() {
    const c = document.getElementById('particles');
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s;animation-duration:${4+Math.random()*4}s`;
      c.appendChild(p);
    }
  },

  setupTypewriter() {
    const words = ['Traveler', 'Explorer', 'Code Wizard', 'Mountain Lover', 'Sunset Chaser', '一期一会'];
    const el = document.getElementById('typewriter');
    let wi = 0, ci = 0, del = false;
    const tick = () => {
      el.textContent = words[wi].substring(0, ci);
      if (!del) { ci++; if (ci > words[wi].length) { del = true; setTimeout(tick, 1500); return; } }
      else { ci--; if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
      setTimeout(tick, del ? 50 : 100);
    };
    tick();
  },

  setupBackToTop() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
