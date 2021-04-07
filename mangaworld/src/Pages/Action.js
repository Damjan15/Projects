import Row from "../Components/Row/Row"
import Search from "../Components/Search/Search"
import { Layout } from "../layout/Layout"

export const Action = () => {
    return (
        <>
            <Layout>
                <Search />
                {/* Row */}
                <Row />
            </Layout>
        </>
    )
}

