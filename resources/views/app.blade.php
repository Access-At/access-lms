<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="theme-color" content="#ffffff"/>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="manifest" href="/build/manifest.webmanifest">
    <script src="/build/registerSW.js"></script>
    @viteReactRefresh
    @vite('resources/frontend/main.tsx')
</head>
<body>
    <div id="root"></div>
</body>
</html>