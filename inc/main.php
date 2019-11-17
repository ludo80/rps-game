<body>
    <header id="header">
        <h1>Rock Paper Scissors</h1>
        <h4>or how to waste an hour playing one of the simplest game ever</h4>
    </header>
    <div id="main">
        <div id="game-selector">
            <h3>Who's playing ?</h3>
            <div class="container">
                <div class="game-type" id="pvsc">Player<br>vs<br>Computer</div>
                <div class="game-type" id="cvsc">Computer<br>vs<br>Computer</div>
            </div>
        </div>
        <section id="game" style="display: none">
            <h4>
                <span class="score" id="player1-score">0</span>
                <span id="game-type"></span>
                <span class="score" id="player2-score">0</span>
            </h4>
            <div id="player-choice">
                <div class="choice-button" id="0"><img src="images/rock.png"></div>
                <div class="choice-button" id="1"><img src="images/paper.png"></div>
                <div class="choice-button" id="2"><img src="images/scissors.png"></div>
            </div>
            <div class="container">
                <div id="cpu-battle">Let them play !</div>
            </div>
            <div id="computer-choice"></div>
            <div id="computer2-choice"></div>
            <h2 id="result"></h2>
            <h4 id="text-result"></h4>
            <div class="container">
                <div id="reset">Reset</div>
            </div>
        </section>
    </div>
</body>