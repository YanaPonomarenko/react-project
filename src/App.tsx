import './App.css'
import { MyCity } from './components/MyCity';
import { Book } from './components/Book';

function App() {
    const cityData = {
        city_name: 'Одеса',
        country_name: 'Україна',
        year: 1794
    };

    const bookData = {
        title: 'Майстер і Маргарита',
        name_and_surname: 'Михайло Булгаков',
        janre: 'Роман-містика',
        pages_count: 480,
        reviews: [
            'Блискучий роман, який змінює світогляд!',
            'Одна з найкращих книг світової літератури.',
            'Фантастичне поєднання реальності та містики.'
        ]
    };

    return (
        <div>
            <MyCity city={cityData} />
            <hr style={{ margin: '40px 0' }} />
            <Book book={bookData} />
        </div>
    );
}

export default App;