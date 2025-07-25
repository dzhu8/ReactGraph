import { BaseEdge, EdgeProps } from '@xyflow/react';
import { flowUtilConsts } from '../utils/consts';
import { BranchLabel } from './branch-label';

export const ApRouterStartCanvasEdge = ({
  sourceX,
  targetX,
  targetY,
  source,
  target,
}: EdgeProps) => {
  // Simplified path generation for visual representation
  const generatePath = () => {
    let path = `M ${targetX} ${
      targetY - flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEP_AND_LINE
    }`;
    path += `v -${flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEPS / 2}`;
    path += sourceX > targetX ? ' a12,12 0 0,1 12,-12' : ' a-12,-12 0 0,0 -12,-12';
    const horizontalLength =
      (Math.abs(targetX - sourceX) - 2 * flowUtilConsts.ARC_LENGTH) *
      (sourceX > targetX ? 1 : -1);
    path += `h ${horizontalLength}`;
    path +=
      sourceX > targetX
        ? flowUtilConsts.ARC_LEFT_UP
        : flowUtilConsts.ARC_RIGHT_UP;
    path += `v -${flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEPS / 4}`;
    return path;
  };

  const path = generatePath();

  return (
    <>
      <BaseEdge
        path={path}
        style={{ strokeWidth: `${flowUtilConsts.LINE_WIDTH}px` }}
      />
      <foreignObject
        width={flowUtilConsts.AP_NODE_SIZE.STEP.width - 10 + 'px'}
        height={
          flowUtilConsts.LABEL_HEIGHT +
          flowUtilConsts.LABEL_VERTICAL_PADDING +
          'px'
        }
        x={targetX - (flowUtilConsts.AP_NODE_SIZE.STEP.width - 10) / 2}
        y={targetY - flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEPS / 2 - 40}
        className="flex items-center"
      >
        <BranchLabel
          label="Branch"
          sourceNodeName={source}
          targetNodeName={target}
        />
      </foreignObject>
    </>
  );
};
