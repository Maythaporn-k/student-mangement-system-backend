import { delete_user_core } from "../loadtest_api/core/delete_user_core.js";
import Options from "../../option.config.js";

export const thresholds_409 = {
  "http_req_failed{status:409}": ["rate<0.5"],
};

export const options = Options.const(thresholds_409);

export default function () {
  delete_user_core();
}
