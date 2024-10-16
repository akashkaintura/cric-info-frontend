import { useEffect, useState } from 'react';

const useWebSocket = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(url);

        ws.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        ws.onmessage = (event) => {
            setData(JSON.parse(event.data));
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        return () => ws.close();
    }, [url]);

    return data;
};

export default useWebSocket;
