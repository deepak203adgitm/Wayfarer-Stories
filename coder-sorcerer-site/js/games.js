var Games = {

  // ==================== SNAKE ====================
  snake: {
    canvas: null, ctx: null, size: 15, snake: [], food: null,
    dx: 1, dy: 0, score: 0, interval: null, running: false,

    start: function() {
      this.canvas = document.getElementById('snakeCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.snake = [{x:5,y:5},{x:4,y:5},{x:3,y:5}];
      this.dx = 1; this.dy = 0; this.score = 0;
      this.placeFood();
      this.updateScore();
      if (this.interval) clearInterval(this.interval);
      this.running = true;
      var self = this;
      this.interval = setInterval(function() { self.tick(); }, 120);
    },

    dir: function(dx, dy) {
      if (this.dx === -dx && this.dy === -dy) return;
      this.dx = dx; this.dy = dy;
    },

    placeFood: function() {
      var cols = Math.floor(this.canvas.width / this.size);
      var rows = Math.floor(this.canvas.height / this.size);
      this.food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
    },

    tick: function() {
      if (!this.running) return;
      var head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
      var cols = Math.floor(this.canvas.width / this.size);
      var rows = Math.floor(this.canvas.height / this.size);

      if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows) return this.gameOver();
      for (var i = 0; i < this.snake.length; i++) {
        if (this.snake[i].x === head.x && this.snake[i].y === head.y) return this.gameOver();
      }

      this.snake.unshift(head);
      if (head.x === this.food.x && head.y === this.food.y) {
        this.score += 10;
        this.updateScore();
        this.placeFood();
      } else {
        this.snake.pop();
      }
      this.draw();
    },

    draw: function() {
      var s = this.size;
      var style = getComputedStyle(document.documentElement);
      this.ctx.fillStyle = style.getPropertyValue('--bg3').trim() || '#1a1a2e';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Snake
      for (var i = 0; i < this.snake.length; i++) {
        this.ctx.fillStyle = i === 0 ? '#6c5ce7' : '#a29bfe';
        this.ctx.fillRect(this.snake[i].x * s + 1, this.snake[i].y * s + 1, s - 2, s - 2);
        this.ctx.fillStyle = '#fff3';
        this.ctx.fillRect(this.snake[i].x * s + 3, this.snake[i].y * s + 3, 4, 4);
      }

      // Food
      this.ctx.fillStyle = '#e74c3c';
      this.ctx.beginPath();
      this.ctx.arc(this.food.x * s + s/2, this.food.y * s + s/2, s/2 - 2, 0, Math.PI * 2);
      this.ctx.fill();
    },

    gameOver: function() {
      this.running = false;
      clearInterval(this.interval);
      this.ctx.fillStyle = '#000a';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 20px sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Game Over!', this.canvas.width/2, this.canvas.height/2 - 10);
      this.ctx.font = '14px sans-serif';
      this.ctx.fillText('Score: ' + this.score, this.canvas.width/2, this.canvas.height/2 + 15);
    },

    updateScore: function() {
      document.getElementById('snakeScore').textContent = 'Score: ' + this.score;
    }
  },

  // ==================== TIC TAC TOE ====================
  ttt: {
    board: null, turn: 'X', over: false,

    init: function() {
      this.reset();
    },

    reset: function() {
      this.board = ['','','','','','','','',''];
      this.turn = 'X';
      this.over = false;
      this.render();
      document.getElementById('tttStatus').textContent = 'Your turn (X)';
    },

    render: function() {
      var html = '';
      for (var i = 0; i < 9; i++) {
        var cls = this.board[i] === 'X' ? 'x' : this.board[i] === 'O' ? 'o' : '';
        html += '<div class="ttt-cell ' + cls + '" onclick="Games.ttt.play(' + i + ')">' + this.board[i] + '</div>';
      }
      document.getElementById('tttBoard').innerHTML = html;
    },

    play: function(i) {
      if (this.board[i] || this.over) return;
      this.board[i] = 'X';
      if (this.checkWin('X')) return this.end('You win! 🎉');
      if (this.board.indexOf('') === -1) return this.end('Draw!');
      this.aiMove();
      if (this.checkWin('O')) return this.end('AI wins!');
      if (this.board.indexOf('') === -1) return this.end('Draw!');
      this.render();
      document.getElementById('tttStatus').textContent = 'Your turn (X)';
    },

    aiMove: function() {
      // Try to win
      var m = this.findMove('O');
      if (m === -1) m = this.findMove('X'); // block
      if (m === -1) { // random
        var empty = [];
        for (var i = 0; i < 9; i++) { if (!this.board[i]) empty.push(i); }
        // prefer center, then corners
        if (!this.board[4]) m = 4;
        else {
          var corners = [0,2,6,8].filter(function(c) { return !this.board[c]; }.bind(this));
          m = corners.length ? corners[Math.floor(Math.random()*corners.length)] : empty[Math.floor(Math.random()*empty.length)];
        }
      }
      if (m !== -1 && m !== undefined) this.board[m] = 'O';
    },

    findMove: function(p) {
      var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for (var i = 0; i < wins.length; i++) {
        var a = wins[i][0], b = wins[i][1], c = wins[i][2];
        if (this.board[a] === p && this.board[b] === p && !this.board[c]) return c;
        if (this.board[a] === p && this.board[c] === p && !this.board[b]) return b;
        if (this.board[b] === p && this.board[c] === p && !this.board[a]) return a;
      }
      return -1;
    },

    checkWin: function(p) {
      var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for (var i = 0; i < wins.length; i++) {
        if (this.board[wins[i][0]] === p && this.board[wins[i][1]] === p && this.board[wins[i][2]] === p) {
          this.winLine = wins[i];
          return true;
        }
      }
      return false;
    },

    end: function(msg) {
      this.over = true;
      this.render();
      if (this.winLine) {
        var cells = document.querySelectorAll('.ttt-cell');
        this.winLine.forEach(function(i) { cells[i].classList.add('win'); });
      }
      document.getElementById('tttStatus').textContent = msg;
    }
  },

  // ==================== MEMORY ====================
  memory: {
    cards: [], flipped: [], matched: [], moves: 0, locked: false,

    reset: function() {
      var emojis = ['🏔️','🌅','🌙','💻','🎵','🍳','✈️','🧩'];
      var deck = emojis.concat(emojis);
      // Shuffle
      for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = deck[i]; deck[i] = deck[j]; deck[j] = t;
      }
      this.cards = deck;
      this.flipped = [];
      this.matched = [];
      this.moves = 0;
      this.locked = false;
      this.render();
      document.getElementById('memScore').textContent = 'Moves: 0';
    },

    render: function() {
      var html = '';
      for (var i = 0; i < this.cards.length; i++) {
        var isFlipped = this.flipped.indexOf(i) !== -1;
        var isMatched = this.matched.indexOf(i) !== -1;
        var cls = (isFlipped || isMatched) ? 'flipped' : '';
        if (isMatched) cls += ' matched';
        var content = (isFlipped || isMatched) ? this.cards[i] : '?';
        html += '<div class="mem-card ' + cls + '" onclick="Games.memory.flip(' + i + ')">' + content + '</div>';
      }
      document.getElementById('memBoard').innerHTML = html;
    },

    flip: function(i) {
      if (this.locked) return;
      if (this.flipped.indexOf(i) !== -1 || this.matched.indexOf(i) !== -1) return;
      this.flipped.push(i);
      this.render();

      if (this.flipped.length === 2) {
        this.moves++;
        document.getElementById('memScore').textContent = 'Moves: ' + this.moves;
        this.locked = true;
        var a = this.flipped[0], b = this.flipped[1];
        var self = this;

        if (this.cards[a] === this.cards[b]) {
          this.matched.push(a, b);
          this.flipped = [];
          this.locked = false;
          this.render();
          if (this.matched.length === this.cards.length) {
            document.getElementById('memScore').textContent = 'Won in ' + this.moves + ' moves! 🎉';
          }
        } else {
          setTimeout(function() {
            self.flipped = [];
            self.locked = false;
            self.render();
          }, 800);
        }
      }
    }
  }
};

// Init games when DOM ready
document.addEventListener('DOMContentLoaded', function() {
  Games.ttt.init();
  Games.memory.reset();

  // Snake keyboard controls
  document.addEventListener('keydown', function(e) {
    if (!Games.snake.running) return;
    if (e.key === 'ArrowUp' || e.key === 'w') { e.preventDefault(); Games.snake.dir(0, -1); }
    if (e.key === 'ArrowDown' || e.key === 's') { e.preventDefault(); Games.snake.dir(0, 1); }
    if (e.key === 'ArrowLeft' || e.key === 'a') { e.preventDefault(); Games.snake.dir(-1, 0); }
    if (e.key === 'ArrowRight' || e.key === 'd') { e.preventDefault(); Games.snake.dir(1, 0); }
  });
});
