// let lion = document.querySelector('#imageOne')

//  fetch('https://picsum.photos/id/1/916/610')
//      .then(function(response){
//         return response.json();
//      })
//      .then(function(myJson){
//         console.log(myJson)
//             displayImage(myJson)
//      })
        
//     function displayImage(pic){
//         console.log(pic)
//     }
   


// Code working correctly
    fetch('https://picsum.photos/916/610?random=1')
    .then(response => {
        display(response)
        console.log(response)
    }) 
    function display(pic){
        // console.log(pic);
        // const picOne = pic.url;
        document.getElementById('imageOne').src=pic.url;
    }

    fetch('https://picsum.photos/id/1/916/610')
    .then(res => {
        pic(res)
        console.log(res)
    }) 
    function pic(pics){
        // console.log(pic);
        // const picOne = pic.url;
        document.getElementById('imageTwo').src=pics.url;
    }



    
    // fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
    // .then(res => {
    //     return res.json()
    //     // console.log(res)
    // })
    // .then(json => {
    //     console.log(json)
    //     display(json)
    // })

    // function display(mewtwo){
    //     let pokemon = document.getElementById('pokeInfo')
    //     pokemon.src = mewtwo.sprites.front_default
    // }
