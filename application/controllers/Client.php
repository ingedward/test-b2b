<?php
/*********************************************************************************
 * @AUTOR:            EDWARD RODRIGUEZ.
 * @SISTEMA:          Prueba B2B.
 * @FECHA:            2020/04/20,
 * @ARCHIVO:          Cliente.php
 * @DESCRIPCION:      Controlador.
 * @Encoding file:    UTF-8
 * Notas:             Consulta los datos del servidor
 ********************************************************************************/
class Client extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->library('nu_soap');
		$this->load->model('Files_model','files',TRUE);
	}
	public function index()
	{


		/*
		#--- ESTE SERVICIO NO DEVUELVE INFORMACIÓN

		$endpoint = "http://test.analitica.com.co/AZDigital_Pruebas/WebServices/SOAP/index.php?wsdl";
		$params = array(
			'Tipo' => 'FechaInicial', 
			'Expresion' => '2020-03-01 00:00:00'
		);
		$client = new NusoapClient($endpoint, 'true');
		$client->soap_defencoding = 'UTF-8';
		$client->decode_utf8 = FALSE;
		$resultado = $client->call('ListFiles', $params);
		echo "<pre>"; print_r($resultado); die("<br>Fin prueba");
		*/

		$client = new nusoap_client('http://localhost:81/B2B/index.php/server?wsl');
		$error = $client->getError();
		if ($error) {
			echo '<h2>Constructor error</h2><pre>' . $err . '</pre>';
		}
		$parameters = array('begin_date' => '2020-03-01', 'end_date' => '2020-04-15');
		$results = $client->call("ListFiles",$parameters);


echo '<pre>';
$vars = get_defined_vars();  
print_r($vars);
echo '</pre>';
exit();

		if ($client->fault) {
			echo $client->fault;
		}
		else{
			$data = json_encode($results);
			var_dump($data);
		}
	}
}

