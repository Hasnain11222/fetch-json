function fetchdata(){

    var username = document.getElementById("txt").value;

                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("name").innerHTML = data.name);
                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("bio").innerHTML = data.bio);
                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("followers").innerHTML = data.followers);
                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("login").innerHTML = data.login);
                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("location").innerHTML = data.location);
                    



                    fetch("https://api.github.com/users/"+username).then(res => res.json()).then(data => document.getElementById("profile").src = data.avatar_url);
                }
                
                
                


                