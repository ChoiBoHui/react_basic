const Main = ({ name, work }) => {
    return (
        <main>
            {name}은 {work}를 해야한다.
        </main>
    )
}

// 전달받은 값이 없을 때 기본으로 전해주는 값...
Main.defaultProps = {
    work: '놀기'
}
export default Main;