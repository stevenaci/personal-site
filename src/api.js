import axios from "axios"

export async function github_userdata (username){
    let userapi = "https://api.github.com/users/" + username
    return axios.get(userapi,{
        // headers: {
        //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
        //   }
    }).then((resp) => {
        console.log("userdata: ", resp.data)
        return resp.data;
      });
}

export async function github_repodata (username){
    let repoapi = "https://api.github.com/users/" + username + "/repos"
    return axios.get(repoapi,{
        // headers: {
        //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
        //   } 
    }
    ).then((resp) => {

        return resp.data;
    });
}
