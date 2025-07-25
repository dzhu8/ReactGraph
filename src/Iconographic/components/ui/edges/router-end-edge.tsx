import { BaseEdge, EdgeProps } from '@xyflow/react';
import { flowUtilConsts } from '../utils/consts';

export const ApRouterEndCanvasEdge = ({
  sourceX,
  targetX,
  targetY,
  sourceY,
}: EdgeProps) => {
  // Simplified path generation for visual representation
  const generatePath = () => {
    let path = `M ${sourceX} ${sourceY}`;
    path += `v ${flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEPS / 4}`;
    path +=
      targetX > sourceX
        ? flowUtilConsts.ARC_RIGHT_DOWN
        : flowUtilConsts.ARC_LEFT_DOWN;
    const horizontalLineLength =
      (Math.abs(targetX - sourceX) - 2 * flowUtilConsts.ARC_LENGTH) *
      (targetX > sourceX ? 1 : -1);
    path += `h ${horizontalLineLength}`;
    path +=
      targetX > sourceX ? flowUtilConsts.ARC_RIGHT : flowUtilConsts.ARC_LEFT;
    const verticalLineLength =
      targetY - sourceY - flowUtilConsts.VERTICAL_SPACE_BETWEEN_STEPS / 4 - 24;
    path += `v${verticalLineLength}`;
    return path;
  };

  const path = generatePath();

  return (
    <BaseEdge
      path={path}
      style={{ strokeWidth: `${flowUtilConsts.LINE_WIDTH}px` }}
    />
  );
};