import React from "react";
import Button from "./Button";
//const list = ["All", "Live", "Gaming, South, Cartoon, 18+, Hollywood, South, Cartoon, Music"];
const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All"/>
            <Button name="Live"/>
            <Button name="Gaming"/>
            <Button name="South"/>
            <Button name="Cartoon"/>
            <Button name="18+"/>
            <Button name="Hollywood"/>
            <Button name="South"/>
            <Button name="Cartoon"/>
            <Button name="Music"/>
        </div>
    );
};

export default ButtonList;