import React, { useRef, useState, useEffect } from 'react'
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

    return (
        <div>
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} />
        </div>
    )
}

export default Translate
