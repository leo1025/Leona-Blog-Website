<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">La Leona</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink  class="nav-link" to="/">About</NuxtLink >
                    </li>
                    <li class="nav-item">
                        <NuxtLink  class="nav-link" to="/blog">Blog</NuxtLink >
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/work">Work</NuxtLink >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>