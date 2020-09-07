$(function(){

    let url = 'https://cors-anywhere.herokuapp.com/https://instagram-2698.restdb.io/userdata?key=5f50da4dc5e01c1e033b8be4';
  
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
    $('#userid').empty();
    $("#userid").append(`${output}`);
    })
})