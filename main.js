
let images = document.querySelector(".image")
let nameBtn = document.querySelector(".name-btn")
let myProfession = document.querySelector(".profession")
let myReview = document.querySelector(".review")
let previousBtn = document.querySelector(".previous-btn")
let nextBtn = document.querySelector(".next-btn")

let reviewBox = [
    {
        img: "IMG_5147.JPG",
        name: "Joy Essien",
        profession: "Web Designer",
        review: "I recommend this app to all beginners aiming  to learn the basics of HTML/CSS"
    }, 

    {
        img: "img.JPG",
        name: "Vanessa Wills",
        profession: "UI/UIX Designer",
        review: "kudos to the Manufacturers. This app made learning easier for me and my teammates"
    },

    {
        img: "image.JPG",
        name: "Mia Ray",
        profession: "Lead Developer",
        review: "My teammates and I enjoyed using this app. The app is highly recommended for easy learning"
    }
]

let count = 0

document.addEventListener("DOMContentLoaded",function(){
    images.src = reviewBox[0].img
    nameBtn.textContent = reviewBox[0].name
    myProfession.textContent = reviewBox[0].profession
    myReview.textContent = reviewBox[0].review
    
})

nextBtn.addEventListener("click", function(){
    count ++

    if(count > reviewBox.length-1){
        count= 0
    }

    images.src = reviewBox[count].img
    nameBtn.textContent = reviewBox[count].name
    myProfession.textContent = reviewBox[count].profession
    myReview.textContent = reviewBox[count].review
})

previousBtn.addEventListener("click", function(){
    count --

    if(count < 0){
        count = reviewBox.length - 1
    }

    images.src = reviewBox[count].img
    nameBtn.textContent = reviewBox[count].name
    myProfession.textContent = reviewBox[count].profession
    myReview.textContent = reviewBox[count].review
})