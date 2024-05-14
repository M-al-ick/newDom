var box = document.getElementsByClassName("box")
for (let i = 0; i < box.length; i++) {
    let bntPlus = box[i].children[4].children[2]
    let bntMoins = box[i].children[4].children[0]
    let bntlike = box [i].children[5].children[0].children[0]
    let nombre = box[i].children[4].children[1]
    let total = box[i].children[3].children[1]
    let prixUni = box[i].children[2].children[1]
    let supp = box[i].children[5].children[1]
    let qty = parseInt(nombre.innerText)
    let prixUnit = parseInt(prixUni.innerText)
    //calcule-total-unitaire-des-articles
    bntPlus.addEventListener('click', function () {
        qty++;
        nombre.innerText = qty;
        total.innerText = prixUnit * qty;
        somme()
    })
    //dimunition-total-unitaire-des-articles
    bntMoins.addEventListener('click', function () {
        qty--
        if(qty < 1) {
            qty = 0;
        }
        nombre.innerText = qty
        total.innerText = prixUnit * qty
        somme()

    })
    //button-like
    bntlike.addEventListener('click',function () {
        bntlike
        if(bntlike.style.color== "red"){
            bntlike.style.color= "black"
        }
        else {
            bntlike.style.color="red"
        }
    })

    
    //button-supprimer
    let boxSu=box[i]
    if(boxSu){
        supp.addEventListener("click",function(){
            boxSu.remove()
        })
    
    }
    
   
}
//total-Unitaire
let tota1 = document.getElementById('tyu')
function somme() {
    let sum = 0;
    let tota = document.getElementsByClassName("price")
    for (let i = 0; i < tota.length; i++) {
        let price= parseInt(tota[i].innerText)
        sum=sum+price
    }
   
tota1.innerText=sum
}