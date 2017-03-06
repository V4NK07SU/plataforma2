@extends('oneui::layouts.landing')

@section('mainContent')
    <!-- Hero Content -->
    <div class="bg-video" data-vide-bg="themes/oneui/assets/img/videos/hero_tech" data-vide-options="posterType: jpg, position: 50% 75%">
        <div class="bg-primary-dark-op">
            <section class="content content-full content-boxed">
                <!-- Section Content -->
                <div class="text-center push-30-t visibility-hidden" data-toggle="appear" data-class="animated fadeIn">
                    <a class="fa-2x text-white" href="">
                        <i class="fa fa-circle-o-notch text-primary push-5-r"></i>neUI
                    </a>
                </div>
                <div class="push-100-t push-50 text-center">
                    <h1 class="h2 font-w700 text-white push-20 visibility-hidden" data-toggle="appear" data-class="animated fadeInDown">Build your Backend and Frontend with one super flexible framework.</h1>
                    <h2 class="h4 text-white-op visibility-hidden" data-toggle="appear" data-timeout="750" data-class="animated fadeIn"><em>Trusted by thousands of web developers and web agencies all over the world.</em></h2>
                    <div class="push-50-t push-20 text-center">
                        <a class="btn btn-rounded btn-noborder btn-lg btn-success push-10-r push-5 visibility-hidden" data-toggle="appear" data-class="animated fadeInLeft" href="http://goo.gl/6LF10W">
                            <i class="fa fa-shopping-cart push-10-r"></i>Purchase
                        </a>
                        <a class="btn btn-rounded btn-noborder btn-lg btn-primary push-5 visibility-hidden" data-toggle="appear" data-class="animated fadeInRight" href="base_pages_dashboard.html">Live Preview</a>
                    </div>
                </div>
                <!-- END Section Content -->
            </section>
        </div>
    </div>


    <!-- Side Feature -->
    <div class="bg-white">
        <section class="content content-boxed overflow-hidden">
            <!-- Section Content -->
            <div class="row items-push-2x push-30-t nice-copy">
                <div class="col-lg-5">
                    <div class="push-50 visibility-hidden" data-toggle="appear" data-class="animated fadeInLeft">
                        <h3 class="h5 font-w600 text-uppercase push-5"><i class="fa fa-check text-flat push-5-r"></i> Layout</h3>
                        <h4 class="h3 font-w300 push-10">Powerful and Flexible</h4>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                    </div>
                    <div class="visibility-hidden" data-toggle="appear" data-timeout="300" data-class="animated fadeInLeft">
                        <h3 class="h5 font-w600 text-uppercase push-5"><i class="fa fa-tablet text-amethyst push-5-r"></i> Responsive</h3>
                        <h4 class="h3 font-w300 push-10">Super Fast GPU Enabled Animations</h4>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                    </div>
                </div>
                <div class="col-lg-5 col-lg-offset-2 visible-lg">
                    <img class="img-responsive visibility-hidden" data-toggle="appear" data-offset="-250" data-class="animated fadeInRight" src="themes/oneui/assets/img/various/promo3.jpg" alt="">
                </div>
            </div>
            <!-- END Section Content -->
        </section>
    </div>
    <!-- END Side Feature -->

    <!-- Contact Us -->
    <div class="bg-gray-lighter">
        <section class="content content-full content-boxed">
            <!-- Section Content -->
            <div class="push-20-t push-20 text-center">
                <h3 class="h4 push-20 visibility-hidden" data-toggle="appear">Can't find what you were looking for?</h3>
                <a class="btn btn-rounded btn-noborder btn-lg btn-success visibility-hidden" data-toggle="appear" data-class="animated bounceIn" href="frontend_contact.html">Contact Us</a>
            </div>
            <!-- END Section Content -->
        </section>
    </div>
    <!-- END Contact Us -->

@endsection