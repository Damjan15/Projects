import Card from "../Card/Card";
import { CategoriesBody, CategoriesContainer, CategoriesH1, CategoriesItems, CategoriesMenu } from "./categories.styles"

const Categories = () => {
    return (
        <CategoriesContainer>
           <CategoriesH1>Categories</CategoriesH1>
           <CategoriesMenu>
               <CategoriesItems>Laptops</CategoriesItems>
               <CategoriesItems>Smartphones</CategoriesItems>
               <CategoriesItems>Headphones</CategoriesItems>
               <CategoriesItems>TV's</CategoriesItems>
           </CategoriesMenu>

           <CategoriesBody>
               <Card />
               <Card />
               <Card />
               <Card />
           </CategoriesBody>
        </CategoriesContainer>
    )
}

export default Categories
