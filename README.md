# Jolpica F1 API Wrapper

### Example 1

```ts
import { Api } from 'jolpica-f1-api';

const api = new Api();

const { data: races } = await api.races({ driver: 'perez', finishPosition: 1 }).get();

for (const race of races) {
    console.log(`${race.season} ${race.name}`);
}
```

```
2020 Sakhir Grand Prix
2021 Azerbaijan Grand Prix
2022 Monaco Grand Prix
2022 Singapore Grand Prix
2023 Saudi Arabian Grand Prix
2023 Azerbaijan Grand Prix
```

### Example 2

```ts
const api = new Api();

const { meta, data: drivers } = await api.drivers({ team: 'mercedes' }).get();

console.log(`Total: ${meta.total}`);

for (const driver of drivers) {
    console.log(`${driver.firstName} ${driver.lastName}`);
}
```

```
Andrea Kimi Antonelli
Valtteri Bottas
Juan Fangio
Lewis Hamilton
Hans Herrmann
Karl Kling
Hermann Lang
Stirling Moss
Nico Rosberg
George Russell
Michael Schumacher
André Simon
Piero Taruffi
```
