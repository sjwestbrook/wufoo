var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATE ========================================
        .state('home', {
            url: 'js/partials/home',
            templateUrl: 'partials/home.html'
        })
             
       .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })    
    
        .state('404', {
            url: '/404',
            templateUrl: './404.html'
        })
                        
       .state('blog', {
            url: '/blog',
            templateUrl: '/partials/blog.html'
        })
    
        .state('examples', {
            url: '/examples',
            templateUrl: './examples.html'
        })
    
      .state('faq', {
            url: '/faq',
            templateUrl: './faq.html'
        })
    
        .state('features', {
            url: '/features',
            templateUrl: './features.html'
        })
    
        .state('guides', {
            url: '/guides',
            templateUrl: './guides.html'
        })
    
        .state('help-center', {
            url: '/help-center',
            templateUrl: './help-center.html'
        })     
    
        .state('partners', {
            url: '/partners',
            templateUrl: './partners.html'
        })
       
       .state('pricing', {
            url: '/pricing',
            templateUrl: './pricing.html'
        })
    
        .state('templates', {
            url: '/templates',
            templateUrl: './templates.html'
        })
    
       .state('web-forms', {
            url: '/web-forms',
            templateUrl: './web-forms.html'
        });
    
});

