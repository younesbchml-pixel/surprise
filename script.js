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
    "🌷",
    "🎀",
    "🧸",
    "✨",
    "⭐",
    "🫶",
    "🥹",
    "😍"
];



/* PLUIE D'EMOJIS PERMANENTE */

function createEmoji(){


    const emoji = document.createElement("div");


    emoji.className="emoji";


    emoji.innerHTML =
    emojis[Math.floor(Math.random()*emojis.length)];



    emoji.style.left =
    Math.random()*100+"vw";



    emoji.style.fontSize =
    (20 + Math.random()*45)+"px";



    emoji.style.animationDuration =
    (4 + Math.random()*7)+"s";



    document
    .getElementById("emoji-container")
    .appendChild(emoji);



    setTimeout(()=>{

        emoji.remove();

    },12000);


}



setInterval(createEmoji,150);






/* OUVERTURE DE LA SURPRISE */


function reveal(){


    // cache la première page

    document
    .getElementById("start")
    .style.display="none";



    // affiche la surprise

    document
    .getElementById("reveal")
    .classList
    .remove("hidden");



    // flash blanc

    const flash =
    document.getElementById("flash");


    flash.classList.add("flash-active");



    setTimeout(()=>{

        flash.classList.remove("flash-active");

    },700);



    // explosion massive

    megaExplosion();


}








/* EXPLOSION DE COEURS */

function megaExplosion(){



    const explosionEmojis = [

        "💖",
        "💜",
        "✨",
        "🎉",
        "💕",
        "🌸",
        "🫶",
        "⭐",
        "🥹"

    ];



    for(let i=0;i<180;i++){


        setTimeout(()=>{


            const e =
            document.createElement("div");


            e.className="emoji";


            e.innerHTML =
            explosionEmojis[
            Math.floor(
            Math.random()*explosionEmojis.length
            )
            ];



            e.style.left =
            Math.random()*100+"vw";


            e.style.top =
            "50vh";



            e.style.animationDuration =
            (2+Math.random()*3)+"s";



            e.style.fontSize =
            (25+Math.random()*45)+"px";



            document
            .getElementById("emoji-container")
            .appendChild(e);



            setTimeout(()=>{

                e.remove();

            },5000);



        },i*10);



    }


}







/* PETITS EFFETS AU CHARGEMENT */


window.onload=()=>{


    for(let i=0;i<30;i++){

        createEmoji();

    }


};