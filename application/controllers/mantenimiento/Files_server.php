<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Files_server extends CI_Controller 
{
	public function __construct()
	{
		parent::__construct();
        $this->load->library('grocery_CRUD');
	}

    public function _example_output($output = null, $data = null)
	{
		$data['css_files'] 			= $output->css_files;
		$data['js_files']  			= $output->js_files;
		$data['js_lib_files']  		= $output->js_lib_files;
		$data['js_config_files']	= $output->js_config_files;
		$this->load->view("layouts/header",$data);
		$this->load->view("layouts/aside");
		$this->load->view("admin/files/template",$output);
		$this->load->view("layouts/footer");
	}

	public function index()
	{

		$crud = new grocery_CRUD();
//		$crud->set_theme('bootstrap')
		$crud->set_theme('bootstrap')

		->set_table('files_server')
		->set_subject('Archivo')
		->columns('id','name_file','file_type_id','date_file')
		->fields('name_file','file_type_id','date_file')
		->display_as(array(
			'id'				=> 'Código',	
			'name_file'			=> 'Nombre archivo',	
			'file_type_id'		=> 'Tipo archivo',
			'date_file'			=> 'Fecha'
		))
		->required_fields('id','name_file','file_type_id')
		->set_relation('file_type_id', 'files_type', 'file_type')
		->set_crud_url_path(site_url('mantenimiento/Files_server/index'))
		->set_language('spanish')
		->unset_bootstrap()
		->unset_jquery();
		try 
		{
			$output = $crud->render();
			$this->_example_output($output);	
		} 
		catch (Exception $e) 
		{
			if($e->getCode() == 14) 
			{
				echo 'Sin acceso';
			}
			else 
			{
				show_error($e->getMessage());
			}
		}
	}
}