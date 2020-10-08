import React from 'react';
import './styles.css';

import Header from './components/header';
import Section1 from './components/section1';
import Statement from './components/statement';
import Section2 from './components/section2';
import Service from './components/services';
import Footer from './components/footer';

function App() {
   return (
      <div>
         <Header />
         <Section1 />
         <Statement />
         <Section2 />
         <Service />
         <Footer />
      </div>
   );
}

export default App;
