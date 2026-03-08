import { Link } from "react-router";

const Navbar = (): React.JSX.Element => {
    return (
        <nav className="w-full p-4 md:px-20 md:py-6 flex items-center justify-between shadow-2xs">
            <h1 className="text-2xl font-bold text-sky-800">Events</h1>

            <ul className="flex items-center gap-6">
                <li>
                    <Link
                        to="/"
                        className="text-lg font-medium hover:text-sky-800 transition duration-300 ease-in-out"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/signup"
                        className="text-lg font-medium hover:text-sky-800 transition duration-300 ease-in-out"
                    >
                        Signup
                    </Link>
                </li>

                <li>
                    <Link
                        to="/login"
                        className="text-lg font-medium hover:text-sky-800 transition duration-300 ease-in-out"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;