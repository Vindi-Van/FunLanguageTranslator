import { useState } from 'react';
import translate from '../api/translate'

export default () => {
    const [translated, setTranslated] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);
    const getTranslation = async (content, translateType) => {
        setTranslated('');
        setErrorMessage('');
        setShowLoading(true);
        try{
          const response = await translate.get(`${translateType}.json`, {
            params: {
              text: content
            }
          });
          setTranslated(response.data.contents.translated); 
        } catch (e) {
          setShowLoading(false);
          setErrorMessage("Network Error: Something went wrong (exceed call count)");
        }
      }   

    return [getTranslation, translated, errorMessage];
}

