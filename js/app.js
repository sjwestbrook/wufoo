var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATE ========================================
        .state('home', {
            url: '/home',
            templateUrl: './partials/home.html'
        })
             
       .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })    
    
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.html'
        })
                        
       .state('blog', {
            url: '/blog',
            templateUrl: './partials/blog.html'
        })
    
        .state('examples', {
            url: '/examples',
            templateUrl: 'partials/examples.html'
        })
    
      .state('faq', {
            url: '/faq',
            templateUrl: 'partials/faq.html'
        })
    
        .state('features', {
            url: '/features',
            templateUrl: 'partials/features.html'
        })
    
        .state('guides', {
            url: '/guides',
            templateUrl: 'partials/guides.html'
        })
    
        .state('help-center', {
            url: '/help-center',
            templateUrl: 'partials/help-center.html'
        })     
    
        .state('partners', {
            url: '/partners',
            templateUrl: 'partials/partners.html'
        })
       
       .state('pricing', {
            url: '/pricing',
            templateUrl: 'partials/pricing.html'
        })
    
        .state('templates', {
            url: '/templates',
            templateUrl: 'partials/templates.html'
        })
    
       .state('web-forms', {
            url: '/web-forms',
            templateUrl: 'partials/web-forms.html'
        });
    
});

