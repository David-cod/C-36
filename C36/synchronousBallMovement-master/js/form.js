class Form {

    constructor(){




    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position(130,50);

        var input=createInput("name");
        var button=createButton("play");
        var greeting=createElement("h3");
        input.position(130,160);
        button.position(130,220);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount++;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(130,160);
        });

    }




}

