import { Outlet } from "react-router-dom";
import { StyledLink } from '../StyleForNav';
import { Suspense } from "react";
import Loader from "./Loader";

const SharedLayout = () => {
    return (
        <div>
             <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>        
        </ul>
        </nav>
        <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
        </main>
        </div>
    )
}
export default SharedLayout;