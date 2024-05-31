<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = $_POST['Seu número p/contato:'];
    $msgCliente = addslashes($_POST['msg-do-cliente']);

    $para = "agnuzprofit@gmail.com";
    $assunto = "Dúvidas do cliente - Site Agnuz";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telefone;

    $cabeca = "From: agnuzprofit@gmail.com "."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>