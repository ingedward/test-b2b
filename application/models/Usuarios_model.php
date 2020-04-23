<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios_model extends CI_Model {

	public function getUsuarios(){
		$this->db->select("u.*,r.nombre as rol");
		$this->db->from("adm_usuarios u");
		$this->db->join("adm_roles r","u.rol_id = r.id");
		$this->db->where("u.estado","1");
		$resultados = $this->db->get();
		return $resultados->result();
	}

	public function getUsuario($id){
		$this->db->select("u.*,r.nombre as rol");
		$this->db->from("adm_usuarios u");
		$this->db->join("adm_roles r","u.rol_id = r.id");
		$this->db->where("u.id",$id);
		$this->db->where("u.estado","1");
		$resultado = $this->db->get();
		return $resultado->row();
	}

	public function getRoles(){
		$resultados = $this->db->get("adm_roles");
		return $resultados->result();
	}
	public function save($data){
		return $this->db->insert("adm_usuarios",$data);
	}
	public function update($id,$data){
		$this->db->where("id",$id);
		return $this->db->update("adm_usuarios",$data);
	}
	public function login($username, $password){
		$this->db->where("username", $username);
		$this->db->where("password", $password);

		$resultados = $this->db->get("adm_usuarios");
		if ($resultados->num_rows() > 0) {
			return $resultados->row();
		}
		else{
			return false;
		}
	}
}
