import { history } from "helpers";

export default function navigate(path: string) {
  history.push({ pathname: path });
}
