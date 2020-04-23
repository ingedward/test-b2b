/*
MySQL Data Transfer
Source Host: localhost
Source Database: b2b_prueba
Target Host: localhost
Target Database: b2b_prueba
Date: 23/04/2020 1:53:33 p. m.
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for adm_menus
-- ----------------------------
DROP TABLE IF EXISTS `adm_menus`;
CREATE TABLE `adm_menus` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for adm_permisos
-- ----------------------------
DROP TABLE IF EXISTS `adm_permisos`;
CREATE TABLE `adm_permisos` (
  `id` int(11) NOT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `read` int(11) DEFAULT NULL,
  `insert` int(11) DEFAULT NULL,
  `update` int(11) DEFAULT NULL,
  `delete` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_adm_permisos_1_idx` (`menu_id`),
  KEY `fk_adm_permisos_2_idx` (`rol_id`),
  CONSTRAINT `fk_menus` FOREIGN KEY (`menu_id`) REFERENCES `adm_menus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_rol` FOREIGN KEY (`rol_id`) REFERENCES `adm_roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for adm_roles
-- ----------------------------
DROP TABLE IF EXISTS `adm_roles`;
CREATE TABLE `adm_roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for adm_usuarios
-- ----------------------------
DROP TABLE IF EXISTS `adm_usuarios`;
CREATE TABLE `adm_usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) DEFAULT NULL,
  `apellidos` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_adm_usuarios_1_idx` (`rol_id`),
  CONSTRAINT `fk_rol_usuarios` FOREIGN KEY (`rol_id`) REFERENCES `adm_roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for files_client
-- ----------------------------
DROP TABLE IF EXISTS `files_client`;
CREATE TABLE `files_client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_file` varchar(50) NOT NULL DEFAULT '',
  `file_type_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_files1_idx` (`file_type_id`),
  CONSTRAINT `fk_files1` FOREIGN KEY (`file_type_id`) REFERENCES `files_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for files_server
-- ----------------------------
DROP TABLE IF EXISTS `files_server`;
CREATE TABLE `files_server` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_file` varchar(200) NOT NULL DEFAULT '',
  `date_file` date DEFAULT NULL,
  `file_type_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_server_idx` (`file_type_id`),
  CONSTRAINT `fk_server` FOREIGN KEY (`file_type_id`) REFERENCES `files_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for files_type
-- ----------------------------
DROP TABLE IF EXISTS `files_type`;
CREATE TABLE `files_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_type` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `adm_menus` VALUES ('1', 'Inicio', 'dashboard');
INSERT INTO `adm_menus` VALUES ('2', 'Categorias', 'mantenimiento/categorias');
INSERT INTO `adm_menus` VALUES ('3', 'Clientes', 'mantenimiento/clientes');
INSERT INTO `adm_menus` VALUES ('4', 'Productos', 'mantenimiento/productos');
INSERT INTO `adm_menus` VALUES ('5', 'Ventas', 'movimientos/ventas');
INSERT INTO `adm_menus` VALUES ('6', 'Reporte Ventas', 'reportes/ventas');
INSERT INTO `adm_menus` VALUES ('7', 'Usuarios', 'administrador/usuarios');
INSERT INTO `adm_menus` VALUES ('8', 'Permisos', 'administrador/permisos');
INSERT INTO `adm_permisos` VALUES ('1', '1', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('2', '2', '2', '1', '1', '0', '0');
INSERT INTO `adm_permisos` VALUES ('3', '3', '2', '1', '1', '1', '0');
INSERT INTO `adm_permisos` VALUES ('4', '4', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('5', '5', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('7', '6', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('8', '7', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('9', '8', '2', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('10', '1', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('11', '2', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('12', '4', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('13', '5', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('14', '6', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('15', '7', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('16', '3', '1', '1', '1', '1', '1');
INSERT INTO `adm_permisos` VALUES ('17', '8', '1', '1', '1', '1', '1');
INSERT INTO `adm_roles` VALUES ('1', 'superadmin', null);
INSERT INTO `adm_roles` VALUES ('2', 'admin', null);
INSERT INTO `adm_usuarios` VALUES ('1', 'Edward', 'Rodriguez', '3183546202', 'ing.erodriguez@outlook.com', 'ingedward', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', '2', '1');
INSERT INTO `files_client` VALUES ('2', 'Archivo 1', '1');
INSERT INTO `files_client` VALUES ('3', 'Archivo 2', '2');
INSERT INTO `files_client` VALUES ('4', 'Archivo 3', '3');
INSERT INTO `files_client` VALUES ('6', 'Archivo 4', '4');
INSERT INTO `files_client` VALUES ('7', 'Archivo 5', '1');
INSERT INTO `files_client` VALUES ('8', 'Archivo 6', '2');
INSERT INTO `files_client` VALUES ('9', 'Archivo 7', '3');
INSERT INTO `files_client` VALUES ('10', 'Archivo 8', '4');
INSERT INTO `files_client` VALUES ('11', 'Archivo 9', '1');
INSERT INTO `files_client` VALUES ('12', 'Archivo 10', '3');
INSERT INTO `files_server` VALUES ('1', 'Archivo 1', '2020-02-03', '1');
INSERT INTO `files_server` VALUES ('2', 'Archivo 2', '2020-03-02', '2');
INSERT INTO `files_server` VALUES ('4', 'Archivo 3', '2020-03-03', '3');
INSERT INTO `files_server` VALUES ('5', 'Archivo 4', '2020-04-01', '4');
INSERT INTO `files_server` VALUES ('7', 'Archivo 5', '2020-04-02', '1');
INSERT INTO `files_server` VALUES ('8', 'Archivo 6', '2020-04-03', '2');
INSERT INTO `files_server` VALUES ('9', 'Archivo 7', '2020-04-04', '3');
INSERT INTO `files_server` VALUES ('10', 'Archivo 8', '2020-04-05', '4');
INSERT INTO `files_type` VALUES ('1', 'doc');
INSERT INTO `files_type` VALUES ('2', 'docx');
INSERT INTO `files_type` VALUES ('3', 'xls');
INSERT INTO `files_type` VALUES ('4', 'pdf');
INSERT INTO `files_type` VALUES ('5', 'txt');
