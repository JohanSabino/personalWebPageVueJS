<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent fs-2 text">
    <div class="container">
      <a class="navbar-brand text-light fs-1" href="#">Johan Sabino</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#Skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#Soft_Skills">Soft Skills</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Izzi tours(VueJS)</a></li>
              <li><a class="dropdown-item" href="#">PHP Laravel</a></li>
              <li><a class="dropdown-item" href="#">Pokedex Vue</a></li>
              <li><a class="dropdown-item" href="#">Golang Page</a></li>
              <li><a class="dropdown-item" href="#">Movie's list - VanillaJS</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>


.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 255, 255, 0.3)' height='1em' width='1em' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zM1.75 6h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 9.75z'/></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  width: 1.5em; /* Ajusta el ancho del ícono según sea necesario */
  height: 1.5em; /* Ajusta la altura del ícono según sea necesario */
  vertical-align: middle; /* Centra verticalmente el ícono en el botón */
}
/* Estilos específicos para dispositivos móviles */
@media (max-width: 991px) {
  .navbar-nav {
    margin-top: 15px;
    text-align: center;
  }

button{
  border-color: rgba(255, 255, 255, 0.3);
}

  .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgba(255, 255, 255, 0.3)' height='1em' width='1em' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75zM1.75 6h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5zM1 9.75A.75.75 0 0 1 1.75 9h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 9.75z'/></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  width: 1.5em; /* Ajusta el ancho del ícono según sea necesario */
  height: 1.5em; /* Ajusta la altura del ícono según sea necesario */
  vertical-align: middle; /* Centra verticalmente el ícono en el botón */
}



}

/* Estilos específicos para dispositivos de escritorio */
@media (min-width: 992px) {
  .navbar-nav .nav-item {
    margin-right: 30px;
  }

  .navbar-nav .nav-item:last-child {
    margin-right: 0;
  }

  .navbar-nav .nav-item:hover {
    transform: scale(1.1);
  }
}
</style>


