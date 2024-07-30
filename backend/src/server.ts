import App from '@/app';
import IndexRoute from '@routes/index.route';
import ParkingSpotRoute from '@routes/parkingSpot.route';
import ParkingClusterRoute from '@routes/parkingCluster.route';
import AuthRoute from '@routes/auth.route';
import UserRoute from '@routes/user.route';

const app = new App([new IndexRoute(), new ParkingSpotRoute(), new ParkingClusterRoute(), new AuthRoute(), new UserRoute()]);

app.listen();
