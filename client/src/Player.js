class Player{
    constructor(id, userName){
        this.id = id;
        this.userName = userName;
        this.score = 0;
        this.icon = '';
        this.latestChoice = 4;
    }

    updateScore(x){
        this.score += x;
    }

    updateIcon(x){
        this.icon = x;
    }

    updateLatestChoice(x){
        this.latestChoice = x;
    }
}

export default Player;