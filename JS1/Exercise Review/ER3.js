let mesesDelA = {
    mes: "Enero",
    mes1:"Febrero",
    mes2: "Marzo",
    mes3: "Abril",
    mes4: "Mayo",
    mes5: "Junio",
    mes6: "Julio",
    mes7: "Agosto",
    mes8: "Septiembre",
    mes9: "Octubre",
    mes10: "Noviembre",
    mes11: "Diciembre",

};



// array
/** 
    mesesDelA.forEach(mes => {
        if (mes.length > 5) {
            meses2.push(mes);
        } 
    });
    
    console.log(meses2.join(", "));
    */
   
    
   function mesesCincoL(mesesDelA) { 
    var meses2 = [];

    for (const mes in mesesDelA) {
        if(mesesDelA[mes].length>5) {
         meses2.push(mesesDelA[mes]);  
         } 
        } 
        return meses2;

    }

    let newArray = mesesCincoL(mesesDelA);
    console.log(newArray.join(", "));