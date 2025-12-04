"use client";

import {useEffect, useState} from "react";

export default function Home() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("/api/test/hello")
            .then(res => res.json())
            .then(data => setMessage(data.status));
    }, [])
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}