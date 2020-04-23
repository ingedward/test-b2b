<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Tipos extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model("Files_model");
	}

	public function index(){
		$files = $this->Files_model->getFilesType();
		$data = array(
			"files" => $files
		);
		$this->load->view("layouts/header");
		$this->load->view("layouts/aside");
		$this->load->view("admin/reportes/files_types",$data);
		$this->load->view("layouts/footer");
	}
}