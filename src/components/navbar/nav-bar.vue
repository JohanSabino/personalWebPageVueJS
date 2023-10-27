<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent fs-2 text">
    <div class="container">
      <a class="navbar-brand text-light fs-1" href="#">Johan Sabino</a>
      <button class="bg-transparent navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
/* Estilos específicos para dispositivos móviles */
@media (max-width: 991px) {
  .navbar-nav {
    margin-top: 15px;
    text-align: center;
  }

  .navbar-toggler {
    order: 0;
    color: rgba(0, 0, 0, 0.1);
   
  }
  span .navbar-toggler-icon{
    color: rgba(0, 0, 0, 0.1);
  }

  .navbar-nav .nav-item {
    margin: 0;
    
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


