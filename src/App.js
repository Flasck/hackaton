import { Map, Polygon, TypeSelector, YMaps } from "@pbe/react-yandex-maps"
import styles from "./app.module.css"
import { poligons } from "./poligons"

function App() {
	console.log(poligons.length)
	return (
		<div className={styles.wrapper}>
			<YMaps>
				<Map
					className={styles.map}
					state={{
						center: [58.01, 56.22],
						zoom: 10,
					}}
					options={{
						restrictMapArea: [
							[61.87, 51.517],
							[56.03, 59.76],
						],
					}}
				>
					<Polygon
						geometry={poligons}
						options={{
							fillColor: "#fff",
							strokeColor: "#001BFF",
							opacity: 0.3,
							strokeWidth: 3,
							strokeStyle: "solid",
						}}
					/>
					<TypeSelector options={{ float: "right" }} />
				</Map>
			</YMaps>
		</div>
	)
}

export default App
