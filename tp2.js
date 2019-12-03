const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
    [ 100, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
    [ 101, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
    [ 102, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva']],
    [ 103, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200']],
    [ 104, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200']],
    [ 105, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston']]
    ];

const precios = [ 
    [ 'Monitor GPRS 3000', 200  ],
    [ 'Motherboard ASUS 1500', 120  ],
    [ 'Monitor ASC 543', 250  ],
    [ 'Motherboard ASUS 1200', 100  ],
    [ 'Motherboard MZI', 30  ],
    [ 'HDD Toyiva', 90  ],
    [ 'HDD Wezter Dishital', 75  ],
    [ 'RAM Quinston', 110  ],
    [ 'RAM Quinston Fury', 230  ]
];

const sucursales = [ 'Centro', 'Caballito' ];

/*FUNCIÓN 1*/

const precioMaquina = (componentes) => {
    let precioTotal = 0;
    for (componente of componentes) {
        for (precio of precios) {
            if (precio[0] == componente) {
                precioTotal += precio[1]
            }
        }
    } 
    return precioTotal
}

/* FUNCIÓN 2 */

const cantidadVentasComponente = (componente) => {
    let cantidadVendida = 0;
    for (let i=0; i< ventas.length; i++) {
        for (let j=0; j<ventas[i][6].length; j++ ) {
            if (componente == ventas[i][6][j]) {
                cantidadVendida ++;
            }
        }
    } 
    return cantidadVendida;
}


/* FUNCIÓN 3: ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora y retorna el importe
 total de ventas realizadas por dicha vendedora.*/
const ventasVendedora = (nombre) => {
     let contador = 0;
     for (let i = 0; i < ventas.length; i++) {
         if (ventas[i][4] == nombre) {                               
             for (let x = 0; x < ventas.length; x++)                 
                 for (let y = 0; y < precios.length; y++) {
                     if (precios[y][0] == ventas[i][6][x]) {
                         contador += precios[y][1];
                     }
                 }
         }
     }
     return contador;
 };

/* FUNCIÓN 4 */

const componenteMasVendido = () => {
    let contador = 0;
    let componenteMasVendido= "";
    for(let precio of precios){
        const componenteVendido= cantidadVentasComponente(precio[0]);
        if(componenteVendido>contador){
            contador = componenteVendido;
            componenteMasVendido = precio[0] 
        }
    }
    return `El componente mas vendido fue: ${componenteMasVendido}`;
}

 /* FUNCIÓN 5: ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y
  retorna el importe de las ventas totales realizadas por una sucursal sin límite de fecha.*/

const ventasSucursal = (sucursal) => {
     let contador = 0;
     for (let i = 0; i < ventas.length; i++) {
         if (ventas[i][5] == sucursal) {
             for (let x = 0; x < ventas.length; x++)
                 for (let y = 0; y < precios.length; y++) {
                     if (precios[y][0] == ventas[i][6][x]) {
                         contador += precios[y][1]
                     }
                 }
         }
     }
     return (contador)
 };

/* FUNCIÓN 6: mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó*/

const mejorVendedora = () => {
     let contador = 0;
     let mejorVendedora = "";
     for (let vendedora of vendedoras) {                       //ver si lo puedo cambiar al for of
         let ingresosGenerados = ventasVendedora(vendedora)
         if (ingresosGenerados > contador) {
             mejorVendedora = vendedora;
             contador = ingresosGenerados;
         }
     }
     return mejorVendedora;
 }
 
/*FUNCIÓN 7*/ 

const ventaPromedio=()=> {
    let suma = 0;
    for (let i = 0; i<ventas.length; i++) {
       suma = suma + precioMaquina(ventas[i][6]);
    } 
    return  Math.floor(suma / ventas.length)
}
console.log(ventaPromedio()); 

/* FUNCIÓN 8 */

const obtenerIdVenta=()=>{
    let id=Math.floor(Math.random) * (999999999-100000000)+100000000 // math.random es para que tire un numero random , entonces porngo lo limites minimo, maximo y minimo
    return id  
}
console.log(obtenerIdVenta());

/* FUNCIÓN 9 */

const agregaVentas=(dia, mes, anio, vendedora, sucursal, componentes=[])=>{
    let venta=[];
    let id=obtenerIdVenta();
    venta.push(id);
    if(typeof dia!="number" && typeof mes!="number" && typeof anio!="number"){
        throw "La fecha tiene que estar ingresada con numeros"
    }
    else if (vendedoras.indexOf(vendedora)==-1){
        throw "La vendedora no esta en nuestros registros"
    }
    else if (sucursal.indexOf(sucursal)==-1){
        throw "La sucursal no existe"
    }
    venta.push(dia, mes, anio, vendedora, sucursal, componentes) 
    ventas.push(venta);
    return venta 
}

module.exports = {
    vendedoras,
    ventas,
    precios,
    sucursales,
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido,
    ventaPromedio,
    ventasVendedora,
    ventasSucursal,
    mejorVendedora, 
    obtenerIdVenta,
    agregaVentas,
}