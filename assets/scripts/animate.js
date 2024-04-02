function cursoranimation() {
    var cursor = document.querySelector('.cursor');
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y
        })

    })

    // document.querySelector('#child1').addEventListener("mouseenter",function(){
    //     gsap.to('.cursor',{
    //     transform: 'translate(-50%,-50%) scale(1)'
    //     })
    // })
    // document.querySelector('#child1').addEventListener("mouseleave",function(){
    //     gsap.to('.cursor',{
    //     transform: 'translate(-50%,-50%) scale(0)'
    //     })
    // })
    document.querySelectorAll('.main').forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to('.cursor', {
                transform: 'translate(-50%,-50%) scale(1)',
                opacity: 1
            })
        })
    })
    document.querySelectorAll('.main').forEach(function (elem) {
        elem.addEventListener("mouseleave", function () {
            gsap.to('.cursor', {
                transform: 'translate(-50%,-50%) scale(0)',
                opacity: 0
            })
        })
    })
}

cursoranimation();