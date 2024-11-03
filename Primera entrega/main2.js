alert ( "Bienvenidos al centro de control de stock")

let productos= ["mate", "bombilla" , "termo", "yerba"]

let ingreso

do {
    ingreso= Number(prompt("Que quiere realizar? \n 1) Ver productos \n 2) Agregar productos \n 3) Eliminar el ultimo producto \n 4) Salir"))

    

    switch (ingreso){

        
        case 1: verProductos()
    
        break
    
        case 2: agregar()
        break
    
        case 3: eliminar()
        break
    
    }} while(ingreso !==4)


function verProductos() {

    for ( let i = 0; i < productos.length; i++){

        alert("Tus productos son "+ productos[i])
    }
}

function agregar() {

    productos.push(prompt("Agrega un producto nuevo"))
}

function eliminar() {

    productos.pop()

    alert("Eliminaste el ultimo producto agregado")

}

