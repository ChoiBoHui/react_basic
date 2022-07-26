import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const App = () => {
    return (
        <Wrapper>
            <Header />
            <Main name="일번" work="공부하기" />
            <Main name="이번이" work="전화하기" />
            <Main name="삼번" work="노크하기" />
            <Main name="사번이" work="일하기" />
            <Footer />
        </Wrapper>
    )
}

export default App;