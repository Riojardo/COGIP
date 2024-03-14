<?php
require_once('models/connexion.php');
require_once('models/date.php');
require_once('models/invoices.php');
require_once('models/validation.php');

class InvoicesController
{
    public function getAll_invoices()
    {
        $limit = intval($_GET['limit'] ?? '-1');
        $invoices = Invoices::getAllWithCompanyName($limit);
        formatDataDates($invoices, ['created_at', 'updated_at', 'date_due']);
        // Défini dans "indexController.inc.php".
        sendJson($invoices);
    }
    public function addNewInvoice()
    {
        $validation_reference = new validation();
        $validation_price = new validation();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // Call Validation
            $ref = $_POST['reference'];
            $id_company = $_POST['company-name'];
            $price = $_POST['price'];
            $date_due = $_POST['date'];

            if (
                $ref && $id_company && $price && $date_due
                && $validation_reference->number_Input($ref)
                && $validation_price->number_Input($price)
            ) {

                $res = Invoices::insertInvoices($ref, $id_company, $price, $date_due);
                header('Location: http://localhost/COGIP/dashboard-invoices.html');
                exit();
            } else {
                echo "veuillez remplir tous les champs du formulaire avec les donnés adéquate <br>";

                echo $ref . "<br>  --> doit etre numeric";
                echo $price . "<br>   --> doit etre numeric";
            }
        } else {
            print('405 Method Not Allowed');
            exit();
        }
    }
}
