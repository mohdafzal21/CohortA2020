const selectDiv = document.getElementById('btn')

selectDiv.addEventListener('click', getLocation)

function getLocation(){
    navigator.geolocation.getCurrentPosition((data)=>{
        console.log("latitude",data.coords.latitude)
        console.log("longitude",data.coords.longitude )
        
        
        })
}

navigator.getBattery().then((data)=> {
    console.log("battery Level",data.level * 100)

    if(data.charging == false){
        console.log(" not charging")
    }else{
        console.log("charging")
    }

})


const fetchPopularRepos = function (language) {
    console.log(language)
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
    return fetch(encodedURI)
      .then(function (response) {
          console.log(response)
        return response.data.items;
      });
  }

  fetchPopularRepos("javascrpit")