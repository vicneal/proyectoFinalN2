export const fechas = (fecha)=>{
    let fecha1 = new Date(fecha);
    let mes = { month: "long" };
    let nombreMes = fecha1.toLocaleString("es-ES", mes);
  
    let dia = fecha1.getDate();
    let day = { weekday: "long", locale: "en-US" };
    let nombreDia = fecha1.toLocaleDateString("en-US", day);
   
    return {nombreMes, dia, nombreDia}
}