import socrates from "../assets/socratesazul-cke.jpg"
import diogenes from "../assets/Diogenes.jpeg"
import { PostsContainer, Post, UserPhoto, PostData, PostTitle, PostSubtitle, LinkContainer, LinkData, LinkPhoto, LinkSummary, LinkTitle, LinkUrl } from "./PostsContainerComponentStyle";

export default function PostsContainerComponents() {
    return (
        <PostsContainer>
            <Post>
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
            </Post>
        </PostsContainer>
    );
}