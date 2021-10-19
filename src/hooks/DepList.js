import { useEffect } from "react";
import { useState } from "react"

const DepList = () => {
    const [deps, setDeps] = useState([]);
    useEffect(() => {
        fetch('./DeptList.json')
            .then(res => res.json())
            .then(data => setDeps(data));
    }, []);
    return [deps, setDeps];
}

export default DepList;