import ItemList from "./ItemList";

export default function List() {
    const itemList = [
        "Milk",
        "Eggs",
        "Bread",
        "Apples",
        "Chicken",
        "Rice",
        "Tomatoes",
        "Cheese",
        "Spinach",
        "Toilet paper"
    ]
	return (
		<ItemList items={itemList}/>
	);
}
