import { useEffect, useState } from "react"

const useActiveStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=> {
        window.addEventListener('offline',function(){
            setOnlineStatus(false);
        })
        window.addEventListener('online',function(){
            setOnlineStatus(true);
        })
    }, [])

    return onlineStatus ? true : false;
}

export default useActiveStatus;