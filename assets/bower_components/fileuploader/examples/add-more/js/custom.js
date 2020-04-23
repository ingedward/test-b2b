$(document).ready(function() {
	
	// enable fileuploader plugin
	$('input[name="files"]').fileuploader({
		addMore: true,
		extensions : ['mp4'],
		captions: {
			button: function(options) { return 'Escoger ' + (options.limit == 1 ? 'Archivo' : 'Archivos'); },
			feedback: function(options) { return 'Escoger ' + (options.limit == 1 ? 'archivo' : 'Archivos') + ' a subir'; },
			feedback2: function(options) { return options.length + ' ' + (options.length > 1 ? ' los archivos' : ' El archivo fue') + ' elegido'; },
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
		}
    });
	
});