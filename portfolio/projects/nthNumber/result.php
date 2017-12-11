<?php
function Nthnumber($n)
{
    $number = '';
    $counting = 0;
    for ($i = 0; $i < 1000; $i++) {
        $varI = $i . '';
        $number .= $varI;
        if($counting < $n){
            $counting += $i;
        }
        echo strLen($varI);
    }

    echo '<br>';
    echo $counting;

}
if (is_int($_POST['text'])) {
    Nthnumber($_POST['text']);
}else{
    echo "vul een nummer in";
}
?>