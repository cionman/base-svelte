<svelte:head>
    <link rel="stylesheet" href="./main.css" />
    <style>
        body {
            background-color: orange;
        }
    </style>
</svelte:head>

<svelte:body on:mousemove={e => console.log(e.clientX, e.clientY)} />

<h1>Heropy!</h1>
