import { useState } from "react";



function Bullet(props) {
    return <li>{props.bulletPoint}</li>
}

export default function BulletList(props) {

    return (
        <ul>
            {props.bulletPoints.map((bullet) => {
                return <li key={bullet}>{bullet}</li>
            })}
        </ul>
    )

}