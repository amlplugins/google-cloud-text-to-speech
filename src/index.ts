/**
 * @amlplugins/google-cloud-text-to-speech
 *
 * Thin namespaced re-export of the native @google-cloud/text-to-speech SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Text-to-Speech.
 */

import * as _sdk from "@google-cloud/text-to-speech";
export * from "@google-cloud/text-to-speech";
export { _sdk as sdk };
export default _sdk;
