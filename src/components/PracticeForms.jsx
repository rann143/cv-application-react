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
            id: newId
        }])
    }

   

    return (
        <>
            {bulletPrompts.map(prompt => {
                return (
                    <div key={prompt.id}>
                    {prompt.input}
                        <Button key={uuidv4()} title='X' onClick={(e) => {
                            e.preventDefault();
                            handleDeletePrompt(prompt.id);
                    }}/>
                    </div>
                )
            })}

            <Button key={uuidv4()} title="Add Prompt" onClick={handleAddPrompt}/>
            
        </>
    )

}