function myFunction(x) {
    x.classList.toggle("change");
}

$(function () { 
    $("#navigation").hide();
    $("#hamburger").show();
 
    let main = $("main");
    let hamburger = $("#hamburger");
    let name = $("#name");
    let uiUX = $("#ui-ux");
    let web = $("#web");
    let welcome = $("#welcome");
    let svgStuff = $(".svg-stuff");
function animation() {
    let tl = gsap.timeline();
    tl.from(hamburger, {opacity: 0, duration: 2});
    tl.from(name, {opacity: 0, duration: 1}, "-=0.5");
    tl.from(uiUX, {opacity: 0, duration: 1}, "-=0.5");
    tl.from(web, {opacity: 0, duration: 1}, "-=0.5");
    tl.from(welcome, {opacity: 0, y: 100, duration: 1}, "-=0.5");
    tl.from(svgStuff, {opacity: 0, y: -100, stagger: 0.25, ease: "bounce.out"});
}

animation();

// checkSize();

// function checkSize() {
//     if ($(window).width() > 768) {
//         $("#navigation").show();
//         $("#hamburger").hide();
//     }
//     if ($(window).width() < 768) {
//         $("#navigation").hide();
//         $("#hamburger").show();
//     }
// }
// $(window).resize(() => {
//     checkSize();
// });

$("#hamburger").click(() => {
    $("#navigation").toggle(250, () => {
        let tl = gsap.timeline();
        tl.from(this, {
            opacity: 0,
            duration: 0.5
        })   
    });
    main.toggle();
});

});