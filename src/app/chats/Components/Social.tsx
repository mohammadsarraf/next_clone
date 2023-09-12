import React, { useState } from "react";
import DM from "./DM";
import Pv from "./Pv";

export default function Social() {
    const [selectedUsername, setSelectedUsername] = useState(null);
    const [clicked, setClicked] = useState(false);

    const handleClick = (userName: any) => {
        setSelectedUsername(userName)
        setClicked(true)
    }
    const handleReturn = () => {
        setClicked(false)
    }
    return (
        <>
            {!clicked ? (
                <DM handleClick={handleClick} />
            ) : (
                <Pv username={`Moe`} contact={selectedUsername} handleReturn={handleReturn}/>
            )}
        </>
    );
}
