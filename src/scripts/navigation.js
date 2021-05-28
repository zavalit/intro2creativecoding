const slides = document.getElementById('slides')

const state = {

    active_slide : 6,

    slideUp : function () {
        if (this.active_slide + 1 < slides.childNodes.length) {
            this.deactivate()
            this.active_slide = this.active_slide + 1
            this.activate()
            checkNavigation()

        }
        
        this.move()
    },

    slideDown : function () {
        if (this.active_slide - 1 >= 0) {
            this.deactivate()
            this.active_slide = this.active_slide - 1
            this.activate()
            checkNavigation()
        }        
        this.move()
    },

    move: function () {
        slides.style.transform = `translateX(-${this.active_slide * 100}%)`
    },

    moveByX: function (x) {
        slides.style.transform = `translateX(-${this.active_slide * 100 - x}%)`
    },

    activate: function () {
         slides.childNodes[this.active_slide].classList.add('active')
    },

    deactivate: function () {
        slides.childNodes[this.active_slide].classList.remove('active')
    } 
}




const leftButton = document.getElementById('to_previous_slide')
const rightButton = document.getElementById('to_next_slide')
console.log(leftButton, rightButton)

leftButton.addEventListener('click', () => state.slideDown())
rightButton.addEventListener('click', () => state.slideUp())


const checkNavigation = () => {

    state.active_slide === 0
    ? leftButton.style.visibility = 'hidden'
    : leftButton.style.visibility = 'visible'
     
    state.active_slide === slides.childNodes.length - 1
    ? rightButton.style.visibility = 'hidden'
    : rightButton.style.visibility = 'visible'
    
}

const onWipe = {

    x_start: null,
    x_diff: 0,
    handleStart: function(e){
        const {clientX} = e.touches[0]
        this.x_start = clientX

    },
    handleMove: function(e){
        
        const {clientX} = e.touches[0]
        this.x_diff = clientX - this.x_start        
        state.moveByX( Math.log(Math.abs(this.x_diff)) * Math.sign(this.x_diff) * 5)
       
    },
    handleEnd: function(){
        const weight = this.x_diff/window.innerWidth 
        
        if(Math.abs(weight) > .2) {
            weight < 0 
            ? state.slideUp()
            : state.slideDown()
        } else {
            state.move()
        }
        
        this.x_diff = 0
        
    },
    handleCancel: function(){
    
        this.x_diff = 0
    
    },
    
}

function startup() {

    state.activate()
    state.move()
    checkNavigation()


    const body = document.body;
    body.addEventListener("touchstart", onWipe.handleStart, false);
    body.addEventListener("touchend", onWipe.handleEnd, false);
    body.addEventListener("touchcancel", onWipe.handleCancel, false);
    body.addEventListener("touchmove", onWipe.handleMove, false);
  
}
  
document.addEventListener("DOMContentLoaded", startup);




