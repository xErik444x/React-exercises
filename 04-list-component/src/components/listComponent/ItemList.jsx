import Item from './Item';

export default function ItemList({ items }) {
	return (
		<ul>
			{items &&
				items.map((value, index) => {
					return <Item item={value} key={index} />;
				})
            }
		</ul>
	);
}
