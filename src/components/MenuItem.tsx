import type { MenuItem } from "../types"

//Types que usara el componente, los importaremos
type MenuItemProps = {
    item: MenuItem, 
    addItem: (item : MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button
            className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 rounded-lg flex justify-between"
            onClick={()=>addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
