<template>
    <!-- <h2>Slots Component</h2> -->
    <!-- <slot></slot> -->
     
    <div class="layout">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot name="main"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>

</template>

<script>
export default {
    name: "SlotsComponent",
}
</script>

<style>

.layout {
    color: blue;
    border: 1px solid;
    width: 200px;
    margin: 5px;
    
}

</style>