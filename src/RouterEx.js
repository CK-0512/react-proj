import React, { useState } from "react"
import { Button } from "@mui/material"
import {
    Navigate,
    NavLink,
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom"
import classNames from "classnames";

function HomeMainPage() {
    return (
        <>
            <h1>Home, Main</h1>
        </>
    );
}

function HomeAboutPage() {
    return (
        <>
            <h1>Home, About</h1>
        </>
    );
}

function ArticleListPage() {
    const articles = [{ id: 1 }, { id: 2 }];

    return (
        <>
            <h1>Article List</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <NavLink to={`/article/detail/${article.id}`}>
                            {article.id}번 게시물
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

function ArticleDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <>
            <h1>Article Detail</h1>
            <h2>{id}번 게시물 상세페이지</h2>
            <Button variant="outlined" onClick={() => navigate(-1)}>
                뒤로 가기
            </Button>
        </>
    )
}

export default function RouterEx() {
    const location = useLocation();
    return (
        <>
            <header>
                현재주소 : {location.pathname}
                <hr />
                <NavLink
                    to="/home/main"
                    className={({ isActive }) =>
                        classNames(
                            "btn",
                            { "btn-link": !isActive },
                            { "btn-primary": !isActive })}>
                    Main
                </NavLink>
                <NavLink
                    to="/home/about"
                    className={({ isActive }) =>
                        classNames(
                            "btn",
                            { "btn-link": !isActive },
                            { "btn-primary": !isActive })}>
                    About
                </NavLink>
                <NavLink
                    to="/article/list"
                    className={({ isActive }) =>
                        classNames(
                            "btn",
                            { "btn-link": !isActive },
                            { "btn-primary": !isActive })}>
                    Article List
                </NavLink>
            </header>
            <Routes>
                <Route path="/home/main" element={<HomeMainPage />} />
                <Route path="/home/about" element={<HomeAboutPage />} />
                <Route path="/article/list" element={<ArticleListPage />} />
                <Route path="/article/detail/:id" element={<ArticleDetailPage />} />
                <Route path="*" element={<Navigate to="/home/main" />} />
            </Routes>
        </>
    );
}