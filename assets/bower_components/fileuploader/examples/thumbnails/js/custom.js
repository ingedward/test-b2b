$(document).ready(function() {
	
	// enable fileuploader plugin
	$('input[name="files"]').fileuploader({
        extensions: ['jpg', 'jpeg', 'png', 'gif', 'bmp'],
		changeInput: ' ',
		theme: 'thumbnails',
        enableApi: true,
		addMore: true,
		thumbnails: {
			box: '<div class="fileuploader-items">' +
                      '<ul class="fileuploader-items-list">' +
					      '<li class="fileuploader-thumbnails-input"><div class="fileuploader-thumbnails-input-inner">+</div></li>' +
                      '</ul>' +
                  '</div>',
			item: '<li class="fileuploader-item">' +
				       '<div class="fileuploader-item-inner">' +
                           '<div class="thumbnail-holder">${image}</div>' +
                           '<div class="actions-holder">' +
                               '<a class="fileuploader-action fileuploader-action-remove" title="Remove"><i class="remove"></i></a>' +
                           '</div>' +
                       	   '<div class="progress-holder">${progressBar}</div>' +
                       '</div>' +
                   '</li>',
			item2: '<li class="fileuploader-item">' +
				       '<div class="fileuploader-item-inner">' +
                           '<div class="thumbnail-holder">${image}</div>' +
                           '<div class="actions-holder">' +
                               '<a class="fileuploader-action fileuploader-action-remove" title="Remove"><i class="remove"></i></a>' +
                           '</div>' +
                       '</div>' +
                   '</li>',
			startImageRenderer: true,
			canvasImage: false,
			_selectors: {
				list: '.fileuploader-items-list',
				item: '.fileuploader-item',
				start: '.fileuploader-action-start',
				retry: '.fileuploader-action-retry',
				remove: '.fileuploader-action-remove'
			},
			onItemShow: function(item, listEl) {
				var plusInput = listEl.find('.fileuploader-thumbnails-input');
				
				plusInput.insertAfter(item.html);
				
				if(item.format == 'image') {
					item.html.find('.fileuploader-item-icon').hide();
				}
			}
		},
		afterRender: function(listEl, parentEl, newInputEl, inputEl) {
			var plusInput = listEl.find('.fileuploader-thumbnails-input'),
				api = $.fileuploader.getInstance(inputEl.get(0));
		
			plusInput.on('click', function() {
				api.open();
			});
		},
		captions: {
			button: function(options) { return 'Choose ' + (options.limit == 1 ? 'File' : 'Files'); },
			feedback: function(options) { return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload'; },
			feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen'; },
			close: 'Salir',
			download: 'Descargar',
			remove: 'Eliminar',
			drop: 'Suelta los archivos aquí para Cargar',
			paste: '<div class="fileuploader-pending-loader"><div class="left-half" style="animation-duration: ${ms}s"></div><div class="spinner" style="animation-duration: ${ms}s"></div><div class="right-half" style="animation-duration: ${ms}s"></div></div> Pegando un archivo, haga clic aquí para cancelar.',
			removeConfirmation: '¿Seguro que desea eliminar este archivo?',
			errors: {
				filesLimit: 'Sólo se permiten subir ${limit} archivos.',
				filesType: 'Solo se permiten subir ${extensions} archivos.',
				fileSize: '${name} es demasiado grande! Elija un archivo de hasta ${fileMaxSize} MB.',
				filesSizeAll: 'Los archivos que eligió son demasiado grandes! Cargue archivos hasta ${maxSize} MB.',
				fileName: 'El archivo con el nombre ${name} ya está seleccionado.',
				folderUpload: 'No puedes subir carpetas.'
			}
		},
		/*
		// while using upload option, please set
		// startImageRenderer: false
		// for a better effect
		upload: {
			url: './php/upload_file.php',
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            synchron: true,
            beforeSend: null,
            onSuccess: function(data, item) {
				setTimeout(function() {
					item.html.find('.progress-holder').hide();
					item.renderImage();
				}, 400);
            },
            onError: function(item) {
				item.html.find('.progress-holder').hide();
				item.html.find('.fileuploader-item-icon i').text('Failed!');
				
				setTimeout(function() {
					item.remove();
				}, 1500);
            },
            onProgress: function(data, item) {
                var progressBar = item.html.find('.progress-holder');
				
                if(progressBar.length > 0) {
                    progressBar.show();
                    progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
                }
            }
        },
		dragDrop: {
			container: '.fileuploader-thumbnails-input'
		},
		onRemove: function(item) {
			$.post('php/upload_remove.php', {
				file: item.name
			});
		},
		*/
    });
	
});