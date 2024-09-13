import redirects from '../redirects.json';
import Redirect from './redirect';

export default function Redirects() {
	if (!redirects || redirects.length === 0) {
		return null;
	}

	return (
		<figure>
			<table>
				<thead>
					<tr>
						<th scope="col">From</th>
						<th scope="col">To</th>
					</tr>
				</thead>
				<tbody>
					{redirects
						.sort(({ source: a }, { source: b }) => a.localeCompare(b))
						.map(({ source, destination }) => (
							<Redirect key={`${source}->${destination}`} source={source} destination={destination} />
						))}
				</tbody>
			</table>
			<figcaption>All Redirects</figcaption>
		</figure>
	);
}
