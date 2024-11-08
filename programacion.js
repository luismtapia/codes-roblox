
const favoritos = { cantidad: "0", juego: "Brookheaven"};
const listafavoritos = [];

const juegos = [
    "Brookheaven",
    "otro"
];

const lista = [
    {juego: "Brookheaven", codigo: "3240543366", nombre: "Hacha", descripcion: "Hacha blanca", imagen: "https://images.vexels.com/content/182000/preview/wooden-axe-colored-c66052.png"},
    {juego: "Brookheaven", codigo: "233705354", nombre: "Cuernos", descripcion: "Cuernos ...", imagen: "https://lh3.googleusercontent.com/pw/AP1GczM-Yh4xRMwN30tU7tA00CrSO0-R3WnV54FJRzH4vnpxvJQtOVtXYe_0O5m-SF8Wgglx_s_lY-YYjq3w1qvoty7lOUuYx9uPz78zPBn6z85N7Kj_Au1a=w2400"},
    {juego: "Brookheaven", codigo: "12377185136", nombre: "Cabello", descripcion: "Blanco y negro", imagen: "https://medibangpaint.com/wp-content/uploads/2021/06/1efad1b5aa917a846fa5b3fc11367269.png"},
    {juego: "Brookheaven", codigo: "9424531291", nombre: "Cuernos", descripcion: "Rojos", imagen: "https://w7.pngwing.com/pngs/278/49/png-transparent-t-shirt-sign-of-the-horns-devil-devil-red-devil-horn-child-photography-angel-thumbnail.png"},
    {juego: "Brookheaven", codigo: "11923978189", nombre: "Pistola", descripcion: "De dinero", imagen: "https://w7.pngwing.com/pngs/676/93/png-transparent-money-c-r-e-a-m-currency-firearm-monetary-system-others-miscellaneous-cream-handgun.png"},
    {juego: "Brookheaven", codigo: "6711563577", nombre: "Flor", descripcion: "Blanca", imagen: ""},
    {juego: "Brookheaven", codigo: "11585243691", nombre: "Cabello", descripcion: "Gris", imagen: ""},
    {juego: "Brookheaven", codigo: "6958247204", nombre: "Vestido", descripcion: "Rojo", imagen: ""},
    {juego: "Brookheaven", codigo: "6238607083", nombre: "Sombrero", descripcion: "Rojo", imagen: "https://w7.pngwing.com/pngs/420/748/png-transparent-cowboy-hat-headgear-red-fedora-cowboy-hat-cowboy-hat-fashion.png"},
    {juego: "Brookheaven", codigo: "8207839194", nombre: "Percing", descripcion: "...", imagen: ""},
    {juego: "Brookheaven", codigo: "6532655037", nombre: "Collar", descripcion: "de Oro", imagen: "https://e7.pngegg.com/pngimages/601/904/png-clipart-necklace-rope-chain-gold-jewellery-necklace-necklace-rope-chain.png"},
    {juego: "Brookheaven", codigo: "12896625281", nombre: "Cara", descripcion: "Emo", imagen: ""},
    {juego: "Brookheaven", codigo: "8094772102", nombre: "Pelo", descripcion: "Rubio lacio", imagen: "https://www.shutterstock.com/image-photo/portrait-beautiful-young-blonde-woman-600nw-2239665067.jpg"},
    {juego: "Brookheaven", codigo: "7791297852", nombre: "Katanas", descripcion: "Negro", imagen: ""},
    {juego: "Brookheaven", codigo: "13722664608", nombre: "Cara Emo", descripcion: "Morada", imagen: ""},

];


// const copiarContenido = async () => {
//     try {
//     await navigator.clipboard.writeText(texto);
//     console.log('Contenido copiado al clipboard');
//     } catch (err) {
//     console.error('Falló al copiar: ', err);
//     }
// }




const main = document.createElement('main');
main.className = "m-10 flex justify-center grid grid-flow-row md:grid-cols-4 gap-4";

lista.forEach(item => {
    const card = document.createElement('div');
    card.className = "relative flex w-72 flex-col items-center overflow-hidden rounded-3xl bg-blue-400 p-6";

    const card_bg = document.createElement('div');
    card_bg.className = "absolute -bottom-20 z-10 h-96 rounded-full bg-blue-500";
    card_bg.style = "width: 430px";

    const card_content = document.createElement('div');
    card_content.className = "z-10 w-full";

    // HEADER
    const header = document.createElement('div');
    header.className = "flex w-full justify-between text-sm text-blue-50";

    const titulo = document.createElement('div');
    titulo.textContent = item.juego;

    const copy = document.createElement('div');
    copy.className = "cursor-pointer tooltip tooltip-left tooltip-secondary";
    copy.setAttribute("data-tip","copiar");
    const cod = item.codigo;
    

    // SVG
    const svgNS = "http://www.w3.org/2000/svg";

    let svg_copy = document.createElementNS(svgNS, "svg");
    svg_copy.setAttribute("fill","none");
    svg_copy.setAttribute("viewBox","0 0 24 24");
    svg_copy.setAttribute("stroke-width","1.5");
    svg_copy.setAttribute("stroke","currentColor");
    svg_copy.setAttribute("width", "24"); 
    svg_copy.setAttribute("height", "24");

    let path_copy = document.createElementNS(svgNS, "path"); 
    path_copy.setAttribute("stroke-linecap","round");
    path_copy.setAttribute("stroke-linejoin","round");
    path_copy.setAttribute("d", "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184");
    

    copy.onclick = function name(params) {
        try {
            navigator.clipboard.writeText(item.codigo);
            copy.setAttribute("data-tip","copiado");
            path_copy.setAttribute("d","M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z");
            setTimeout(() => {
                copy.setAttribute("data-tip","copiar");
                path_copy.setAttribute("d", "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184");
            }, 2000);
            //copy.setAttribute("data-tip","copiar");
            //alert('Codigo copiado');
        } catch (err) {
            alert('Falló al copiar: ', err);
        }
    }

    // IMAGEN
    const div_imagen =  document.createElement('div');
    div_imagen.className = "flex w-full justify-center";
    const img_imagen =  document.createElement('img');
    img_imagen.className = "tranform my-6 w-32 duration-200 hover:scale-105";
    img_imagen.setAttribute("src", item.imagen);

    // DESCRIPCION
    const div_descripcion =  document.createElement('div');
    div_descripcion.className = "flex w-full flex-col items-center";
    const h2_descripcion = document.createElement('h2');
    h2_descripcion.className ="text-4xl font-extrabold text-white";
    h2_descripcion.textContent = item.nombre;
    const p_descripcion = document.createElement('p');
    p_descripcion.className ="text-white";
    p_descripcion.textContent = item.descripcion;

    // CODIGO
    const div_codigo =  document.createElement('div');
    div_codigo.className = "mt-10 flex w-full justify-between text-sm text-blue-50";
    const div_codigo_content =  document.createElement('div');
    div_codigo_content.className = "flex flex-col";
    const p_codigo_titulo =  document.createElement('p');
    p_codigo_titulo.className = "text-xs";
    p_codigo_titulo.textContent = "Codigo";
    const span_codigo =  document.createElement('span');
    span_codigo.className = "text-xl font-bold";
    span_codigo.textContent = item.codigo;


    


    
    // DOM
    svg_copy.appendChild(path_copy);
    copy.appendChild(svg_copy);
    header.appendChild(titulo);
    header.appendChild(copy);

    div_imagen.appendChild(img_imagen);

    div_descripcion.appendChild(h2_descripcion);
    div_descripcion.appendChild(p_descripcion);

    div_codigo_content.appendChild(p_codigo_titulo);
    div_codigo_content.appendChild(span_codigo);
    div_codigo.appendChild(div_codigo_content);

    card_content.appendChild(header);
    card_content.appendChild(div_imagen);
    card_content.appendChild(div_descripcion);
    card_content.appendChild(div_codigo);

    
    card.appendChild(card_bg);
    card.appendChild(card_content);
    main.appendChild(card);
});

document.body.appendChild(main);
