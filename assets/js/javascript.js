

//venta 
const departamentosVenta=[
    {
        src: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento moderno en el centro',
        descripcion: 'Moderno apartamento con vistas a la ciudad, ideal para profesionales.',
        direccion: '456 Central Ave, Downtown, NY 10001',
        habitaciones: '3',
        banos: '2',
        precio: '3500',
        fumar: false,
        mascota: true
      },
      {
        src: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento familiar en suburbios',
        descripcion: 'Espacioso apartamento perfecto para familias, cerca de parques y escuelas.',
        direccion: '789 Maple Street, Suburbia, TX 75001',
        habitaciones: '4',
        banos: '3',
        precio: '2800',
        fumar: true,
        mascota: false
      },
      {
        src: 'https://images.pexels.com/photos/2029666/pexels-photo-2029666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento junto a la playa',
        descripcion: 'Disfruta de la brisa marina en este hermoso apartamento frente al mar.',
        direccion: '123 Ocean Drive, Beachside, FL 33139',
        habitaciones: '2',
        banos: '2',
        precio: '4000',
        fumar: false,
        mascota: true
      },
      {
        src: 'https://images.pexels.com/photos/8031881/pexels-photo-8031881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento en el campo',
        descripcion: 'Tranquilo apartamento en el campo, perfecto para escapadas de la ciudad.',
        direccion: '456 Country Lane, Ruralville, KY 40004',
        habitaciones: '3',
        banos: '2',
        precio: '1500',
        fumar: true,
        mascota: true
      }
    ];


let html=" ";
let d=document.querySelector("#deptosVenta")

for (let deptoVenta of departamentosVenta){        
    const fumarTexto= deptoVenta.fumar ? 'permitido fumar' : 'No se permite fumar';
    const fumarColor= deptoVenta.fumar ? 'text-success' : 'text-danger';
    const mascotaTexto= deptoVenta.mascota ? 'permitido mascotas' : 'no se permite mascotas';
    const mascotaColor= deptoVenta.mascota ? 'text-success' : 'text-danger';
    const fumarIcono= deptoVenta.fumar ? 'fas fa-smoking' : 'fas fa-smoking-ban';
    const mascotaIcono= deptoVenta.mascota ? 'fas fa-paw' : 'fa-solid fa-ban';
    html+= `
    <div class="col-md-4 mb-4">
    <div class="card"> 
              <img
                src="${deptoVenta.src}"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${deptoVenta.nombre}
                </h5>
                <p class="card-text">
                ${deptoVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${deptoVenta.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${deptoVenta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${deptoVenta.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${deptoVenta.precio}</p>

                <p class="${fumarColor}">
                  <i class="${fumarIcono}"></i> ${fumarTexto}
                </p>
                <p class="${mascotaColor}">
                  <i class="${mascotaIcono}"></i> ${mascotaTexto}
                </p>
              </div>
            </div>
        </div>
    `
}
d.innerHTML=html //manipular solo una vez el DOM


