import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import './myStyles.css'


const alanKey='58e33020f8a581ac049f4dc1c47d03712e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);

    const classes = useStyles();


    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number}) => {

                if(command==='newHeadlines') {

                    setNewsArticles(articles);
                    setActiveArticle(-1);

                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];

                    if (parsedNumber > 20) {
                        alanBtn().playText('Please try that again...');
                      } else if (article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...');
                      } 


                    
                    
                    
                }
               
                   


            }
        })
    },[])
    return (
        <body>
             <h1 className='primary'>Voice Automated Newsfeed</h1>
             <h1 className='josu'>Developed by Nithin Jose</h1>
            
           
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            
            <div className="built">Built with :</div>

            <div className={classes.logoContainer}>
              <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>

        </body>
    )
}

export default App;
