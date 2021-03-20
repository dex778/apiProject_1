const wish_btn = document.getElementById('wish_btn');
const reality_btn = document.getElementById('reality_btn');
wish_btn.addEventListener('click', display);
reality_btn.addEventListener('click', pic);
    
    function randomPhoto(){
        fetch('https://picsum.photos/916/610?random=1')
        .then(response => {
            display(response)
            console.log(response)
            
        })
    }
    

    function display(pictures){
        
        document.getElementById('imageOne').src=pictures.url;
    }

    function staticPic(){
        fetch('https://picsum.photos/id/1/916/610')
        .then(res => {
            pic(res)
            console.log(res)
        }) 
    }
    

    function pic(pics){
      
        document.getElementById('imageTwo').src=pics.url;
    }

