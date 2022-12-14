let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

    //  ti???n h??nh t???o h??m render s??? d???ng reduce, d??ng class col 4 ????? chia 3 ph???n b???ng nhau tr??n d??y k??nh
const renderGlass = dataGlasses.reduce((previousValue,currentValue)=>{
    return previousValue +=`<img class="col-4" onclick="clickGlass('${currentValue.id}')" src="${currentValue.src}" style="width:100%" ;>` 
},'')
document.getElementById('vglassesList').innerHTML = renderGlass;


// h??m dom onlick truy???n v??o id ????? dom

const clickGlass = (id)=>{
    //G2
    // dataGlasses => G2
    let temp = '';
    for(let value of dataGlasses){ // duy???t dc t???ng ph???n t??? trong m???ng l???y ra 1 d??ng
        if(value.id === id){
            temp = value
            break;
        }
            // t???o ?????i t?????ng t???m ????? ch???a m???ng m???i sau ???? g???i c??c ph???n t??? ????? nh???n di???n
    }
    // dom t???i id ???nh ????? t???o ???nh v?? none ???nh khi ch??a th??? k??nh
    document.getElementById('img').src =temp.virtualImg
    document.getElementById('img').hidden = false
    // tr??? button ph???i ?????t id ????? dom c??n l???i ?????u d??ng querySelector ???????c
    document.querySelector('h4').innerHTML = temp.name +' - '+ temp.brand+' ('+temp.color+')'
    document.getElementById('1').innerHTML = `$${temp.price}`
    document.querySelector('p').innerHTML = temp.description
    document.querySelector('#glassesInfo').style.display = 'inline-block';
}


// name - brand - color-price-description

// note x??a type "module" ??? ph???n link html v?? x??a thu???c t??nh display none ??? b??n ph???n css sau ???? qua
// ph???n html s??? d???ng style display ????? d??? dom t???i h??n