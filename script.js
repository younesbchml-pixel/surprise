const emojis = [
    "💖",
    "💕",
    "💗",
    "💞",
    "💘",
    "💝",
    "🩷",
    "💜",
    "🌸",
    "🎀",
    "✨",
    "🫶"
];



function createEmoji(){


    const emoji = document.createElement("div");


    emoji.className = "emoji";


    emoji.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];



    emoji.style.left =
    Math.random()*100 + "vw";



    emoji.style.fontSize =
    (20 + Math.random()*25) + "px";



    emoji.style.animationDuration =
    (6 + Math.random()*5) + "s";



    document
    .getElementById("emojis")
    .appendChild(emoji);



    setTimeout(()=>{

        emoji.remove();

    },12000);


}




// Quelques emojis au démarrage seulement

for(let i=0;i<15;i++){

    setTimeout(()=>{

        createEmoji();

    },i*200);

}



// Petite pluie légère

setInterval(()=>{

    createEmoji();

},700);







function showSurprise(){


    document
    .getElementById("intro")
    .classList
    .add("hidden");



    document
    .getElementById("surprise")
    .classList
    .remove("hidden");



    const flash =
    document.getElementById("flash");


    flash.classList.add("flash");



    setTimeout(()=>{

        flash.classList.remove("flash");

    },700);



    celebration();


}







function celebration(){


    const special = [

        "💖",
        "💜",
        "✨",
        "🎉",
        "🫶",
        "🌸"

    ];



    for(let i=0;i<50;i++){


        setTimeout(()=>{


            const e =
            document.createElement("div");



            e.className="emoji";


            e.innerHTML =
            special[
            Math.floor(
            Math.random()*special.length
            )
            ];



            e.style.left =
            Math.random()*100+"vw";



            e.style.top =
            "40vh";



            e.style.fontSize =
            (25+Math.random()*25)+"px";



            e.style.animationDuration =
            "3s";



            document
            .getElementById("emojis")
            .appendChild(e);



            setTimeout(()=>{

                e.remove();

            },4000);



        },i*30);



    }


}