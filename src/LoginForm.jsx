import './LoginForm.scss'

export default function LoginForm( {user, setUser}) {

        const handleUser = (event) => {
            event.preventDefault();
            setUser({
                id: 1,
                name: 'John',
                email: 'john.doe@gmail.com'
            })
        }

        const logoutUser = () => {
            setUser(null);
        }

    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"></link>
            <h2>Login Form</h2>

            {user != null && 
            <>
            <h3>You are logged in, you can easily logout in here:</h3>
            <button onClick={logoutUser}>LOGOUT</button>
            </>}

            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <input onClick={handleUser} type="submit" value="SUBMIT HERE!" />

            </form>
        </>
    )
}