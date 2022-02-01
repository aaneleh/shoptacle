<?php 
    echo("ACESSOU PHP");

    $json = file_get_contents("php://input");

    $data = json_decode($json, true);

    echo("DATA: ");
    var_dump($data);

    if(!file_put_contents("clothes.json", json_encode($data, JSON_PRETTY_PRINT), LOCK_EX)){
        echo("ERRO SALVANDO O ARQUIVO");
    } else {
        echo("SUCESSO");
    }

?>