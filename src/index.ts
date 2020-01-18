import { Map } from './Map';
import * as map_json from './map_1.json';

const map = Map.CreateFromInterface(map_json);

console.log(map.objects[0].extend);