import { QueryProviders } from '@/lib/tanstack-query';
import Routes from '@/routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<QueryProviders>
				<Routes />
			</QueryProviders>
		</BrowserRouter>
	);
};

export default App;
