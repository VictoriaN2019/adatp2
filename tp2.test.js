const {
    precioMaquina,
    cantidadVentasComponente,
    componenteMasVendido, 
    ventaPromedio,
    ventasVendedora,
    ventasSucursal,
    mejorVendedora,
    obtenerIdVenta,
    agregaVentas,
    ventas,
} = require('./tp2');
    
/* FUNCIÓN 1*/

test ('Debe sumar precio de componentes', () => {
    expect(precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500", "HDD Toyiva", "RAM Quinston"])).toBe(520)
})

/* FUNCIÓN 2 */

test ('Debe devolver cantidad de veces que se vendió el componente', () => {
    expect(cantidadVentasComponente("Monitor ASC 543")).toBe(3)
})

/* FUNCIÓN 3 Test del total de cada vendedora */

test ('buscar una vendedora y tener el total de sus ventas', () => {
    expect(ventasVendedora("Grace")).toBe(990)
});

test ("buscar una vendedora y tener el total de sus ventas", () => {
    expect(ventasVendedora("Ada")).toBe(670)
});

test ("buscar una vendedora y tener el total de sus ventas", () => {
    expect(ventasVendedora("Hedy")).toBe(460)
});

test ("buscar una vendedora que no tiene ventas realizadas", () => {
    expect(ventasVendedora("Sheryl")).toBe(0)                  
});

/* FUNCIÓN 4 */

test ('Debe devolver componente más vendido', () => {
    expect(componenteMasVendido()).toMatch("El componente mas vendido fue: Monitor GPRS 3000")
});

/* FUNCIÓN 5 Test del total de cada sucursal*/

test ("buscar una sucursal y retornar el total de las ventas", () => {
    expect(ventasSucursal("Centro")).toBe(990)
});

test ("buscar una sucursal y retornar el total de las ventas", () => {
    expect(ventasSucursal("Caballito")).toBe(1130)
});

/* FUNCIÓN 6 Test que devuelve mi mejor vendedora*/

test ("devolver el nombre de la mejor vendedora",() => {
    expect(mejorVendedora()).toBe("Grace");
});

/* FUNCIÓN 7 */

test('Devolver promedio de ventas' ,()=>{//7
    expect(ventaPromedio()).toBe(353)
});

/* FUNCIÓN 8 */

test ('cargar datos',()=>{ //8
    expect(typeof obtenerIdVenta()).toBe('number') 
});

/* FUNCIÓN 9 */

test('Agregar array dentro de array',()=>{ //9
    expect(agregaVentas( 23, 4, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'])).toStrictEqual(ventas[6])
});