const modal = document.getElementById("modal")

let botoesModal = document.getElementsByClassName("card")

console.log(modal)

Array.from(botoesModal).forEach((botao) => {

    botao.addEventListener("click" , () => {
        modal.showModal();
    })

})