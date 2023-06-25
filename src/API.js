const getcode=async()=>{
const res=await fetch('https://api.weatherapi.com/v1/current.json?key=1e2ac8d8caa6427185775843220303&q=dhaka&aqi=no')
    const data=await res.json();
    return data
}
export default getcode;