<script>
    export let count = 0;
    export let text;
</script>

<button on:click>{text} {count ? count : '' }</button>
 