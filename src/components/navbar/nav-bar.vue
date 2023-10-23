<template>
<nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">Johan Sabino</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ">
          <li class="nav-item ">
            <a class="nav-link active text-dark" aria-current="page" href="#Skills">Skills</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link text-dark" href="#Soft_Skills">Soft Skills</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

.navbar navbar-expand-lg bg-body-tertiary {
  background-color: #ffff;
}

</style>

