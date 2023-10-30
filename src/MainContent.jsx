import './MainContent.scss'
import LoginForm from './LoginForm'

export default function MainContent({content, currentPage, user, setUser}) {
    return (
        <main className="main">
            <h1 className="app__headline">{content}</h1>

        {
            currentPage === '' &&
            <>
                <h2>Home</h2>
                <p>Lad lookout yawl bring a spring upon her cable main sheet nipperkin provost schooner sheet execution dock. Starboard come about execution dock port furl gangway gibbet pillage quarterdeck Jack Ketch. Black jack ho lateen sail Barbary Coast capstan reef sails Sea Legs no prey, no pay Yellow Jack jolly boat.</p>
                <p>Port boatswain clipper trysail overhaul Gold Road sloop mutiny transom gaff. Keel grog blossom code of conduct furl barkadeer me handsomely ye tack man-of-war. Sheet belay handsomely bounty log scallywag topmast Jolly Roger schooner salmagundi.</p>
               <p> Black spot reef sails clap of thunder nipperkin warp grog blossom Letter of Marque poop deck squiffy lateen sail. Red ensign transom come about overhaul ho me Cat o'nine tails list ballast pressgang. Tackle heave down spanker draught measured fer yer chains fluke gaff tender league chantey.</p>
            </>
        }

        {
            currentPage === 'about' && <h2>About Us</h2>
        }

        {
            currentPage === 'contact' && 
            <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
            <h2>Contact Form</h2>
            <form action="">
                <label htmlFor="area">Say something beautiful!</label>
                <textarea name="area" id="area" cols="40" rows="10"></textarea>
            </form>
            </>
        }

          {
            currentPage === 'login' && <LoginForm user={user} setUser={setUser} />
        }

        </main>
    )
}