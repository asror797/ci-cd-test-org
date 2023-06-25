import App from "./app";
import AuthRoute from "./routes/auth.route";
import BranchRoute from "./routes/branch.route";
import CollectionRoute from "./routes/collection.route";
import ComplectRoute from "./routes/complect.route";
import ConfigRoute from "./routes/config.route";
import FTypeRoute from "./routes/ftype.route";
import LegRoute from "./routes/leg.route";
import ModelRoute from "./routes/model.route";
import OrderRoute from "./routes/order.route";
import RoleRoute from "./routes/role.route";
import TissueRoute from "./routes/tissue.route";
import UserRoute from "./routes/user.route";


const app = new App([
   new RoleRoute(),
   new UserRoute(),
   new BranchRoute(),
   new FTypeRoute(),
   new AuthRoute(),
   new ModelRoute(),
   new ConfigRoute(),
   new TissueRoute(),
   new CollectionRoute(),
   new LegRoute(),
   new ComplectRoute(),
   new OrderRoute()
]);


app.listen()

