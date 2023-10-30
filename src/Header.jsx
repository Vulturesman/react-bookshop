import "./Header.scss"
import Topmenu from './Topmenu'

export default function Header({title, currentPage, setCurrentPage, user}) {

    const currentItem = 'about';

    return (
        <header className="header">

            { user != null && <h2>Welcome {user.email}! alias {user.name}</h2>}

            <Topmenu currentItemMenu={currentItem} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="header__sitename">
                {title}
            </div>

        </header>
    )
}