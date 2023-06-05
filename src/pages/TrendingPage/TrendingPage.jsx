import Header from "../../components/Header/Header";
//import PublishContainer from "../../components/TredingPage/PublishContainerComponent";
import PublishContainer from "../../components/TrendingPage/PublishContainerComponent";
//import PostsContainerComponents from "../../components/TredingPage/PostsContainerComponent";
import PostsContainerComponents from "../../components/TrendingPage/PostsContainerComponent";
import { TrendingContainer, TrendingTags, TrendingTag, TrendingTitle, TimeLineContainer, TimeLineTitle, Loading, TrendingPageContainer } from "./TrendingPageStyle";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
//import { useEffect } from "react";
import axios from "axios";
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
                                    <Link key={index} to={`/hashtag/${cleanedHashtag}`}>
                                        <TrendingTag >{`# ${cleanedHashtag}`}</TrendingTag>
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