<!DOCTYPE html>
<html lang="es" ng-app="app" ng-strict-di>
<head>
    <title>Material Starter</title>

    <!-- <base href="/"/> -->

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>

    <meta name="theme-color" content="#2e7d32">
    <link rel="stylesheet" href="{{ Theme::asset('angular-material::css/vendor.css') }}">
    <link rel="stylesheet" href="{{ Theme::asset('angular-material::css/app.css') }}">

    <style>
        h1, h2, h3, h4, h5, h6, p, span {
            font-family: "Open Sans", Helvetica;
            color: rgb(90, 90, 90);
        }

        h1, h2, h3, h4, h5, h6 {
            margin-bottom: 1rem;
            margin-top: 1rem;
        }

        .padding-inner {
            padding: 30px 5%;
        }

        /* Overwrite Defaults */
        md-toolbar.toolbar h1, md-toolbar.md-toolbar-tools h3, md-tabs md-tabs-wrapper md-tab-item span, md-tabs md-tabs-wrapper md-icon, .md-primary span {
            color: white;
        }

        .md-icon-button {
            font-size: 20px;
        }

        md-tabs md-tabs-wrapper {
            background: #2196F3;
        }

        .md-button {
            padding: 0 12px;
        }
    </style>
</head>

<body layout="row">



    <app-root></app-root>

</div>
<script src="{{ Theme::asset('angular-material::js/vendor.js') }}"></script>
<script src="{{ Theme::asset('angular-material::js/app.js') }}"></script>

</body>
</html>