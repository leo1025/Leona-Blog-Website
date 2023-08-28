<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-main">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/"><strong>La Leona</strong></NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink  class="nav-link" to="/about">About</NuxtLink >
                        </li>
                        <li class="nav-item">
                            <NuxtLink  class="nav-link" to="/projects">Projects</NuxtLink >
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/journal">Journal</NuxtLink >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>