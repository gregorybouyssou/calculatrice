jQuery(document).ready(function(){

    let $nombre1 = $('#nombre1').val()
    let $nombre2 = $('#nombre2').val()
    let $result = $('#result')
    let $ok = $('#ok')
    let $somme = parseInt(0)
    
    
    $ok.click(function(){

        $result.text($somme)

    })

})