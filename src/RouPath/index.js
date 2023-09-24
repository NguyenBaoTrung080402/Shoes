import React from 'react';
import { BrowserRouter as Routes, Route, useNavigate } from 'react-router-dom';
import ListUser from '../Component/ListUser/ListUser';
import Header from '../Component/Header/Header';

const Index = () => {
    const Authority = {
        SEEKER: 'ROLE_SEEKER',
        EMPLOYEE: 'ROLE_EMPLOYEE',
        ADMIN: 'ROLE_ADMIN',
        GUEST: 'ROLE_GUEST'
    };

    function checkAuthentication() {
        return localStorage.getItem('token') !== null;
    }

    function getAuthority() {
        if (checkAuthentication()) {
            return JSON.parse(localStorage.getItem('current-account')).authority;
        } else {
            return Authority.GUEST;
        }
    }

    function hasAuthority(authorities, authority) {
        return authorities.includes(authority);
    }

    const navigate = useNavigate();
    const isAuthenticated = checkAuthentication();
    const authority = getAuthority();

    return (
        <div className='container'>
                <Routes>
                    {/* <Route path='/' exact>
                        {isAuthenticated && hasAuthority([Authority.ADMIN, Authority.SEEKER], authority) ? (
                            () => navigate("/management")
                        ) : isAuthenticated && hasAuthority([Authority.EMPLOYEE], authority) ? (
                            () => navigate("/user/user-home")
                        ) : (
                            <ListUser />
                        )}
                    </Route> */}
                    <Route path="/login" element={<Header></Header>} />
                    {/* <Route path="/register" component={Register} /> */}
                    {/* <Route path="/forget-password" component={ForgetPassword} /> */}

                    <Route path="/user" meta={{ isLogin: true, authorities: [Authority.EMPLOYEE] }}>
                        <Header />
                    </Route>

                    {/* <Route path="/management" meta={{ isLogin: true, authorities: [Authority.ADMIN, Authority.SEEKER] }}>
                    <Admin />
                </Route> */}

                    {/* <Route path="/:pathMatch(.*)*" component={NotFound} /> */}
                </Routes>
        </div>
    );
}

export default Index;
