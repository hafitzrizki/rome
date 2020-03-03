/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSTypeOperator, tsTypeOperator, AnyNode} from '@romejs/js-ast';
import {Generator} from '@romejs/js-generator';

export default function TSTypeOperator(generator: Generator, node: AnyNode) {
  node = tsTypeOperator.assert(node);
  generator.token(node.operator);
  generator.space();
  generator.print(node.typeAnnotation, node);
}
