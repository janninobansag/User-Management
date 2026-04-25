
export const getUsers = async () =>{
    try{
        const res = await fetch("http://172.22.40.53:5000/api/users",{
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        });
        
    if(!res.ok){
        throw new Error("Failed to fetch orders");
    }
    const data = await res.json();
    return data;
    }catch(error){
        console.error("Error fetching orders:",error);
        return[];
    }
}