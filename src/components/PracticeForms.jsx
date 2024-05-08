/* eslint-disable react/prop-types */
import { useState } from "react";
import { ParagraphInput } from "./Input";
import Button from "./Button";
import { v4 as uuidv4 } from 'uuid';

 const initialIds = {
        inputId: uuidv4(),
        delBtnId: uuidv4()
    }

export default function BulletWrapper({placeholder, text, onTyping}) {
    const [bulletPrompts, setBulletPrompts] = useState([{
            input: <ParagraphInput key={initialIds.inputId} placeholder={placeholder} value={text} onTyping={onTyping} />,
            inputId: initialIds.inputId,
        delBtnId: initialIds.delBtnId,
    }]);
    
   

     function handleDeletePrompt(selectedId) {
        const updatedPrompts = bulletPrompts.filter(prompt => prompt.inputId !== selectedId);
        setBulletPrompts(updatedPrompts);

    }


    function handleAddPrompt(e) {
        e.preventDefault();
        const newId = uuidv4()
        const delBtnId = uuidv4()
        setBulletPrompts([...bulletPrompts, {
            input: <ParagraphInput key={newId} placeholder={placeholder} value={text} onTyping={onTyping} />,
            inputId: newId,
            delBtnId: delBtnId,
        }])
    }

   

    return (
        <>
            {bulletPrompts.map(prompt => {
                return (
                    <div key={prompt.inputId}>
                        {prompt.input}
                        <Button key={prompt.delBtnId} title='X' onClick={(e) => {
                            e.preventDefault();
                            handleDeletePrompt(prompt.inputId);
                        }}/>
                    </div>
                )
            })}

            {/* Might need to move uuidv4() elsewhere so the key isn't being generated on render */}
            <Button key={uuidv4()} title="Add Prompt" onClick={handleAddPrompt}/>
            
        </>
    )

}