var arr = [
    {dp:"https://images.unsplash.com/photo-1619551734325-81aaf323686c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80", story:"https://images.unsplash.com/photo-1592860585388-1c9bdff4e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},
    {dp:"https://images.unsplash.com/photo-1619083255949-72122de7513f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJtdyUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", story:"https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym13fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"},
    {dp:"https://images.unsplash.com/photo-1581966451257-a5c7c5afa833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9sbHMlMjByb3ljZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60", story:"https://images.unsplash.com/photo-1522255272218-7ac5249be344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvbGxzJTIwcm95Y2V8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60"},
    {dp:"https://images.unsplash.com/photo-1623173103439-fd360deedad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycmFyaSUyMGxvZ298ZW58MHwxfDB8fHww&auto=format&fit=crop&w=600&q=60", story:"https://images.unsplash.com/photo-1610847499832-918a1c3c6811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVycmFyaXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"},
]



// var clutter = ""
// arr.forEach(function(elem, idx){
//     clutter += ` <div class="story">
//     <img id="${idx}" src="${elem.dp}" alt="">
// </div>`
// })

// // console.log(clutter)

// document.querySelector("#stories").innerHTML = clutter
// document.querySelector("#stories").addEventListener("click", function(dets){
//     document.querySelector("#full-screen").style.display = "block"
//     document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

//     setTimeout(function(){
//         document.querySelector("#full-screen").style.display = "none"
//     }, 3000)
// })


var clutter = ""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
         <img id="${idx}" src="${elem.dp}" alt="">
     </div>`
})


var stories = document.querySelector("#stories")

stories.innerHTML = clutter
stories.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)
})
