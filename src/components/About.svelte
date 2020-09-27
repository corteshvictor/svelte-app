<script>
    let someText = `Frontend Developer`;
    let count = 0;
    let styles = { darkMode: false }

    const handleClick = () => count += 1;
    const toggle = () => {
        styles.darkMode = !styles.darkMode
        window.document.body.classList.toggle("dark-mode")
    }
</script>

<style>
    p {
        color: var(--theme-color);
        font-size:22px;
    }
</style>

<section class="About">
    {#if styles.darkMode}
        <p><span>Hello DarkMode!</span></p>
    {:else}
        <p>{someText}</p>
    {/if}

    <button on:click={handleClick}>Click {count == 0 ? '' : count}</button>
    <button on:click={toggle}>DarkMode {styles.darkMode ? "🌚" : "🌝"}</button>
</section>
