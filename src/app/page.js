import Link from "next/link";
import React from 'react';
// linking pages: https://youtu.be/W09K95djOy0?si=YCpGN1oVprVo3DJ9
const App = () => {
    return ( 
        <div>
        <h1 className = "text-6xl">App</h1>
        <Link href="/events">Events</Link>
        </div>
    );
};

export default App;