<?php
require_once('models/date.php');
class RolesController
{

    public function getAll_roles()
    {
        $limit = intval($_GET['limit'] ?? '-1');

        $roles = Roles::getAll($limit);
        formatDataDates($roles, ['created_at', 'updated_at']);

        // Défini dans "indexController.inc.php".
        sendJson($roles);
    }
}
