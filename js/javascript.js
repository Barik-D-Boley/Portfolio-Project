function replace(page) {
    window.location=(page + ".html");
}

function buttonsa() {
    console.log("Hallo");
    document.getElementById("buttons").style.color = "red";
}

$("#linkedIn").on("mouseenter", function() {
    $(this).attr("src", "images/linkinHover.png");
})
$("#linkedIn").on("mouseleave", function() {
    $(this).attr("src", "images/linkedin.png");
})

$("#steam").on("mouseenter", function() {
    $(this).attr("src", "images/steamHover.png");
})
$("#steam").on("mouseleave", function() {
    $(this).attr("src", "images/steam.png");
})

$("#discord").on("mouseenter", function() {
    $(this).attr("src", "images/discordHover.png");
})
$("#discord").on("mouseleave", function() {
    $(this).attr("src", "images/discord.png");
})