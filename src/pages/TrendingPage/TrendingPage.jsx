import Header from "../../components/Header";
import PublishContainer from "../../components/TimeLine/PublishContainerComponent";
import PostsContainerComponents from "../../components/TimeLine/PostsContainerComponent";
import { TimeLineContainer, TimeLineTitle, Loading, TrendingPageContainer } from "./TrendingPageStyle";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
//import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from 'react-router-dom';


export default function TrendingPage() {
    //const { isLoadedPage, isLoadedTrendingTags, setIsLoadedTrendingTags } = useContext(UserContext);
    //const [trendingTags, setTrendingTags] = useState([]);
    const { isLoadedPage, isLoadedTrendingTags, setIsLoadedTrendingTags } = useContext(UserContext);
    const [trendingTags, setTrendingTags] = useState([]);

    useEffect(() => {
        console.log("test");
        const config = {
            headers: {
                Authorization: "Bearer f5e16715-b3b3-43eb-a575-c612106a1085",
            },
        };

        //const promise = axios.get(`http://localhost:5000/trending`, config)
        axios.get(`http://localhost:5000/trending`, config)
            .then((res) => {
                console.log(res.data);
                setTrendingTags(res.data);
                setIsLoadedTrendingTags(true);
            })
            .catch(error => {
                console.error(error);
            });
    }, [setIsLoadedTrendingTags]);

    function loadingPage() {
        if (isLoadedPage && isLoadedTrendingTags) {
            return (
                <TrendingPageContainer>
                    <TimeLineContainer>
                        <TimeLineTitle>timeline</TimeLineTitle>
                        <PublishContainer />
                        <PostsContainerComponents />
                    </TimeLineContainer>
                    <TrendingContainer>
                        <TrendingTitle>trending</TrendingTitle>
                        <TrendingTags>
                            {trendingTags.map((tt, index) => {
                                const cleanedHashtag = tt.name.replace('#', '');
                                return (
                                    <Link to={`/hashtag/${cleanedHashtag}`}>
                                        <TrendingTag key={index}>{`# ${cleanedHashtag}`}</TrendingTag>
                                    </Link>
                                );
                            })}
                        </TrendingTags>
                    </TrendingContainer>
                </TrendingPageContainer>
            );
        }
        else {
            return (
                <Loading>LOADING...</Loading>
            );
        }
    }

    return (
        <>
            <Header />
            {loadingPage()}
        </>
    );
}

const TrendingTags = styled.div`
    margin-top: 22px;
    margin-left: 16px;
        a{
        color: #FFFFFF;
        text-decoration: none;
        &:link, &:visited {
            color: none;
            text-decoration: none;
            cursor: none;
        }

        &:link:active, &:visited:active {
            color: none;
        }
}
`;

const TrendingTitle = styled.div`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;
    margin-top: 9px;
    padding-left: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #484848;
`;

const TrendingTag = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 7px;
    cursor: pointer;
`;

const TrendingContainer = styled.div`
    width: 301px;
    height: 406px;
    background: #171717;
    /*background: red;*/
    border-radius: 16px;
    margin-top: 170px;
`;

