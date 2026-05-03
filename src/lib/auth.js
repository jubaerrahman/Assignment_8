export const getUser=()=>{
if(typeof window==="undefined")return null
const u=localStorage.getItem("user")
return u?JSON.parse(u):null
}

export const loginUser=(data)=>{
localStorage.setItem("user",JSON.stringify(data))
}

export const logoutUser=()=>{
localStorage.removeItem("user")
}