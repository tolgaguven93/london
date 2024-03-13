const tabs = document.querySelectorAll(".tab-btn")
const contentAll = document.querySelectorAll(".content")

tabs.forEach((tab,index)=>{
    tab.addEventListener(`click`,(e)=>{
        tabs.forEach(tab=>{tab.classList.remove("active")})
        tab.classList.add("active");

        contentAll.forEach(content=>{content.classList.remove("active")})
        contentAll[index].classList.add("active");
    })
})