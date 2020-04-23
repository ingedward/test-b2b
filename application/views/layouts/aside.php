        <!-- =============================================== -->

        <!-- Left side column. contains the sidebar -->
        <aside class="main-sidebar">
            <!-- sidebar: style can be found in sidebar.less -->
            <section class="sidebar">      
                <!-- sidebar menu: : style can be found in sidebar.less -->
                <ul class="sidebar-menu" data-widget="tree">
                    <li class="header">MENÚ PRINCIPAL</li>
                    <li>
                        <a href="<?php echo base_url();?>dashboard">
                            <i class="fa fa-home"></i> <span>Inicio</span>
                        </a>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-cogs"></i> <span>Mantenimiento</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <a href="<?php echo base_url();?>mantenimiento/files_type">
                                    <i class="fa fa-circle-o"></i> Tipos archivo
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo base_url(); ?>mantenimiento/files_server">
                                    <i class="fa fa-circle-o"></i> Archivos servidor
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-share-alt"></i> <span>Servicio</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <a href="<?php echo base_url();?>server">
                                    <i class="fa fa-circle-o"></i> Servidor
                                </a>
                                <a href="<?php echo base_url();?>client">
                                    <i class="fa fa-circle-o"></i> Cliente
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-print"></i> <span>Reportes</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <a href="<?php echo base_url();?>reportes/tipos">
                                    <i class="fa fa-circle-o"></i> Tipos archivos
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo base_url();?>reportes/archivos">
                                    <i class="fa fa-circle-o"></i> Reporte Archivos
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-user-circle-o"></i> <span>Administrador</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li>
                                <a href="<?php echo base_url();?>administrador/usuarios">
                                    <i class="fa fa-circle-o"></i> Usuarios
                                </a>
                            </li>
                            <li>
                                <a href="<?php echo base_url();?>administrador/permisos">
                                    <i class="fa fa-circle-o"></i> Permisos
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <!-- /.sidebar -->
        </aside>

        <!-- =============================================== -->