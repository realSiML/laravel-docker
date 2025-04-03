<!DOCTYPE html>
<html>
    <head>
        @livewireStyles
        @vite(["resources/css/app.css"])
    </head>
    <body>
        <livewire:counter />

        @livewireScripts
        @vite(["resources/js/app.js"])
    </body>
</html>
