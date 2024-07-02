//ALQUILER

const departamentosAlquiler=[
    {
        src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento en la playa',
        descripcion: 'Hermoso apartamento frente al mar, perfecto para amantes de la playa.',
        direccion: '321 Beachfront Ave, Seaside, FL 32459',
        habitaciones: '2',
        banos: '1',
        precio: '3000',
        fumar: false,
        mascota: true
      },
      {
        src: 'https://images.pexels.com/photos/276742/pexels-photo-276742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento en zona residencial',
        descripcion: 'Cómodo apartamento en una tranquila zona residencial, ideal para familias.',
        direccion: '987 Elm St, Residential Area, OH 44107',
        habitaciones: '3',
        banos: '2',
        precio: '2200',
        fumar: false,
        mascota: true
      },
      {
        src: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento céntrico',
        descripcion: 'Apartamento céntrico con fácil acceso a tiendas y transporte público.',
        direccion: '654 Main St, Downtown, NY 10001',
        habitaciones: '1',
        banos: '1',
        precio: '2700',
        fumar: true,
        mascota: false
      },
      {
        src: 'https://images.pexels.com/photos/276667/pexels-photo-276667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        nombre: 'Apartamento moderno con balcón',
        descripcion: 'Apartamento moderno con balcón y vistas a la ciudad.',
        direccion: '123 Green Ave, EcoCity, CO 80203',
        habitaciones: '2',
        banos: '2',
        precio: '3200',
        fumar: false,
        mascota: true
      }
    ];


let html2=" ";
let d2=document.querySelector("#deptosAlquiler")

for (let deptoAlquiler of departamentosAlquiler){        
    const fumarTexto= deptoAlquiler.fumar ? 'permitido fumar' : 'No se permite fumar';
    const fumarColor= deptoAlquiler.fumar ? 'text-success' : 'text-danger';
    const mascotaTexto= deptoAlquiler.mascota ? 'permitido mascotas' : 'no se permite mascotas';
    const mascotaColor= deptoAlquiler.mascota ? 'text-success' : 'text-danger';
    const fumarIcono= deptoAlquiler.fumar ? 'fas fa-smoking' : 'fas fa-smoking-ban';
    const mascotaIcono= deptoAlquiler.mascota ? 'fas fa-paw' : 'fa-solid fa-ban';
    html2 += `
    <div class="col-md-4 mb-4">
    <div class="card"> 
              <img
                src="${deptoAlquiler.src}"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${deptoAlquiler.nombre}
                </h5>
                <p class="card-text">
                ${deptoAlquiler.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${deptoAlquiler.direccion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${deptoAlquiler.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${deptoAlquiler.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${deptoAlquiler.precio}</p>

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
d2.innerHTML=html2 //manipular solo una vez el DOM