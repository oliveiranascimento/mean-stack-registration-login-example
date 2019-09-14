(function () {
    'use strict';

    angular
        .module('app')
        .controller('Questions.IndexController', Controller);

    function Controller($window, UserService, FlashService, QuestionService) {
        var vm = this;

        vm.user = null;
        vm.question = null;
        vm.saveQuestion = saveQuestion;
        vm.questionsList= [];

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function saveQuestion() {
            let perguntaQueIraSerSalva = 
            {
                question: vm.question
            };

            QuestionService.Create(perguntaQueIraSerSalva)
                .then(function () {
                    FlashService.Success('Question Saved');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                })
            };

            function GetAll() {
                QuestionService.Create(perguntaQueIraSerSalva)
                    .then(function () {
                        FlashService.Success('Question Saved');
                    })
                    .catch(function (error) {
                        FlashService.Error(error);
                    })
                };
    }

})();