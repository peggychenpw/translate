import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState("")
    const [debouncedText, setDebouncedText] = useState(text)

    //放慢請求onChange for input text
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [text])


    //request
    useEffect(() => {
        const postReq = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            await setTranslated(data.data.translations[0].translatedText)
            await console.log(translated)
        }
        postReq()
    }, [language, debouncedText])

    return (
        <div>
            <h2>{translated}</h2>
        </div>
    )
}

export default Convert
