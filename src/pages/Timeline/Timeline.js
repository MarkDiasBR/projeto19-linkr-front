import { Container, TitleContainer, PostsContainer, ContentContainer, TrendingContainer } from "./styled";
import Publish from "../../components/Publish/Publish";
import Trending from "../../components/Trending/Trending";
import Post from "../../components/Post/Post";

export default function Timeline() {
    return (
        <Container>
            <TitleContainer>
                <p>timeline</p>
            </TitleContainer>
            <ContentContainer>
                <PostsContainer>
                    <Publish />
                    <Post />
                    <Post />
                    <Post />
                </PostsContainer>
                <TrendingContainer>
                    <Trending />
                </TrendingContainer>
            </ContentContainer>
        </Container>
    )
}