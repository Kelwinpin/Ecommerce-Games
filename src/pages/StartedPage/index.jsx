import Header from "components/Header"

const { default: Container } = require("components/Container")
const { Outlet } = require("react-router-dom")

const StartedPage = () => {
    return (
        <main>
            <Header/>
            <Container>
                <Outlet />
            </Container>
        </main>
    )
}

export default StartedPage