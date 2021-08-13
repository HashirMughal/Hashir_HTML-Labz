<?php
if(isset($_GET['submit'])){
    $name = $_GET['name'];
    $email = $_GET['email'];
    
    if($name==='' || $email===''){
        echo "Submit again! Thank you";
    }
    else{
        echo $name;
        echo "<br>";
        echo $email;
    }
}
else{
    echo "Not Authorized";
}
?>
