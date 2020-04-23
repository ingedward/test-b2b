
!function($) {
    "use strict";

    var CalendarApp = function() {
        this.$body = $("body")
        this.$calendar = $('#calendar'),
        this.$event = ('#calendar-events div.calendar-events'),
        this.$categoryForm = $('#add-new-event form'),
        this.$extEvents = $('#calendar-events'),
        this.$modal = $('#my-event'),
        this.$saveCategoryBtn = $('.save-category'),
        this.$calendarObj = null
    };

    /* on drop */
    CalendarApp.prototype.onDrop = function (eventObj, date) { 
        var $this = this;
            // retrieve the dropped element's stored Event Object
            var originalEventObject = eventObj.data('eventObject');
            var $categoryClass = eventObj.attr('data-class');
            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);
            // assign it the date that was reported
            copiedEventObject.start = date;
            if ($categoryClass)
                copiedEventObject['className'] = [$categoryClass];
            // render the event on the calendar
            $this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                eventObj.remove();
            }
    },
    /* on click on event */
    CalendarApp.prototype.onEventClick =  function (calEvent, jsEvent, view) {
        var $this = this;
            var form = $("<form></form>");
            form.append("<label>Evento</label>");
            form.append("<div class='input-group'><input class='form-control' type=text value='" + calEvent.title + "' required='' /><span class='input-group-btn'><button type='submit' class='btn btn-success waves-effect waves-light'>Actualizar</button></span></div>");
            $this.$modal.modal({
                backdrop: 'static'
            });
            $this.$modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
                $this.$calendarObj.fullCalendar('removeEvents', function (ev) {
                    return (ev._id == calEvent._id);
                });
                $.ajax({
                    url  : window.location.origin + window.location.pathname + '/delete-item-calendar',
                    data : { id : calEvent._id },
                    type : 'POST',
                    success: function(response){

                    },
                    complete: function(response){

                    },
                    error: function(){
                        alertify.error('Ha ocurrido un error al conectar con el servidor...');
                    }
                });
                $this.$modal.modal('hide');
            });
            $this.$modal.find('form').on('submit', function () {
                calEvent.title = form.find("input[type=text]").val();
                $this.$calendarObj.fullCalendar('updateEvent', calEvent);
                $this.$modal.modal('hide');
                $.ajax({
                    url  : window.location.origin + window.location.pathname + '/edit-title-calendar',
                    data : { id : calEvent._id, title : calEvent.title },
                    type : 'POST',
                    success: function(response){

                    },
                    complete: function(response){

                    },
                    error: function(){
                        alertify.error('Ha ocurrido un error al conectar con el servidor...');
                    }
                });
                return false;
            });
    },
    /* on select */
    CalendarApp.prototype.onSelect = function (start, end, allDay) {
        var $this = this;
            $this.$modal.modal({
                backdrop: 'static'
            });
            var form = $("<form></form>");
            form.append("<div class='row'></div>");
            form.find(".row")
                .append("<div class='col-md-6'><div class='form-group'><label class='control-label'>Actividad</label><input class='form-control' type='text' name='title' required='' /></div></div>")
                .append("<div class='col-md-6'><div class='form-group'><label class='control-label'>Identificador</label><select class='form-control' name='category' required=''></select></div></div>")
                .find("select[name='category']")
                .append("<option value='bg-success'>Verde</option>")
                .append("<option value='bg-danger'>Rojo</option>")
                .append("<option value='bg-info'>Azul claro</option>")
                .append("<option value='bg-primary'>Azul oscuro</option>")
                .append("<option value='bg-warning'>Naranja</option>")
                .append("<option value='bg-inverse'>Negro</option>")
                .append("</div></div>");
            $this.$modal.find('.delete-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
                form.submit();
            });
            $this.$modal.find('form').on('submit', function () {
                var title = form.find("input[name='title']").val();
                var beginning = form.find("input[name='beginning']").val();
                var ending = form.find("input[name='ending']").val();
                var categoryClass = form.find("select[name='category'] option:checked").val();
                var date_start = start.format() + ' 08:00:00';
                var date_end   = start.format() + ' 09:00:00';
                if (title !== null && title.length != 0) {
                    $this.$calendarObj.fullCalendar('renderEvent', {
                        title: title,
                        start: date_start,
                        end: date_end,
                        allDay: false,
                        className: categoryClass
                    }, true); 
                    $this.$modal.modal('hide');
                    $.ajax({
                        url  : window.location.origin + window.location.pathname + '/add-item-calendar',
                        data : { title : title, start : start.format(), class : categoryClass },
                        type : 'POST',
                        success: function(response){
                            
                        },
                        complete: function(response){
                            
                        },
                        error: function(){
                            alertify.error('Ha ocurrido un error al conectar con el servidor...');
                        }
                    });
                }
                else{
                    alertify.error('Tienes que dar un título a tu evento');
                }
                return false;
                
            });
            $this.$calendarObj.fullCalendar('unselect');
    },
    CalendarApp.prototype.enableDrag = function() {
        //init events
        $(this.$event).each(function () {
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };
            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);
            // make the event draggable using jQuery UI
            $(this).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });
    }
    /* Initializing */
    CalendarApp.prototype.init = function() {
        this.enableDrag();
        /*  Initialize the calendar  */
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        var form = '';
        var today = new Date($.now());

        var defaultEvents =  get_calendar();

        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            // slotDuration: '00:300:00', /* If we want to split day time each 15minutes */
            minTime: '06:00:00',
            maxTime: '20:00:00',  
            defaultView: 'month',  
            handleWindowResize: true,
            displayEventEnd: true,   
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            buttonText: {
                listMonth: 'Lista Mes',
            },
            locale: 'es',
            events: defaultEvents,
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar !!!
            eventLimit: true, // allow "more" link when too many events
            selectable: true,
            drop: function(date, jsEvent, ui, resourceId) { 
                var title  = $(this)["0"].innerText.trim();
                var date   = date.format();
                var _class = jsEvent.target.dataset.class
                $this.onDrop($(this), date);
                $.ajax({
                    url  : window.location.origin + window.location.pathname + '/add-new-calendar',
                    data : { title : title, start : date, class : _class },
                    type : 'POST',
                    success: function(response){

                    },
                    complete: function(response){

                    },
                    error: function(){
                        alertify.error('Ha ocurrido un error al conectar con el servidor...');
                    }
                });
            },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
            eventClick: function(calEvent, jsEvent, view) { 
                $this.onEventClick(calEvent, jsEvent, view); 
            },
            eventDrop: function(event, delta, revertFunc) {
                var id    = event._id;
                var start = event._start.format();
                var end   = event._end.format();
                $.ajax({
                    url  : window.location.origin + window.location.pathname + '/edit-item-month-calendar',
                    data : { id : id, start : start, end : end },
                    type : 'POST',
                    success: function(response){
                        console.log(response);
                    },
                    complete: function(response){

                    },
                    error: function(){
                        alertify.error('Ha ocurrido un error al conectar con el servidor...');
                    }
                });
            },
             eventResize: function(event, delta, revertFunc) {
                var id    = event._id;
                var end   = event._end.format();
                $.ajax({
                    url  : window.location.origin + window.location.pathname + '/edit-line-item-calendar',
                    data : { id : id, end : end },
                    type : 'POST',
                    success: function(response){
                        console.log(response);
                    },
                    complete: function(response){

                    },
                    error: function(){
                        alertify.error('Ha ocurrido un error al conectar con el servidor...');
                    }
                });
            }
        });

        //on new event
        this.$saveCategoryBtn.on('click', function(){
            var categoryName = $this.$categoryForm.find("input[name='category-name']").val();
            var categoryColor = $this.$categoryForm.find("select[name='category-color']").val();
            $.ajax({
                url  : window.location.origin + window.location.pathname + '/add-new-event',
                data : { title : categoryName, class : categoryColor },
                type : 'POST',
                success: function(response){

                },
                complete: function(response){
                    location.reload();
                },
                error: function(){
                    alertify.error('Ha ocurrido un error al conectar con el servidor...');
                }
            });
            // if (categoryName !== null && categoryName.length != 0) {
            //     $this.$extEvents.append('<div class="calendar-events bg-' + categoryColor + '" data-class="bg-' + categoryColor + '" style="position: relative;"><i class="fa fa-move"></i>' + categoryName + '</div>')
            //     $this.enableDrag();
            // }
        });
    },

   //init CalendarApp
    $.CalendarApp = new CalendarApp, $.CalendarApp.Constructor = CalendarApp
    
}(window.jQuery),

//initializing CalendarApp
function($) {
    "use strict";
    $.CalendarApp.init()
}(window.jQuery);