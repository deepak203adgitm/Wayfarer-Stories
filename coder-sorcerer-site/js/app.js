var IG_USERNAME = 'coder_sorcerer';
var IG_APP_ID = '936619743392459';

var App = {
  currentSection: 'professional',
  socialFilter: 'all',
  techSearch: '',
  socialSearch: '',

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

  techBlogs: [
    { id: 1, cat: 'tech', icon: 'fa-code-branch', title: 'Git Commands I Use Every Day at Work', preview: 'After years of using Git, these commands are burned into my muscle memory. From stash to rebase to bisect.', date: 'Jun 8, 2025', content: '<h2>The Basics That Never Get Old</h2><p>I use these literally every single day. Master these first.</p><pre>git status\ngit add -p          # stage hunks interactively\ngit commit -m "msg"\ngit pull --rebase   # cleaner than merge</pre><h2>Stash — Your Best Friend</h2><pre>git stash\ngit checkout their-branch\ngit checkout my-branch\ngit stash pop</pre><h2>Interactive Rebase</h2><pre>git rebase -i HEAD~4</pre><p>Squash, reword, reorder. Your reviewers will thank you.</p><h2>Cherry Pick</h2><pre>git cherry-pick abc123</pre><h2>Bisect — Find the Bug</h2><pre>git bisect start\ngit bisect bad\ngit bisect good v1.2.0</pre><h2>My .gitconfig Aliases</h2><pre>[alias]\n  st = status\n  co = checkout\n  lg = log --oneline --graph --all</pre>' },
    { id: 2, cat: 'tech', icon: 'fa-terminal', title: 'Linux Commands That Make Me Faster', preview: 'Terminal tricks from grep to tmux — the stuff that actually matters.', date: 'May 25, 2025', content: '<h2>Search Like a Pro</h2><pre>grep -rn "TODO" src/\ngrep -rn "function" --include="*.js" .</pre><h2>Find Files</h2><pre>find . -name "*.log" -mtime -7\nfind . -size +100M</pre><h2>Process Management</h2><pre>ps aux | grep node\nkill -9 $(lsof -t -i:3000)</pre><h2>Tmux</h2><pre>tmux new -s work\nCtrl+b %   # split vertical\nCtrl+b d   # detach</pre><h2>Quick Tricks</h2><pre>!!          # repeat last command\nsudo !!     # repeat with sudo\nctrl+r      # reverse search\ncd -        # previous directory</pre>' },
    { id: 3, cat: 'tech', icon: 'fa-bug', title: 'How I Debug — My Actual Process', preview: 'The real way I track down bugs when things go wrong in production.', date: 'May 15, 2025', content: '<h2>Step 1: Don\'t Panic</h2><p>The worst debugging happens when you\'re stressed.</p><h2>Step 2: Reproduce It</h2><p>If you can\'t reproduce it, you can\'t fix it.</p><h2>Step 3: Read the Error</h2><p>Most people skip the error message. Read it. Google it.</p><h2>Step 4: Isolate</h2><pre>console.log("=== CHECKPOINT ===", variable);</pre><h2>Step 5: Check What Changed</h2><pre>git log --oneline -20\ngit diff HEAD~5</pre><h2>Step 6: Rubber Duck It</h2><p>Explain the problem out loud.</p><h2>Step 7: Fix and Verify</h2><p>Fix it. Verify. Write a test.</p>' },
    { id: 8, cat: 'tech', icon: 'fa-laptop-code', title: 'My Dev Setup in 2025', preview: 'Tools, extensions, terminal setup I use daily. Nothing fancy, just what works.', date: 'Mar 30, 2025', content: '<h2>Editor</h2><p>VS Code with vim keybindings.</p><h2>Extensions</h2><ul><li>GitLens</li><li>Error Lens</li><li>Thunder Client</li><li>Prettier + ESLint</li></ul><h2>Terminal</h2><p>Zsh + Oh My Zsh</p><pre>plugins=(git z docker kubectl)</pre><h2>Git GUI</h2><p>Lazygit in terminal.</p><h2>Notes</h2><p>Obsidian. Markdown, searchable, local.</p>' }
  ],

  socialBlogs: [
    { id: 4, cat: 'travel', icon: 'fa-mountain', title: 'Why Mountains Reset My Brain', preview: 'Every time I feel stuck I head to the hills. Here\'s why it works.', date: 'May 10, 2025', content: '<p>There\'s something about the mountains that resets everything.</p><p>My weeks are filled with screens and standups. The mountains don\'t care. They just exist — massive, silent, humbling.</p><p>The air was sharp and cold — the kind that makes you feel alive.</p><p>Every time I come back, the code problems that seemed impossible suddenly have obvious solutions.</p><p>Ichigo ichie — one time, one meeting.</p><p>If you\'re feeling stuck — take the trip. The code will wait.</p>' },
    { id: 5, cat: 'travel', icon: 'fa-sun', title: 'Chasing Sunsets — Not Every Day Is Perfect', preview: 'Not every day is perfect, but every sunset is.', date: 'Apr 28, 2025', content: '<p>Not every day is perfect, but every sunset is.</p><p>There\'s a moment right before the sun dips where everything turns golden.</p><p>No notifications. No Slack. No JIRA. Just the sky doing its thing.</p><p>I stood there for twenty minutes watching colors shift. That\'s the thing about sunsets — nothing stays the same, and that\'s okay.</p><p>Keep moving. Keep looking up.</p>' },
    { id: 9, cat: 'travel', icon: 'fa-road', title: 'Unplanned Trips Are the Best Trips', preview: 'A long weekend, a full tank, zero itinerary.', date: 'Mar 15, 2025', content: '<p>The best trips are the ones where the road decides the destination.</p><p>Long weekend, full tank, zero itinerary. No hotel bookings, no Google Maps.</p><p>Winding roads where every turn felt like unwrapping a gift.</p><p>A small village, an old man selling fruit. We couldn\'t speak the same language, but he smiled, I smiled. Ichigo ichie.</p><p>If you\'re waiting for the perfect time to travel, stop waiting.</p>' },
    { id: 6, cat: 'life', icon: 'fa-moon', title: 'Late Night Walks and Quiet Energy', preview: 'The night hums quietly when you stop to listen.', date: 'Apr 20, 2025', content: '<p>The night hums quietly when you stop to listen.</p><p>Rush hour fades. What\'s left is a gentle hum — distant traffic, flickering lights, laughter from a chai stall.</p><p>I\'d been coding all day, stuck. So I walked.</p><p>City lights reflected off wet roads. Cinematic.</p><p>Not every moment needs to be an adventure. Sometimes a quiet walk is the story worth telling.</p>' },
    { id: 7, cat: 'life', icon: 'fa-yin-yang', title: 'Ichigo Ichie — The Philosophy I Live By', preview: '一期一会 — One time, one meeting.', date: 'Apr 10, 2025', content: '<p>一期一会 — Ichigo ichie. "One time, one meeting."</p><p>Every encounter is a once-in-a-lifetime experience.</p><p>Life isn\'t code. You can\'t git checkout yesterday.</p><p>Since adopting this mindset, I\'m more present. I put my phone down more often.</p><p>That\'s why I travel. Not for likes — because each moment deserves to be acknowledged.</p><p>一期一会. This moment — the only time it\'ll happen exactly like this.</p>' },
    { id: 10, cat: 'life', icon: 'fa-brain', title: 'Burnout Is Real — How I Deal With It', preview: 'I burned out twice. Here\'s what actually helps.', date: 'Mar 1, 2025', content: '<p>I burned out twice. Both times I didn\'t see it coming.</p><p>First time: working late every night. One day I couldn\'t open my laptop.</p><p>Second time: performing fine but feeling nothing.</p><h2>What Helps</h2><p><strong>Travel.</strong> Real disconnect. Mountains, no signal.</p><p><strong>Saying no.</strong></p><p><strong>Walking.</strong> 30 minutes after work changes everything.</p><p><strong>Boring hobbies.</strong> Cooking simple dal and rice.</p><p><strong>Talking about it.</strong> Actually talking, not posting.</p><p>Burnout isn\'t a badge of honor. Listen to it.</p>' }
  ],

  init: function() {
    this.setupTheme();
    this.setupNav();
    this.setupParticles();
    this.setupTypewriter();
    this.setupBackToTop();
    this.setupScrollReveal();
    this.setupEasterEgg();
    this.setupPWA();
    this.fetchProfilePic();
    this.renderReels();
    this.renderTechBlogs();
    this.renderSocialBlogs();
    this.setupSocialFilters();
  },

  // === SECTION SWITCH ===
  switchSection: function(section) {
    this.currentSection = section;
    document.getElementById('professionalSection').style.display = section === 'professional' ? '' : 'none';
    document.getElementById('socialSection').style.display = section === 'social' ? '' : 'none';
    document.querySelectorAll('.switch-btn').forEach(function(b) { b.classList.toggle('active', b.dataset.section === section); });
    document.getElementById('sectionSwitcher').scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // === PROFILE PIC ===
  fetchProfilePic: function() {
    fetch('https://www.instagram.com/api/v1/users/web_profile_info/?username=' + IG_USERNAME, { headers: { 'X-IG-App-ID': IG_APP_ID } })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.data && data.data.user.profile_pic_url_hd) {
          document.querySelector('.hero-avatar img').src = data.data.user.profile_pic_url_hd;
        }
      }).catch(function() {});
  },

  // === REELS ===
  renderReels: function() {
    document.getElementById('reelsScroll').innerHTML = this.reels.map(function(r) {
      return '<div class="reel-embed-card"><iframe src="https://www.instagram.com/p/' + r.code + '/embed" loading="lazy" allowtransparency="true" allowfullscreen="true" scrolling="no"></iframe><div class="reel-card-footer"><span>' + r.date + '</span><a href="https://www.instagram.com/p/' + r.code + '/" target="_blank"><i class="fab fa-instagram"></i> Open</a></div></div>';
    }).join('');
  },

  // === BLOGS ===
  renderTechBlogs: function() {
    var q = this.techSearch.toLowerCase();
    var list = q ? this.techBlogs.filter(function(b) { return b.title.toLowerCase().includes(q) || b.preview.toLowerCase().includes(q); }) : this.techBlogs;
    document.getElementById('techBlogGrid').innerHTML = list.length ? list.map(function(b, i) {
      return '<div class="blog-card reveal" style="animation-delay:' + (i*0.06) + 's" onclick="App.openBlog(' + b.id + ',\'tech\')"><div class="blog-icon-cover tech"><i class="fas ' + b.icon + '"></i></div><div class="blog-body"><div style="display:flex;justify-content:space-between;align-items:start;gap:8px;margin-bottom:6px"><h3 style="margin:0">' + b.title + '</h3><span class="blog-cat tech">tech</span></div><p>' + b.preview + '</p><div class="blog-meta"><span><i class="far fa-calendar"></i> ' + b.date + '</span><span class="read-more">Read <i class="fas fa-arrow-right"></i></span></div></div></div>';
    }).join('') : '<p style="text-align:center;color:var(--text2);padding:40px">No blogs found</p>';
    this.refreshReveal();
  },

  renderSocialBlogs: function(filter) {
    filter = filter || this.socialFilter;
    this.socialFilter = filter;
    var q = this.socialSearch.toLowerCase();
    var list = this.socialBlogs;
    if (filter !== 'all') list = list.filter(function(b) { return b.cat === filter; });
    if (q) list = list.filter(function(b) { return b.title.toLowerCase().includes(q) || b.preview.toLowerCase().includes(q); });
    document.getElementById('socialBlogGrid').innerHTML = list.length ? list.map(function(b, i) {
      return '<div class="blog-card reveal" style="animation-delay:' + (i*0.06) + 's" onclick="App.openBlog(' + b.id + ',\'social\')"><div class="blog-icon-cover ' + b.cat + '"><i class="fas ' + b.icon + '"></i></div><div class="blog-body"><div style="display:flex;justify-content:space-between;align-items:start;gap:8px;margin-bottom:6px"><h3 style="margin:0">' + b.title + '</h3><span class="blog-cat ' + b.cat + '">' + b.cat + '</span></div><p>' + b.preview + '</p><div class="blog-meta"><span><i class="far fa-calendar"></i> ' + b.date + '</span><span class="read-more">Read <i class="fas fa-arrow-right"></i></span></div></div></div>';
    }).join('') : '<p style="text-align:center;color:var(--text2);padding:40px">No blogs found</p>';
    this.refreshReveal();
  },

  searchTechBlogs: function(val) { this.techSearch = val; this.renderTechBlogs(); },
  searchSocialBlogs: function(val) { this.socialSearch = val; this.renderSocialBlogs(); },

  openBlog: function(id, type) {
    var list = type === 'tech' ? this.techBlogs : this.socialBlogs;
    var b = list.find(function(x) { return x.id === id; });
    if (!b) return;
    var url = window.location.href.split('#')[0] + '#blog-' + b.id;
    var shareText = b.title + ' — by @coder_sorcerer';
    document.getElementById('blogModalBody').innerHTML =
      '<h1>' + b.title + '</h1>' +
      '<div class="blog-modal-meta"><span><i class="far fa-calendar"></i> ' + b.date + '</span><span class="blog-cat ' + b.cat + '" style="display:inline-block">' + b.cat + '</span></div>' +
      '<div class="blog-modal-body">' + b.content + '</div>' +
      '<div class="blog-share"><span>Share:</span>' +
      '<a class="share-btn twitter" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareText) + '&url=' + encodeURIComponent(url) + '" target="_blank"><i class="fab fa-x-twitter"></i> Twitter</a>' +
      '<a class="share-btn whatsapp" href="https://wa.me/?text=' + encodeURIComponent(shareText + ' ' + url) + '" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>' +
      '<button class="share-btn copy" onclick="App.copyLink(\'' + url + '\', this)"><i class="fas fa-link"></i> Copy Link</button>' +
      '</div>';
    var modal = document.getElementById('blogModal');
    modal.classList.add('active');
    document.getElementById('closeBlogModal').onclick = function() { modal.classList.remove('active'); };
    modal.onclick = function(e) { if (e.target === modal) modal.classList.remove('active'); };
  },

  copyLink: function(url, btn) {
    navigator.clipboard.writeText(url).then(function() {
      btn.classList.add('copied');
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(function() { btn.classList.remove('copied'); btn.innerHTML = '<i class="fas fa-link"></i> Copy Link'; }, 2000);
    });
  },

  setupSocialFilters: function() {
    var self = this;
    document.querySelectorAll('#socialBlogFilters .filter-btn').forEach(function(btn) {
      btn.onclick = function() {
        document.querySelectorAll('#socialBlogFilters .filter-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        self.renderSocialBlogs(btn.dataset.filter);
      };
    });
  },

  // === SMOOTH THEME TOGGLE ===
  setupTheme: function() {
    var saved = localStorage.getItem('cs_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    var btn = document.getElementById('themeToggle');
    btn.innerHTML = '<i class="fas ' + (saved === 'dark' ? 'fa-sun' : 'fa-moon') + ' theme-icon"></i>';
    btn.onclick = function() {
      var icon = btn.querySelector('.theme-icon');
      icon.classList.add('spin-out');
      setTimeout(function() {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('cs_theme', next);
        icon.className = 'fas ' + (next === 'dark' ? 'fa-sun' : 'fa-moon') + ' theme-icon spin-in';
        setTimeout(function() { icon.classList.remove('spin-in'); }, 500);
      }, 300);
    };
  },

  // === SCROLL REVEAL ===
  setupScrollReveal: function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.section, .blog-card, .timeline-item, .skill-group, .about-card, .cert-item, .project-card, .resume-summary, .resume-block').forEach(function(el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
    this._revealObserver = observer;
  },

  refreshReveal: function() {
    var obs = this._revealObserver;
    if (!obs) return;
    setTimeout(function() {
      document.querySelectorAll('.blog-card.reveal:not(.visible)').forEach(function(el) { obs.observe(el); });
    }, 100);
  },

  // === EASTER EGG ===
  setupEasterEgg: function() {
    // Click wizard hat in logo
    var logo = document.querySelector('.logo');
    var clicks = 0;
    var timer = null;
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(function() { clicks = 0; }, 1000);
      if (clicks >= 5) {
        document.getElementById('easterEgg').classList.add('active');
        clicks = 0;
      }
    });

    // Konami code
    var konami = [38,38,40,40,37,39,37,39,66,65];
    var pos = 0;
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === konami[pos]) {
        pos++;
        if (pos === konami.length) {
          document.getElementById('easterEgg').classList.add('active');
          pos = 0;
        }
      } else { pos = 0; }
    });
  },

  // === PWA ===
  setupPWA: function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(function() {});
    }
    var deferredPrompt = null;
    window.addEventListener('beforeinstallprompt', function(e) {
      e.preventDefault();
      deferredPrompt = e;
      var btn = document.getElementById('pwaInstall');
      btn.classList.add('show');
      btn.onclick = function() {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function() { btn.classList.remove('show'); deferredPrompt = null; });
      };
    });
  },

  // === NAV ===
  setupNav: function() {
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    hamburger.onclick = function() { navLinks.classList.toggle('open'); };
    navLinks.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() { navLinks.classList.remove('open'); });
    });
    window.addEventListener('scroll', function() {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });
  },

  setupParticles: function() {
    var c = document.getElementById('particles');
    for (var i = 0; i < 25; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = 'left:' + Math.random()*100 + '%;top:' + Math.random()*100 + '%;animation-delay:' + Math.random()*6 + 's;animation-duration:' + (4+Math.random()*4) + 's';
      c.appendChild(p);
    }
  },

  setupTypewriter: function() {
    var words = ['Traveler', 'Explorer', 'Code Wizard', 'Mountain Lover', 'Sunset Chaser'];
    var el = document.getElementById('typewriter');
    var wi = 0, ci = 0, del = false;
    function tick() {
      el.textContent = words[wi].substring(0, ci);
      if (!del) { ci++; if (ci > words[wi].length) { del = true; setTimeout(tick, 1500); return; } }
      else { ci--; if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
      setTimeout(tick, del ? 50 : 100);
    }
    tick();
  },

  setupBackToTop: function() {
    var btn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() { btn.classList.toggle('visible', window.scrollY > 400); });
    btn.onclick = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
  }
};

document.addEventListener('DOMContentLoaded', function() { App.init(); });
