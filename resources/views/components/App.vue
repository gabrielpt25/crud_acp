<template>
    <main>
        <nav class="navbar navbar-light bg-light ">
            <a class="navbar-brand">Desafio ACP</a>
            <form class="form-inline">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">&#128269;</button>
            </form>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>
    </main>
</template>
 
<script>
    export default {}
</script>