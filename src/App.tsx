import './App.css'

import { FavoriteMovie } from './components/Film';
import { PersonalPage } from './components/Profile';

function App() {

    const filmData = {
        title: 'Гра престолів',
        director: 'Девід Беніофф, Д.Б. Вайсс',
        release_year: 2011,
        studio: 'HBO',
    };


    const profileData = {
        fullName: 'Іван Іванович',
        phone: '+380 12 34 56 78',
        email: 'ivan.ivanovich@example.com',
        city: 'Одеса',
        workExperience: '5 років в IT',
        skills: 'JavaScript, React, TypeScript'
    };

    return (
        <div>
            <FavoriteMovie movie={filmData} />

            <hr style={{ margin: '50px 0', border: '2px solid #ddd' }} />

            <PersonalPage profile={profileData} />
        </div>
    );
}


export default App;

//import { MyCity } from './components/MyCity';
//import { Book } from './components/Book';

//function App() {
    //const cityData = {
        //city_name: 'Одеса',
        //country_name: 'Україна',
        //year: 1794
    //};

    //const bookData = {
        //title: 'Майстер і Маргарита',
        //name_and_surname: 'Михайло Булгаков',
        //janre: 'Роман-містика',
        //pages_count: 480,
        //reviews: [
            //'Блискучий роман, який змінює світогляд!',
            //'Одна з найкращих книг світової літератури.',
            //'Фантастичне поєднання реальності та містики.'
        //]
    //};

    //return (
        //<div>
            //<MyCity city={cityData} />
           // <hr style={{ margin: '40px 0' }} />
           // <Book book={bookData} />
        //</div>
    //);
//}

