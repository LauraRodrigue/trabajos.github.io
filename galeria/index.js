const imagen = [
    "https://i.pinimg.com/236x/14/d8/a7/14d8a747e80b5a20ebf31562dbdb546e.jpg",
    "https://w0.peakpx.com/wallpaper/758/178/HD-wallpaper-beautiful-flowers-beautiful-flower-landscape-nature-sun-sunrise-sunset.jpg",
    "https://i.pinimg.com/236x/a0/f7/f8/a0f7f89b026bdca31a6ec9a516c967e6--rakotzbr%C3%BCcke-germany-germany-travel.jpg",
    "https://i.pinimg.com/564x/ea/5b/03/ea5b03ef0f0870309d35ce136cd94e7d--pink-trees-colorful-trees.jpg",
    "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    "https://c8.alamy.com/compes/gnx1we/vista-lateral-de-un-fotografo-retroiluminado-silueta-fotografiando-sol-con-camara-dslr-al-amanecer-en-la-playa-con-el-oceano-gnx1we.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaW65RSFTxOXh5iH28UdYn4E1vy2WxwbGMJjzdf3-CwUQZ1die4-aSmcMXPSrQURklcY&usqp=CAU",
    "https://us.123rf.com/450wm/simiaattentive/simiaattentive1807/simiaattentive180700041/106550344-mariposas-azules-y-verdes-vuelan-sobre-flores-p%C3%BArpuras-y-amarillas-de-michaelmas-daisy-mariposas.jpg?ver=6",
    "https://thumbs.dreamstime.com/b/puesta-del-sol-hermosa-de-la-tarde-con-el-arco-iris-96193562.jpg",
    "https://i.pinimg.com/474x/af/a8/89/afa8899c875648744274c349c93f1356.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpehYHVodkO-maM5Os0mEYLZpxrL0OPLvPDQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEAHfOQIdkWNiGmuIQ5rBzIFanxS74uGyhMruS4p0qCPzvdN05tzt5z0g08hJ2VbCALA&usqp=CAU"
];

for (let i = 0; i < imagen.length; i++) {
  document.getElementById("imagenes").innerHTML += `<img src="${imagen[i]}" alt="" class="imagenes">`;
}

function cambiar(event){
    const boton= event.target;
    console.log(boton.src)
    document.getElementById("perfil").style.backgroundImage=`url(${boton.src})`;
}

const img =document.querySelectorAll(".imagenes");
img.forEach(function(boton){
    boton.addEventListener("click", cambiar);
});