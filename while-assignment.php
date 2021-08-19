<?php
    $i=1;
    while($i <= 5){
        $j = 1;
        while( $j<= $i){
            echo '* ';
            $j++;
        }
        $i++;
        echo "<br>";
    }
    $i = 5;
    while($i <= 1 ){
        $j =1;
        while( $j >=$i){
            echo '* ';
            $j--;
        }
        $i--;
        echo "<br>";
    }

?>