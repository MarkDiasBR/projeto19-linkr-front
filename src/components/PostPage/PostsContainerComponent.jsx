import socrates from "../../assets/socratesazul-cke.jpg"
//import diogenes from "../assets/Diogenes.jpeg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { PostsContainer, Post, UserPhoto, PostData, PostTitle, PostSubtitle, LinkContainer, LinkData, LinkPhoto, LinkSummary, LinkTitle, LinkUrl } from "./PostsContainerComponentStyle";

export default function PostsContainerComponents() {
    const { timeLineData, metaDataInfo } = useContext(UserContext);

    //const APILinkMetaData = "https://jsonlink.io/api/extract?url=";

    //useEffect(() => {
    //    //console.log(timeLineData);
    //    //console.log(timeLineData.length);
    //    timeLineData.forEach((tld) => {
    //        const promise = axios.get(`${APILinkMetaData}${tld.url}`);
    //        promise.then((res) => {
    //            const description = res.data.description > 255
    //                ? res.data.description.slice(0, 300) + "..."
    //                : res.data.description.description;
    //            const newMeta = { title: res.data.title, description };
    //            metaDataInfo = [...metaDataInfo, newMeta];
    //            setMetaDetaInfo(metaDataInfo);
    //        });
    //    });
    //    console.log("metaDataInfo",metaDataInfo);
    //}, [timeLineData]);


    return (
        <PostsContainer>
            {timeLineData.slice().reverse().map((tln, index) => {
                const metaInfo = metaDataInfo.slice().reverse()[index];
                const description =
                    metaInfo?.description.length > 255
                        ? metaInfo?.description.slice(0, 255) + "..."
                        : metaInfo?.description;
                return (
                    <Post key={index}>
                        <UserPhoto src={tln.urlp} alt={`${tln.username} photo`} />
                        <PostData>
                            <PostTitle>{tln.username}</PostTitle>
                            <PostSubtitle>{tln.description}</PostSubtitle>
                            <LinkContainer>
                                <LinkData>
                                    <LinkTitle>
                                        {metaInfo ? metaInfo.title : "loading..."}
                                    </LinkTitle>
                                    <LinkSummary>
                                        {metaInfo ? description : "loading..."}
                                    </LinkSummary>
                                    <LinkUrl>{tln.url}</LinkUrl>
                                </LinkData>
                                <LinkPhoto
                                    src={metaInfo ? metaInfo.images : socrates}
                                    alt="link photo"
                                />
                            </LinkContainer>
                        </PostData>
                    </Post>
                );
            })}
            {/*<Post>
                <UserPhoto src={socrates} alt="socrates" />
                <PostData>
                    <PostTitle>Juvenal Juvêncio</PostTitle>
                    <PostSubtitle>
                        Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
                    </PostSubtitle>
                    <LinkContainer>
                        <LinkData>
                            <LinkTitle>Como aplicar o Material UI em um projeto React</LinkTitle>
                            <LinkSummary>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</LinkSummary>
                            <LinkUrl>https://medium.com/@pshrmn/a-simple-react-router</LinkUrl>
                        </LinkData>
                        <LinkPhoto src={diogenes} alt="diogenes" />
                    </LinkContainer>
                </PostData>
            </Post>*/}
        </PostsContainer>
    );
}