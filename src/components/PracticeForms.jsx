import { useState } from "react";
import { ParagraphInput } from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

export default function BulletWrapper() {
    const [bulletPrompts, setBulletPrompts] = useState([]);
    const [ids, setIds] = useState([]);

     function handleDeletePrompt(selectedId) {
        const updatedPrompts = bulletPrompts.filter(prompt => prompt.id !== selectedId);
        setBulletPrompts(updatedPrompts);

    }


    function handleAddPrompt(e) {
        e.preventDefault();
        const newId = uuidv4()
        setBulletPrompts([...bulletPrompts, {
            input: <ParagraphInput key={newId} placeholder="write" />,
            deleteButton: <Button key={newId} title="X" onClick={(e) => {
                            e.preventDefault();
                            handleDeletePrompt(newId);
            }}/>,
            id: newId
        }])
    }

   

    return (
        <>
            {bulletPrompts.map(prompt => {
                return (
                    <>
                    {prompt.input}
                    {prompt.deleteButton}
                    </>
                )
            })}

            <Button key={uuidv4()} title="Add Prompt" onClick={handleAddPrompt}/>
            
        </>
    )

}