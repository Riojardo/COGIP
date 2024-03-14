<?php 
require_once('models/date.php');
require_once('models/users.php');
class usersController {
    public function getAll_users() {

        $limit = intval($_GET['limit'] ?? '-1');

        $users = Users::getAll($limit);
        formatDataDates($users, ['created_at', 'updated_at']);
        
        // Défini dans "indexController.inc.php".
        sendJson($users);

    }

   
    public function add_user (){
        if ($_SERVER['REQUEST_METHOD'] === 'POST'){
           
            $first_name= $_POST['first_name'] ?? null;
            $last_name = $_POST['last_name'] ?? null;
            $password= $_POST['password'] ?? null;
            $email = $_POST['email'] ?? null;
          $role_id= 2 ;
              // $role_id= $_POST['role_id'] ?? null;
    
            if ($first_name && $last_name && $password && $email
          ) {
          
              
                $success = Users::add_users($first_name, $last_name, $password, $email, $role_id);
                header('Location: http://localhost/COGIP/sign-up.html');
                exit();
    
            } else {
                echo "veuillez remplir tous les champs du formulaire avec les donnés adéquate <br>";
           
                echo $first_name . "<br>";
                echo $last_name . "<br>";
                echo $email . "<br>";
                echo $password . "<br>";
                echo " Vous n'avez pas le status d'administateur <br>";
            }
        } else {
            echo "Invalid request method!";
        }
    }
    
}