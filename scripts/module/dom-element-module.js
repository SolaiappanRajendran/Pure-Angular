appServices.factory('domElementService', function ($rootScope) {
    

    return {
        generateDrag: function(params){
            var parent = $('#' + params.status),
                wrapper;

            if (!parent) {
                return;
            }

            wrapper = $("<div />", {
                "class" : defaults.todoTask,
                "id" : defaults.taskId + params.id,
                "data" : params.id
            }).appendTo(parent);

            $("<div />", {
                "class" : defaults.todoHeader,
                "text": params.title
            }).appendTo(wrapper);

            $("<div />", {
                "class" : defaults.todoDate,
                "text": params.date
            }).appendTo(wrapper);

            $("<div />", {
                "class" : defaults.todoDescription,
                "text": params.description
            }).appendTo(wrapper);

            wrapper.draggable({
                start: function() {
                    $("#" + defaults.deleteDiv).show();
                },
                stop: function() {
                    $("#" + defaults.deleteDiv).hide();
                },
                revert: "invalid",
                revertDuration : 200
            });

        },

        removeElement: function (params) {
            $("#" + defaults.taskId + params.id).remove();
        }


    }
});