/* eslint-disable */
//import { useContext } from "react";
//import { useEffect } from "react";
//import { UserContext } from "../../contexts/UserContext";
//import styled from "styled-components";
//import axios from "axios";
//import { useState } from "react";

//export default function TrendingContainerComponent() {
//    const { setIsLoadedTrendingTags } = useContext(UserContext)
//    const [trendingTags, setTrendingTags] = useState([]);

//    //useEffect(() => {
//    //    console.log("test");
//    //    const config = {
//    //        headers: {
//    //            Authorization: "Bearer f5e16715-b3b3-43eb-a575-c612106a1085",
//    //        },
//    //    };

//    //    //const promise = axios.get(`http://localhost:5000/trending`, config)
//    //    axios.get(`http://localhost:5000/trending`, config)
//    //        .then((res) => {
//    //            console.log(res.data);
//    //            setTrendingTags(res.data);
//    //            setIsLoadedTrendingTags(true);
//    //        })
//    //        .catch(error => {
//    //            console.error(error);
//    //        });
//    //}, [setIsLoadedTrendingTags]);
//    return (
//        <>
//            <TrendingContainer>
//                <TrendingTitle>trending</TrendingTitle>
//                <TrendingTags>
//                    {trendingTags.map((tt) => {
//                        return (
//                            <TrendingTag>{tt.name}</TrendingTag>
//                        );
//                    })}
//                </TrendingTags>
//            </TrendingContainer>
//        </>
//    );
//}



//const TrendingTags = styled.div`
//    margin-top: 22px;
//    margin-left: 16px;
//`;

//const TrendingTitle = styled.div`
//    font-family: 'Oswald';
//    font-style: normal;
//    font-weight: 700;
//    font-size: 27px;
//    line-height: 40px;
//    color: #FFFFFF;
//    margin-top: 9px;
//    padding-left: 16px;
//    padding-bottom: 12px;
//    border-bottom: 1px solid #484848;
//`;

//const TrendingTag = styled.p`
//    font-family: 'Lato';
//    font-style: normal;
//    font-weight: 700;
//    font-size: 19px;
//    line-height: 23px;
//    letter-spacing: 0.05em;
//    color: #FFFFFF;
//    margin-bottom: 7px;
//    cursor: pointer;
//`;