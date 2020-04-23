<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Archivos extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Files_model");
	}

	public function index(){
		$fechainicio = $this->input->post("fechainicio");
		$fechafin = $this->input->post("fechafin");
		$files = $this->Files_model->getFiles();
		$data = array(
			"files" => $files
		);
//		$this->load->view("layouts/header");
//		$this->load->view("layouts/aside");
		$this->load->view("admin/reportes/files",$data);
//		$this->load->view("layouts/footer");
	}
}