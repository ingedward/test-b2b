<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="<?php echo base_url('assets/template/dist/xls/style.xsl') ?>"?>

        <?php if (!empty($files)): ?>
            <?php foreach($files as $row):?>
                <?php echo ("<archivo>");?>
                <?php echo ("<id>" . $row->id . "</id>");?>
                <?php echo ("<nombre>" . $row->name_file . "</nombre>");?>
                <?php echo ("</archivo>");?>
             <?php endforeach;?>
        <?php endif ?>


