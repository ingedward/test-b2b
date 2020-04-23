<?php
/*********************************************************************************
 * @AUTOR:            EDWARD RODRIGUEZ.
 * @SISTEMA:          Prueba B2B.
 * @FECHA:            2020/04/20,
 * @ARCHIVO:          Nu_soap.php
 * @DESCRIPCION:      Libreria propia.
 * @Encoding file:    UTF-8
 ********************************************************************************/
if ( ! defined('BASEPATH')) exit('No se permite el acceso directo a las p&aacute;ginas de este sitio.');

class Nu_soap {

   function  __construct() {
      require_once APPPATH . 'libraries/nusoap/nusoap.php';
   } // end Constructor

   function index($no_cache) {
   }  // end function

} // end Class

/* End of file Nu_soap.php */