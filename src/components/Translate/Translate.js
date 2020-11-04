import React, { useRef, useState, useEffect } from 'react'
import Convert from '../Convert'
import Dropdown from '../Dropdown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arbic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]


const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label >Enter text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>

            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} />
            <Convert language={language} text={text} />
        </div>
    )
}

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

export default Translate
