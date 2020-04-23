<?php
/*********************************************************************************
 * @AUTOR:            EDWARD RODRIGUEZ.
 * @SISTEMA:          Prueba B2B.
 * @FECHA:            2020/04/20,
 * @ARCHIVO:          Server.php
 * @DESCRIPCION:      Controlador.
 * @Encoding file:    UTF-8
 * Notas:             Crea el servidor 
 ********************************************************************************/
class Server extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->library('nu_soap');

		$this->nusoap_server = new soap_server();
		$this->nusoap_server->configureWSDL('ServiceB2B','urn:serviceb2b');
		$this->nusoap_server->register('ListFiles',
				array('begin_date' => 'xsd:date','end_date' => 'xsd:date'),
				array('return' => 'xsd:string'),
				'urn:serviceb2b',
				'urn:serviceb2b#ListFiles',
				'rpc',
				'encoded',
				'Listar Archivos'
			);

	}
	public function index()
	{
		function ListFiles($beginDate, $endDate){
			$CI =& get_instance();
			$CI->load->model('Files_model','files');
//      		$datos['files'] = $CI->Files_model->getFilesByDate($beginDate,$endDate); 
//      		$datos = $CI->Files_model->getFilesByDate($beginDate,$endDate); 
      		$datos = $CI->files->getFilesByDate($beginDate,$endDate); 

//			foreach ($datos['files'] as $row)
			foreach($datos as $key => $row)
			{
				$data  = array(
					'id' 		=> $row->id,
					'archivo'	=> $row->name_file,
					'extension'	=> $row->file_type,
					'Fecha'		=> $row->date_file
				);
			}
			return json_encode($data);
		}
		$this->nusoap_server->service(file_get_contents("php://input"));
	}
}

