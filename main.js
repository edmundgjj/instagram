$(function(){

    let url = 'https://instagram-2698.restdb.io/rest/userdata';
  
    $('#submitInstagram').on('click',function(e){
      e.preventDefault();
      
      let query = $('#inputProfile').val();
      let output = ""
      axios.get(url).then(function (response) {
  
        let results = response.data;
        for (x of results) {
            if(x["username"] == query) {
                output = x["id"]
                } 
            }
        })
    $("#userid").append(`${output}`)
    })
})