<!DOCTYPE html>
<html class="no-js" lang="{{config('app.locale', 'es')}}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Umbrella Corhuila</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,500,300,300italic,500italic|Roboto+Condensed:400,300"
          rel="stylesheet">
    <link href="{{ config('app.url') }}/themes/umbrella-landing/assets/bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css"
          rel="stylesheet">
    <link rel="stylesheet" href="{{ config('app.url') }}/themes/umbrella-landing/assets/styles/bootstrap.css">
    <link rel="stylesheet" href="{{ config('app.url') }}/themes/umbrella-landing/assets/styles/main.css">
    <script src="{{ config('app.url') }}/themes/umbrella-landing/assets/scripts/modernizr.js"></script>
</head>

<body data-spy="scroll" data-target=".header" data-offset="80">
<style>

.nav-container .nav .nav-title {
    margin: 15px 15px 10px;
    font-weight: normal;
    font-size: 20px;
}
</style>
<!--if lt IE 9<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
-->
<div id="ip-container" class="ip-container">
    <header class="ip-header">
        <div class="ip-loader">
            <svg width="60px" height="60px" viewBox="0 0 80 80" class="ip-inner">
                <path d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
                      class="ip-loader-circlebg"></path>
                <path id="ip-loader-circle"
                      d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z"
                      class="ip-loader-circle"></path>
            </svg>
        </div>
    </header>
    <div class="ip-main">
        <!-- Mobile nav -->
        <div id="cbp-spmenu" class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right">
            <div class="mobile_nav_close_button"><a id="hideRight" href=""><span
                            class="close_icon zmdi zmdi-arrow-right"></span></a></div>
            <nav id="mobile_menu_content" class="navbar-nav-mobile">
                <a href="#hero">Inicio</a>
                <a href="#features">Proyectos</a>
                <!--
                <a href="#faq">FAQ</a>
                <a href="#newsletter">Newsletter</a>
                -->
                <a href="#contact">Contacto</a></nav>
        </div>
        <header id="header" class="header navbar navbar-light animated">
            <div class="container">
                <a href="#" class="navbar-brand"> <span class="logo"><img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/logo-ch-mini.png"></span><span class="brand-txt">Umbrella CORHUILA</span></a>
                <div class="navbar">
                    <ul class="nav navbar-nav pull-right">
                        <li class="nav-item"><a href="#hero">Inicio</a></li>
                        <li class="nav-item"><a href="#features">Proyectos</a></li>
                        <!--
                        <li class="nav-item"><a href="#faq">FAQ </a></li>

                        <li class="nav-item"><a href="#newsletter">Newsletter</a></li>
                        -->
                        <li class="nav-item"><a href="#contact">Contacto</a></li>
                        <li class="nav-item"><a href="backend/#/page/signin" class="">Ingresar</a></li>
                    </ul>
                    <div class="pull-right togger-container"><span id="showRight"
                                                                   class="zmdi zmdi-menu navbar-toggler"></span></div>
                </div>
            </div>
        </header>
        <div class="main-content">
            @yield('mainContent')
        </div>
        <footer class="footer text-center">
            <img src="{{ config('app.url') }}/themes/umbrella-landing/assets/images/logo-corhuila.png"><br>
            <span>© Copyright <span id="copyright"></span> Corporación Universitaria del Huila</span>
            <br>
            <span>CORHUILA</span>
        </footer>
    </div>
</div>
<!-- Scripts-->
<script src="{{ config('app.url') }}/themes/umbrella-landing/assets/scripts/app.js"></script>
</body>

</html>