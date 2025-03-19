let divMediaBimestral = document.querySelector(".div-media-bimestral")
let botaoCalcularParcial = document.querySelector("#botao-media-parcial")
let $resultadoParcial = document.querySelector("#resultado-parcial")
let $statusParcial = document.querySelector("#status-parcial")
let $resultadoBimestral = document.querySelector("#resultado-bimestral")
let $statusBimestral = document.querySelector("#status-bimestral")

botaoCalcularParcial.addEventListener("click", ()=>{
    let av1 = Number(document.querySelector("#input-av1").value)
    let av2 = Number(document.querySelector("#input-av2").value)
    let mediaParcial = (av1 + av2) / 2
    
    $resultadoParcial.innerText = `Sua média parcial é ${mediaParcial}`
    if (mediaParcial <= 4){
        $statusParcial.innerText = `Você foi reprovado`
        divMediaBimestral.style.display = "none"
    }else{
        $statusParcial.innerText = `Você foi passou para AV3`
        divMediaBimestral.style.display = "flex"

        let botaoCalcularBimestral = document.querySelector("#botao-media-bimestral")
        botaoCalcularBimestral.addEventListener("click", ()=>{
            av1 = Number(document.querySelector("#input-av1").value)
            av2 = Number(document.querySelector("#input-av2").value)
            mediaParcial = (av1 + av2) / 2
        
            $resultadoParcial.innerText = `Sua média parcial é ${mediaParcial}`
            if (mediaParcial <= 4){
                $statusParcial.innerText = `Você foi reprovado`
                divMediaBimestral.style.display = "none"
            }else{
                $statusParcial.innerText = `Você foi passou para AV3`
                divMediaBimestral.style.display = "flex"}

                let av3 = Number(document.querySelector("#input-av3").value)
                let mediaSemestre = (mediaParcial + av3) / 2
                $resultadoBimestral.innerText = `Sua média final foi ${mediaSemestre}`
                if (mediaSemestre <= 5 && av3 <= 4) {
                    $statusBimestral.innerText = `Você foi reprovado`
                }else{
                    $statusBimestral.innerText = `Você foi aprovado`
                }
        })
    }
})

let botaoLimpar = document.querySelector("#botao-limpar")
botaoLimpar.addEventListener("click", ()=>{
    let av1Input = document.querySelector("#input-av1")
    let av2Input = document.querySelector("#input-av2")
    let av3Input = document.querySelector("#input-av3")
    av1Input.value = ""
    av2Input.value = ""
    av3Input.value = ""
    $resultadoParcial.innerText = ""
    $statusParcial.innerText = ""
    $resultadoBimestral.innerText = ""
    $statusBimestral.innerText = ""
    divMediaBimestral.style.display = "none"
})