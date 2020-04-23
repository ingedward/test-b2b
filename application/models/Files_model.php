<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Files_model extends CI_Model 
{
	public function getFile($id)
	{
		$this->db->where("id",$id);
		$resultado = $this->db->get("files_server");
		return $resultado->row();
	}

	public function getFiles(){
		$this->db->select("fc.*,ft.file_type as file_type");
		$this->db->from("files_client fc");
		$this->db->join("files_type ft","fc.file_type_id = ft.id");
		$resultados = $this->db->get();
		if ($resultados->num_rows() > 0) {
			return $resultados->result();
		}
		else
		{
			return false;
		}
	}

	public function getFilesType(){
		$this->db->select("count(*) as num_files, file_type");
		$this->db->from("files_client fc");
		$this->db->join("files_type ft","fc.file_type_id = ft.id");
		$this->db->group_by("file_type");
		$resultados = $this->db->get();
		if ($resultados->num_rows() > 0) {
			return $resultados->result();
		}
		else
		{
			return false;
		}
	}
/*
	public function getFilesType(){
		$this->db->select("*");
		$this->db->from("files_type");
		$resultados = $this->db->get();
		if ($resultados->num_rows() > 0) {
			return $resultados->result();
		}
		else
		{
			return false;
		}
	}
*/
	public function getFilesByDate($beginDate, $endDate){
		$this->db->select("fs.*,ft.file_type as file_type,ft.id as id_ft");
		$this->db->from("files_server fs");
		$this->db->join("files_type ft","fs.file_type_id = ft.id");
		$this->db->where("fs.date_file >=",$beginDate);
		$this->db->where("fs.date_file <=",$endDate);
		$resultados = $this->db->get();
		if ($resultados->num_rows() > 0) {
			return $resultados->result();
		}else
		{
			return false;
		}
	}

}