$(function(){

    let url = 'https://instagram-2698.restdb.io/rest/userdata?key=22631469345172666884';
  
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