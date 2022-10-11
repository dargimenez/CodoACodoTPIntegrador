let descuento = 0;
let descuentoTotal = 0;
let cantidad = 0;
let total = 0;

function cambiarSelect() { 
    if(document.getElementById('btnEstudiante').checked) {
        descuento = 80;
        document.getElementById("categoria").value = selEstudiante.value;
    }
    else if(document.getElementById('btnTrainee').checked) {
        descuento = 50;
        document.getElementById("categoria").value = selTrainee.value;
    }
    else if(document.getElementById('btnJunior').checked) {
        descuento = 15;
        document.getElementById("categoria").value = selJunior.value;
    }
    else {
        document.getElementById("descuento").innerHTML
            = "No selecciono ningun boton";
    }
}

function cambiarRadio() { 
    if(document.getElementById("categoria").value == selEstudiante.value) {
        descuento = 80;
        document.getElementById("btnEstudiante").checked = true;
    }
    else if(document.getElementById("categoria").value == selTrainee.value) {
        descuento = 50;
        document.getElementById("btnTrainee").checked = true;
    }
    else if(document.getElementById('categoria').value == selJunior.value) {
        descuento = 15;
        document.getElementById("btnJunior").checked = true;
    }
    else {
        document.getElementById("descuento").innerHTML
            = "No selecciono ningun boton";
    }
}



function calcular() { 
    cantidad = document.getElementById("cantidad").value;
    total = (cantidad * 200);
    descuentoTotal = (total * descuento) / 100;
    total = total - descuentoTotal;
    document.getElementById("total").innerHTML = "Total a pagar: $ " + total;
}

