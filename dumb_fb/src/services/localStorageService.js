function setToken(token){
    localStorage.setItem("ACCESS_TOKEN",token)
}
function setUserName(username){
    localStorage.setItem("USERNAME",username)
}
function getToken(){
    return localStorage.getItem("ACCESS_TOKEN")
}
function getUserName(){
    return localStorage.getItem("USERNAME")
}
function removeToken(){
    localStorage.removeItem("ACCESS_TOKEN")
}
function removeUserName(){
    localStorage.removeItem("USERNAME")
}
export default {
    setToken,getToken,removeToken,setUserName,getUserName,removeUserName
}