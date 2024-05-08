/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContactForm, EduForm, WorkForm } from "./Form";
import { ContactDisplay, EduDisplay, WorkDisplay } from './Display';
import { Input, ParagraphInput } from "./Input";

// eslint-disable-next-line react/prop-types
export default function Wrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [info, setInfo] = useState({ school: "", degree: "", gradDate: "" });
    const [bullets, setBullets] = useState([{ value: '' }]);
 

    function handleBulletTyping(index, event) {
        const newValues = [...bullets]
        newValues[index].value = event.target.value;
        setBullets(newValues);
    }

    function handleAddBullet() {
        setBullets([...bullets, { value: '' }])
    }

    function handleRemoveBullet(index) {
        const newBullets = [...bullets]
        newBullets.splice(index, 1);
        setBullets(newBullets);
    }

   function handleSchoolTyping(e) {
        setInfo({...info, school: e.target.value})
    }
   function handleDegreeTyping(e) {
        setInfo({...info, degree: e.target.value})
    }
   function handleGradDateTyping(e) {
        setInfo({...info, gradDate: e.target.value})
   }

    
    return (
        <>
            <EduForm
                isActive={activeIndex === 0}
                onShow={(e) => {
                    //Need to use preventDefault since this button is of type 'submit'
                    e.preventDefault();
                    setActiveIndex(1)
                }}
                school={info.school}
                degree={info.degree}
                gradDate={info.gradDate}
                bullets={bullets}
                onSchoolTyping={handleSchoolTyping}
                onDegreeTyping={handleDegreeTyping}
                onGradDateTyping={handleGradDateTyping}
                onAddBullet={handleAddBullet}
                onBulletTyping={handleBulletTyping}
                onRemoveBullet={handleRemoveBullet}
            />
            <EduDisplay
                isActive={activeIndex === 1}
                onShow={(e) => setActiveIndex(0)}
                school={info.school}
                degree={info.degree}
                gradDate={info.gradDate}
                bullets={bullets}
            />
        </>
    )
}