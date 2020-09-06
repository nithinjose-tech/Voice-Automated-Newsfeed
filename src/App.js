import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';
import './myStyles.css';
import {BrowserRouter as Router,Switch,Route} from  'react-router-dom';
import About from './About';
import Info from './Info';
import Aim from './Aim';
import Aimer from './Aimer';
import Nav from './Nav';
import Welcome from './Welcome';
import Contact from './Contact';


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
        <Router>
        <body>
             <h1 className='primary'>Voice Automated Newsfeed</h1>
             <h1 className='josu'>Developed by Nithin Jose</h1>

           
             <Nav />
             <Route path="/home" component={Welcome} />
            <Route path="/info" component={Info} />
            <Route path="/aimer" component={Aimer} />
            <Route path="/contact" component={Contact} />
           
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            
            
            
            <div className="built">Built with :</div>

            <div className={classes.logoContainer}>
              <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>

        </body>
        </Router>
    )
}

export default App;
