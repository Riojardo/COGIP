<?php
declare(strict_types=1);
class Users {
    private string $first_name;
    private string $last_name;
    private string $email;
    private string $password;
    private string $created_at;
    private string $updated_at;

    public function __construct(string $first_name, string  $last_name, string  $email,string $password, string $created_at, string $updated_at)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->email =  $email;
        $this->password =  $password;
        $this->created_at = $created_at;
        $this->updated_at = $updated_at;
    
    }
}