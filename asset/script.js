jQuery(document).ready(function(){

    let $nombre1 = $('#nombre1')
    let $nombre2 = $('#nombre2')
    let $result = $('#result')
    let $ok = $('#ok')
    let somme = $nombre1 + $nombre2
    
    
    $ok.click(function(){

        $result.html=(somme)
        $result.text(textarea)


        
    })



})