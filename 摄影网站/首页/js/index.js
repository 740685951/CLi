window.onload = function () {
    let ban1 = document.querySelectorAll('.banner1')
    let index = 0
    let next = 0, current = 0
    let flag = true
    let widths = parseInt(getComputedStyle(ban1[0], null).width)
    let banner = document.querySelector('.banner')
    let btnR = document.querySelector('.bright')
    let btnL = document.querySelector('.bleft')
    let t = setInterval(move, 2000)
    // function move() {
    //     index++
    //     if (index === ban1.length) {
    //         index = 0
    //     }
    //     ban1.forEach(function (value) {
    //         value.style.zIndex = 10
    //     })
    //     ban1[index].style.zIndex = 999
    // }
    banner.onmouseenter = function () {
        clearInterval(t)
    }
    banner.onmouseleave = function () {
        t = setInterval(move, 2000)
    }
    function move() {
        next++
        if (next == ban1.length) {
            next = 0
        }
        ban1[next].style.left = widths + 'px'
        animate(ban1[next], {left: 0})
        animate(ban1[current], {left: -widths}, function () {
            flag = true
        })
        current = next
    }

    function movel() {
        next--
        if (next < 0) {
            next = ban1.length - 1
        }
        ban1[next].style.left = -widths + 'px'
        animate(ban1[next], {left: 0})
        animate(ban1[current], {left: widths}, function () {
            flag = true
        })
        current = next
    }

    btnR.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        move()
    }
    btnL.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        movel()
    }
}