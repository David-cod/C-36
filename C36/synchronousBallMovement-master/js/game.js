class Game {
    constructor(){




    }
    gamestate(){
        var gameStateRef=database.ref('gamestates');
        gameStateRef.on("value",function (data){
            gameState=data.val();
        });
    }

    update(name){
        database.ref("/").update({
            gamestate: state
        });
    } 
    

    start(){
        if(gameState===0){
            player=new Player();
            player.playerGetCount();
            form=new Form();
            form.display();

        }

    }

}