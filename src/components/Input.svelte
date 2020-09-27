<script>
    export let name = "World";
</script>

<div class="Input">
    <input type="text" bind:value={name}>
    <p>Hello {name}!</p>

    <!-- asignación de la variable se puede omitir en bind si está 
    tiene el mismo nombre de la propiedad a binding
    cambiar name por value en script (export let value = "World")
        <input type="text" bind:value>
        <p>Hello {value}!</p>
    -->
</div>
