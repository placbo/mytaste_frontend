import ReactDOM from 'react-dom/client';
import App from './App';
import { USE_MOCK_DATA } from './constants';

async function deferRender() {
  if (USE_MOCK_DATA) {
    const { worker } = await import('./mocks/browser');
    return worker.start({
      onUnhandledRequest(req, print) {
        const url = new URL(req.url);
        const excludedRoutes = [
          '/assets/mytaste.png',
          '/roboto-latin-500-normal.woff2',
          '/roboto-latin-400-normal.woff2',
          '/resources/images/placeholder.png',
        ];
        //TODO: flytte placehoster.png til assets ?
        //tODO: lage et bedre filter
        const isExcluded = excludedRoutes.some((route) => url.pathname.includes(route));

        if (isExcluded) {
          return;
        }
        print.warning();
      },
    });
  }
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
});
