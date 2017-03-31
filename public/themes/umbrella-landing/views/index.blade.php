@extends('umbrella-landing::layouts.app')

@section('mainContent')
    <div id="hero" class="hero">
        <div class="hero-inner">
            <div class="container">
                <div class="col-lg-6 col-lg-offset-3">
                    <h2>Unidad de desarrollo Umbrella</h2>
                    <p>Programando el futuro.</p>
                    <!--
                    <a
                            href="#features"
                            class="btn btn-primary btn-cta btn-lg btn-raised ui-wave">Proyectos en Desarrollo</a>
                            -->
                    <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/logo-corporacion-universitaria-del-huila.png">
                </div>
            </div>
        </div>
    </div>
    <div id="features" class="features">
        <header>
            <h2 class="section-heading-underline">Proyectos en desarrollo</h2>
        </header>
        <div class="container">
            <div class="row">
                <div class="feature-item col-md-3 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-accounts-list"></span></div>
                    <h3>Bienestar</h3>
                    <div class="desc">
                        <p>Software para el control, seguimiento y prevención de la deserción estudiantil en CORHUILA</p>
                    </div>
                </div>
                <div data-wow-delay="0.3s" class="feature-item col-md-3 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-pin-account"></span></div>
                    <h3>Talento Humano</h3>
                    <div class="desc">
                        <p>Software para la aplicación y monitoreo de la evaluación de desempeño de administrativos de CORHUILA</p>
                    </div>
                </div>
                <div data-wow-delay="0.6s" class="feature-item col-md-3 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-hospital"></span></div>
                    <h3>Clinica Veterinaria</h3>
                    <div class="desc">
                        <p>Software  para el control y seguimiento de pacientes e inventarios para la clinica veterinaria CORHUILA</p>
                    </div>
                </div>
                <div data-wow-delay="0.9s" class="feature-item col-md-3 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-graduation-cap"></span></div>
                    <h3>Educación continuada</h3>
                    <div class="desc">
                        <p>Software como herramienta de apoyo para el control y seguimiento de egresados en la  Corporación Universitaria del Huila CORHUILA</p>
                    </div>
                </div>
            </div>
            <!--
            <div class="row">
                <div class="feature-item col-md-4 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-graduation-cap"></span></div>
                    <h3>Educación continuada</h3>
                    <div class="desc">
                        <p>Software como herramienta de apoyo para el control y seguimiento de egresados en la  Corporación Universitaria del Huila CORHUILA</p>
                    </div>
                </div>
                <div data-wow-delay="0.3s" class="feature-item col-md-4 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-edit"></span></div>
                    <h3>Clean code</h3>
                    <div class="desc">
                        <p>simple and clean JavaScript code</p>
                    </div>
                </div>
                <div data-wow-delay="0.6s" class="feature-item col-md-4 text-center wow fadeInUp">
                    <div class="icon-container"><span class="zmdi zmdi-pin"></span></div>
                    <h3>Internationalization</h3>
                    <div class="desc">
                        <p>internationalization and localization</p>
                    </div>
                </div>
            </div>
            -->
        </div>
    </div>
    <!--
    <div id="faq" class="faq">
        <div class="container">
            <header>
                <h2 class="section-heading-underline">FAQs</h2>
            </header>
            <ul class="faq-list">
                <li class="wow fadeInLeft">
                    <h4 class="faq-q">What browsers does Angular work with?</h4>
                    <p class="faq-a">We run our extensive test suite against the following browsers: Safari,
                        Chrome, Firefox, Opera 15, IE9 and mobile browsers (Android, Chrome Mobile, iOS
                        Safari).</p>
                </li>
                <li class="wow fadeInRight">
                    <h4 class="faq-q">Does Angular use the jQuery library?</h4>
                    <p class="faq-a">Yes, Angular can use jQuery if it's present in your app when the
                        application is being bootstrapped. If jQuery is not present in your script path, Angular
                        falls back to its own implementation of the subset of jQuery that
                        we call jQLite.</p>
                </li>
                <li data-wow-delay="0.15s" class="wow fadeInLeft">
                    <h4 class="faq-q">What is testability like in Angular?</h4>
                    <p class="faq-a">Very testable and designed this way from ground up. It has an integrated
                        dependency injection framework, provides mocks for many heavy dependencies (server-side
                        communication). See ngMock for details.</p>
                </li>
                <li data-wow-delay="0.15s" class="wow fadeInRight">
                    <h4 class="faq-q">Can I use the Angular logo artwork?</h4>
                    <p class="faq-a">Yes! You can find design files in our github repository, under
                        "angular.js/images/logo" The logo design is licensed under a "Creative Commons
                        Attribution-ShareAlike 3.0 Unported License".</p>
                </li>
                <li data-wow-delay="0.3s" class="wow fadeInLeft">
                    <h4 class="faq-q">Why is the namespace called "ng"?</h4>
                    <p class="faq-a">Because HTML has Angular brackets and "ng" sounds like "Angular". AngularJS
                        is 100% JavaScript, 100% client-side and compatible with both desktop and mobile
                        browsers. </p>
                </li>
                <li data-wow-delay="0.3s" class="wow fadeInRight">
                    <h4 class="faq-q">Is AngularJS a library, framework, plugin or a browser extension?</h4>
                    <p class="faq-a">AngularJS fits the definition of a framework the best, even though it's
                        much more lightweight than a typical framework and that's why many confuse it with a
                        library.</p>
                </li>
            </ul>
        </div>
    </div>
    -->
    <div id="newsletter" data-stellar-background-ratio="0.6" class="newsletter">

        <div class="row" style="padding-top: 20px;">
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/laravel-logo.png" alt="">
                <h3>Laravel Framework</h3>
            </div>
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/angularjs-logo.png" alt="">
                <h3>Angular Framework</h3>
            </div>
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/material-design-logo.png" alt="">
                <h3>Material Design Patterns</h3>
            </div>
        </div>
        <div class="row" style="padding-top: 20px;">
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/logo-gitlab.png" alt="">
                <h3>Git Lab</h3>
            </div>
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/php-logo.png" alt="">
                <h3>PHP</h3>
            </div>
            <div class="col-md-4 text-center">
                <img src="{{config('app.url')}}/themes/umbrella-landing/assets/images/oracle-log.png" alt="">
                <h3>Oracle Database</h3>
            </div>
        </div>
        <!--
        <form>
            <fieldset>
                <div class="form-group">
                    <div class="ui-input-group">
                        <input id="name_2" type="text" required class="form-control"><span
                                class="input-bar"></span>
                        <label>Email</label>
                    </div>
                </div>
                <a href="javascript:;" type="submit" data-wow-delay="0.15s"
                   class="btn btn-primary btn-lg btn-raised ui-wave wow fadeInUp">Subscribe</a>
            </fieldset>
        </form>
        -->
    </div>
    <div id="contact" class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <h3 class="section-heading-underline">Información de Contacto</h3>
                    <div class="contact-info-container wow fadeInLeft">
                        <p class="lead"> Contactenos si tiene dusas sugerencias o inquietudes.</p>
                        <ul class="list-unstyled contact-info">
                            <li><span class="zmdi zmdi-pin"></span>San Mateo, CA, 94403</li>
                            <li><span class="zmdi zmdi-phone"></span>(012) 345 6789</li>
                            <li><span class="zmdi zmdi-email"></span>mail@domain.com</li>
                            <li><span class="zmdi zmdi-city-alt"></span>www.site.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5 col-md-offset-2">
                    <h3 class="section-heading-underline">Escribanos</h3>
                    <form novalidate class="form-horizontal wow fadeInRight">
                        <fieldset>
                            <div class="form-group">
                                <div class="ui-input-group">
                                    <input type="text" required class="form-control"><span
                                            class="input-bar"></span>
                                    <label>Email</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="ui-input-group">
                                    <input type="text" required class="form-control"><span
                                            class="input-bar"></span>
                                    <label>Teléfono</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="ui-input-group">
                                            <textarea type="text" required rows="5"
                                                      class="form-control"></textarea><span class="input-bar"></span>
                                    <label>Mensaje </label>
                                </div>
                            </div>
                            <div class="divider"></div>
                            <div class="form-group">
                                <button class="btn btn-raised btn-primary btn-w-sm ui-wave">ENVIAR</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--
    <div class="action-call text-center">
        <span>Build with your favorite Bootstrap, get up and running in minutes</span><a
                href="http://themeforest.net/item/material-design-admin-with-angularjs/13582227?ref=arousing"
                target="_blank" class="btn btn-default btn-cta btn-lg btn-raised ui-wave">Download Material<span
                    class="zmdi zmdi-chevron-right"></span></a></div>
                    -->
@endsection