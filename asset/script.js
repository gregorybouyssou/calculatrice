jQuery(document).ready(function(){

    let $nombre1 = Number.parseInt($('#nombre1').val())
    let $nombre2 = Number.parseInt($('#nombre2').val())
    let $result = $('#result')[0]
    let $ok = $('#ok')
    let somme = $nombre1 + $nombre2
   
   
   

    let p = setInterval(function(){
        
        $nombre1 = Number.parseInt($('#nombre1').val())
        $nombre2 = Number.parseInt($('#nombre2').val())
        
        somme = $nombre1 + $nombre2

        $ok.click(function(e){

            $result.value = somme
            
        })

    }, 1000/30)

})