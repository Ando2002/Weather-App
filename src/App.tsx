
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div >
      <Routes>
        <Route index element={<Layout />} />
        <Route path='/' />
      </Routes>
    </div>

  )
}

export default App;






/*
1. էջը բացելուց պետք ա երևա մեր էդ պահի գտնվելու վայրի եղանակը։
2. պետքա լինի search անհրաժեշտ քաղաքի եղանակի համար։
3. էջում պետք ա երևա էդ օրվա և մոտակա ջ օրերի եղանակը։
4. default-ով պետք ա երևա էդ օրվա եղանակը, բայց փոխելու հնարավորությամբ։
5. ամենօրյա եղանակը պետք ա ցույց տա էն պահի եղանակը որ ժամին մտել ենք։
6. ցելսիուս ու ֆարենհայտ։
*/