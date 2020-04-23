<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" version="4.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html>
      <head>
        <title>Reporte</title>
        <!-- Bootstrap 3.3.7 -->
        <link rel="stylesheet" href="http://localhost:81/b2b-test/assets/template/bootstrap/css/bootstrap.min.css">
      </head>
      <body>
        <h1>Archivos </h1>
        <div class="col-md-12">
          <br>
            <table border="1">
              <tr>
                <th>Id</th>
                <th>Nombre</th>
              </tr>
              <xsl:for-each select="archivo">
                <tr>
                  <div align="center">
                    <td><xsl:value-of select="id" /></xsl></td>
                    <td><xsl:value-of select="nombre" /></xsl></td>
                  </div>
                </tr>
              </xsl:for-each>
            </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

