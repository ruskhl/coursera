<?php
if($_POST["message"]) {
    mail("ruslana.khlopuk@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>