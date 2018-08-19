

export default function($rootScope, $state, AuthenticationService) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        /*
        if (toState.authenticate && !AuthenticationService.isAuthenticated()) {
            // Remember toState and toStateParams.
            $rootScope.toState = toState.name;
            $rootScope.toStateParams = toParams;
            // Abort transition
            event.preventDefault();
            // Redirect to login page
            $state.go('login');
        }
        */
        if ($rootScope.toState && $rootScope.toState !== 'login') {
            $state.go($rootScope.toState, $rootScope.toStateParams).then(function() {
                // Reset toState and toStateParams.
                $rootScope.toState = undefined;
                $rootScope.toStateParams = undefined;
            });
        } else {
            $state.go('home');
        }
        
    });
}