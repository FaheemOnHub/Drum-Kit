for(var i=0;i<=6;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function()
{

    var buttonInnerHTML=this.innerHTML;

    switch(buttonInnerHTML)
    {
        case "w":
            var sound= new Audio('sounds/tom-1.mp3');
            sound.play();
        break;

        case "a":
            var sound= new Audio('sounds/tom-2.mp3');
            sound.play();
        break;

        case "s":
            var sound= new Audio('sounds/tom-3.mp3');
            sound.play();
        break;

        case "d":
            var sound= new Audio('sounds/tom-4.mp3');
            sound.play();
        break;

        case "j":
            var sound= new Audio('sounds/snare.mp3');
            sound.play();
        break;

        case "k":
            var sound= new Audio('sounds/crash.mp3');
            sound.play();
        break;

        case "l":
            var sound= new Audio('sounds/kick-bass.mp3');
            sound.play();
        break;

        default:console.log(buttonInnerHTML);
    }
});


    document.addEventListener("keydown",function(event)
    {
        makesound(event.key)

    });

    function makesound(key)
    {
        switch(key)
    {
        case "w":
            var sound= new Audio('sounds/tom-1.mp3');
            sound.play();
        break;

        case "a":
            var sound= new Audio('sounds/tom-2.mp3');
            sound.play();
        break;

        case "s":
            var sound= new Audio('sounds/tom-3.mp3');
            sound.play();
        break;

        case "d":
            var sound= new Audio('sounds/tom-4.mp3');
            sound.play();
        break;

        case "j":
            var sound= new Audio('sounds/snare.mp3');
            sound.play();
        break;

        case "k":
            var sound= new Audio('sounds/crash.mp3');
            sound.play();
        break;

        case "l":
            var sound= new Audio('sounds/kick-bass.mp3');
            sound.play();
        break;

        default:console.log(buttonInnerHTML);
    }};



    // function clicked()
    // {
    // console.log(this.innerHTML);
    // var sound= new Audio('sounds/crash.mp3');
    // sound.play();
    // }


//Making constructor in JS
// function HouseKeeper(name,yoe,cleaning_list)
// {
//     this.naam=name;
//     this.yoe=yoe;
//     this.cleaning_list=cleaning_list;

        //method function in constructor

        // this.clean=function()
        // {
        //     alert("cleaning in progress");
        // }

// }


// Making new constructor in JS
// var housekeeper1=new HouseKeeper("zor",9,["washroom","lawn"]);
}