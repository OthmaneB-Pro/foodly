import { useContext } from "react"
import { MenuContext } from "../../../../../../context/MenuContext"

export default function SelectedCard() {
   const {selectedProduct} = useContext(MenuContext)
  return (
    <div>
          <p>{selectedProduct?.title}</p>
          <p>{selectedProduct?.imageSource}</p>
          <p>{selectedProduct?.price}</p>
        </div>
  )
}
