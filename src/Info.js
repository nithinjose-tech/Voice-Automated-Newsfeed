import React from 'react';
import './myStyles.css';

function Info() {
  return (
    <div>
      <h1 className='info'>
          This is a voice sensitive application for availing instant news of any category in the world.Try to ask with the formats
           listed in the below cards.You can return back to the home page by saying 'go back'.When alan(voice assistant) ask you whether he should read the headlines,
           you could say yes if you want alan to read the headlines,if you say 'no' and say 'open article n(any number)' ,he would open the detailed information on that article.
           You can also ask him casual questions.
     </h1>
    </div>
  );
}

export default Info;
