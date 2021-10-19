import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return {
        setServices,
        services
    }
};

export default useServices;