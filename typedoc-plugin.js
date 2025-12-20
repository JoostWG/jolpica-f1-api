import { Converter, ReflectionKind } from 'typedoc';

/**
 * @param {import('typedoc').Application} app
 */
export function load(app) {
    app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (context) => {
        for (const reflection of context.project.getReflectionsByKind(ReflectionKind.All)) {
            const since = reflection.comment?.getTag('@since');

            if (!since) {
                continue;
            }

            const version = since.content[0]?.text?.trim();

            if (!version) {
                continue;
            }

            since.content = [{
                kind: 'text',
                text: `[${version}](https://github.com/JoostWG/jolpica-f1-api/tree/v${version})`,
            }];
        }
    });
}
