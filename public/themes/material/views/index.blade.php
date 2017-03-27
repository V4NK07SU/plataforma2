@extends('material::layouts.app')

@section('mainContent')
    <section data-ui-view class="view-container @{{main.pageTransition.class}}"></section>
@endsection