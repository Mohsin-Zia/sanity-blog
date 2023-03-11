import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function UrlFor(source: any) {
  return builder.image(source);
}
export default UrlFor;
