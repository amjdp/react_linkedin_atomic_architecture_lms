import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";
import { RouteConstants } from "../Utility/RouteConstantUtility";
import RouteDataType from "./type";
import Feed from "../Components/Template/Feed";

const RouteData: { [key: string]: RouteDataType } = {
  base: {
    path: RouteConstants.base,
    component: Login,
    isPrivate: false,
    menuText: "/",
  },
  login: {
    path: RouteConstants.login,
    component: Login,
    isPrivate: false,
    menuText: "Login",
  },
  signup: {
    path: RouteConstants.signup,
    component: Signup,
    isPrivate: false,
    menuText: "Signup",
  },
  feed: {
    path: RouteConstants.feed,
    component: Feed,
    isPrivate: true,
    menuText: "Feed",
  },
};

export default RouteData;
