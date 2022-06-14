import React from "react";

const Comment = (props) => {
    return (
        <div>
            {props.arr.map((value, index) => (
                <li key = {index}> {/*key={value.id}>*/}
                    {console.log("xkey는", props.arr.length)}
                    <span>UserID</span>
                    <span style={{ fontWeight: 400, paddingLeft: 8 }}>{value}</span>
                    <button onClick = {remove}> x </button>
                </li>
            ))}
        </div>

    )
}

export default Comment;

